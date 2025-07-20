import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { insertEventSchema, insertSponsorshipSchema, insertMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // User profile routes
  app.patch('/api/user/profile', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const updateData = req.body;
      
      const currentUser = await storage.getUser(userId);
      if (!currentUser) {
        return res.status(404).json({ message: "User not found" });
      }

      const updatedUser = await storage.upsertUser({
        ...currentUser,
        ...updateData,
        id: userId,
      });

      res.json(updatedUser);
    } catch (error) {
      console.error("Error updating user profile:", error);
      res.status(500).json({ message: "Failed to update profile" });
    }
  });

  // Event routes
  app.get('/api/events', async (req, res) => {
    try {
      const { query, category, university } = req.query;
      let events;
      
      if (query || category || university) {
        events = await storage.searchEvents(
          query as string,
          category as string,
          university as string
        );
      } else {
        events = await storage.getEvents();
      }
      
      res.json(events);
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });

  app.get('/api/events/:id', async (req, res) => {
    try {
      const eventId = parseInt(req.params.id);
      const event = await storage.getEventById(eventId);
      
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      
      res.json(event);
    } catch (error) {
      console.error("Error fetching event:", error);
      res.status(500).json({ message: "Failed to fetch event" });
    }
  });

  app.post('/api/events', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const eventData = insertEventSchema.parse(req.body);
      
      const event = await storage.createEvent({
        ...eventData,
        organizerId: userId,
      });
      
      res.status(201).json(event);
    } catch (error) {
      console.error("Error creating event:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid event data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create event" });
    }
  });

  app.get('/api/user/events', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const events = await storage.getEventsByOrganizer(userId);
      res.json(events);
    } catch (error) {
      console.error("Error fetching user events:", error);
      res.status(500).json({ message: "Failed to fetch user events" });
    }
  });

  // Sponsorship routes
  app.post('/api/sponsorships', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const sponsorshipData = insertSponsorshipSchema.parse(req.body);
      
      const sponsorship = await storage.createSponsorship({
        ...sponsorshipData,
        sponsorId: userId,
      });
      
      res.status(201).json(sponsorship);
    } catch (error) {
      console.error("Error creating sponsorship:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid sponsorship data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create sponsorship" });
    }
  });

  app.get('/api/user/sponsorships', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const sponsorships = await storage.getSponsorshipsBySponsor(userId);
      res.json(sponsorships);
    } catch (error) {
      console.error("Error fetching user sponsorships:", error);
      res.status(500).json({ message: "Failed to fetch user sponsorships" });
    }
  });

  app.get('/api/events/:id/sponsorships', async (req, res) => {
    try {
      const eventId = parseInt(req.params.id);
      const sponsorships = await storage.getSponsorshipsByEvent(eventId);
      res.json(sponsorships);
    } catch (error) {
      console.error("Error fetching event sponsorships:", error);
      res.status(500).json({ message: "Failed to fetch event sponsorships" });
    }
  });

  // Message routes
  app.get('/api/messages', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const messages = await storage.getRecentMessages(userId);
      res.json(messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ message: "Failed to fetch messages" });
    }
  });

  app.get('/api/conversations/:userId', isAuthenticated, async (req: any, res) => {
    try {
      const currentUserId = req.user.claims.sub;
      const otherUserId = req.params.userId;
      const eventId = req.query.eventId ? parseInt(req.query.eventId as string) : undefined;
      
      const messages = await storage.getConversation(currentUserId, otherUserId, eventId);
      res.json(messages);
    } catch (error) {
      console.error("Error fetching conversation:", error);
      res.status(500).json({ message: "Failed to fetch conversation" });
    }
  });

  app.post('/api/messages', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const messageData = insertMessageSchema.parse(req.body);
      
      const message = await storage.createMessage({
        ...messageData,
        senderId: userId,
      });
      
      res.status(201).json(message);
    } catch (error) {
      console.error("Error creating message:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid message data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create message" });
    }
  });

  // Recommendation routes
  app.get('/api/recommendations/events', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const events = await storage.getRecommendedEvents(userId);
      res.json(events);
    } catch (error) {
      console.error("Error fetching recommended events:", error);
      res.status(500).json({ message: "Failed to fetch recommended events" });
    }
  });

  app.get('/api/events/:id/recommended-sponsors', async (req, res) => {
    try {
      const eventId = parseInt(req.params.id);
      const sponsors = await storage.getRecommendedSponsors(eventId);
      res.json(sponsors);
    } catch (error) {
      console.error("Error fetching recommended sponsors:", error);
      res.status(500).json({ message: "Failed to fetch recommended sponsors" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

