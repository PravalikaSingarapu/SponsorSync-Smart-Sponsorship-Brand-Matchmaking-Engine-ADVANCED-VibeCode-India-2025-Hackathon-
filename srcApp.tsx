import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/landing";
import Home from "@/pages/home";
import StudentDashboard from "@/pages/student-dashboard";
import SponsorDashboard from "@/pages/sponsor-dashboard";
import CreateEvent from "@/pages/create-event";
import BrowseEvents from "@/pages/browse-events";
import BrowseSponsors from "@/pages/browse-sponsors";
import Profile from "@/pages/profile";
import Messages from "@/pages/messages";

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <Switch>
      {isLoading || !isAuthenticated ? (
        <Route path="/" component={Landing} />
      ) : (
        <>
          <Route path="/" component={Home} />
          <Route path="/dashboard/student" component={StudentDashboard} />
          <Route path="/dashboard/sponsor" component={SponsorDashboard} />
          <Route path="/events/create" component={CreateEvent} />
          <Route path="/events/browse" component={BrowseEvents} />
          <Route path="/sponsors/browse" component={BrowseSponsors} />
          <Route path="/profile" component={Profile} />
          <Route path="/messages" component={Messages} />
        </>
      )}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

