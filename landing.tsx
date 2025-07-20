import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Handshake, 
  Users, 
  Building, 
  CalendarCheck, 
  GraduationCap, 
  Briefcase, 
  Check,
  Search,
  MessageCircle,
  TrendingUp,
  Star,
  DollarSign,
  Calendar,
  MapPin,
  Eye,
  Sparkles,
  Zap,
  Heart,
  Target
} from "lucide-react";

export default function Landing() {
  const handleLogin = () => {
    window.location.href = "/api/login";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-neutral-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="relative mr-3">
                  <Eye className="h-8 w-8 text-primary" />
                  <Sparkles className="h-4 w-4 text-accent absolute -top-1 -right-1" />
                </div>
                <span className="text-2xl font-bold gradient-text">Event Eye</span>
                <span className="text-xs text-neutral-500 ml-2 hidden sm:block">by EventConnect</span>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Features</a>
                <a href="#success-stories" className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Success Stories</a>
                <a href="#pricing" className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Pricing</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={handleLogin}>Sign In</Button>
              <Button onClick={handleLogin}>Get Started</Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="gradient-hero text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Floating decorative elements */}
          <div className="absolute top-10 left-10 animate-bounce">
            <Star className="h-8 w-8 text-yellow-300" />
          </div>
          <div className="absolute top-20 right-20 animate-pulse">
            <Zap className="h-6 w-6 text-cyan-300" />
          </div>
          <div className="absolute bottom-20 left-20 animate-bounce delay-300">
            <Heart className="h-6 w-6 text-pink-300" />
          </div>
          
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Eye className="h-20 w-20 text-white neon-glow" />
                <Sparkles className="h-8 w-8 text-yellow-300 absolute -top-2 -right-2 animate-pulse" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block">See Every Opportunity with</span>
              <span className="block text-yellow-300 animate-pulse">Event Eye Vision</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              🎯 Smart AI-powered matching connects student organizers with perfect corporate sponsors in real-time
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
              <div className="flex items-center glass-card p-4 rounded-xl hover-lift">
                <Users className="h-6 w-6 text-yellow-300 mr-2" />
                <span className="text-lg font-semibold">10,000+ Active Students</span>
              </div>
              <div className="flex items-center glass-card p-4 rounded-xl hover-lift">
                <Building className="h-6 w-6 text-green-300 mr-2" />
                <span className="text-lg font-semibold">500+ Corporate Partners</span>
              </div>
              <div className="flex items-center glass-card p-4 rounded-xl hover-lift">
                <CalendarCheck className="h-6 w-6 text-pink-300 mr-2" />
                <span className="text-lg font-semibold">2,500+ Successful Matches</span>
              </div>
            </div>
          </div>
          
          {/* Dual User Type Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <GraduationCap className="h-12 w-12 text-yellow-300 mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold mb-2">Student Organizers</h3>
                  <p className="text-blue-100">Find sponsors for your campus events</p>
                </div>
                <ul className="space-y-3 mb-6 text-blue-100">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Create detailed event profiles
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Access sponsor marketplace
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Track event performance
                  </li>
                </ul>
                <Button onClick={handleLogin} className="w-full gradient-success hover:scale-105 transform transition-all duration-300 text-white font-semibold py-3 neon-glow">
                  🎓 Join as Student Organizer
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Briefcase className="h-12 w-12 text-cyan-300 mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold mb-2">Corporate Sponsors</h3>
                  <p className="text-blue-100">Reach engaged student audiences</p>
                </div>
                <ul className="space-y-3 mb-6 text-blue-100">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-yellow-300 mr-2 flex-shrink-0" />
                    Browse curated events
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-yellow-300 mr-2 flex-shrink-0" />
                    Intelligent matching system
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-yellow-300 mr-2 flex-shrink-0" />
                    Measure campaign impact
                  </li>
                </ul>
                <Button onClick={handleLogin} className="w-full gradient-accent hover:scale-105 transform transition-all duration-300 text-white font-semibold py-3 neon-glow">
                  💼 Join as Corporate Sponsor
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Target className="h-12 w-12 text-purple-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Everything You Need to Connect and Succeed
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              🚀 Our platform provides powerful tools for both sides of the sponsorship equation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="gradient-card hover-lift border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4 text-center">🎯 Smart Matching</h3>
                <p className="text-neutral-600 text-center">Our AI-powered algorithm matches events with relevant sponsors based on themes, demographics, and marketing goals.</p>
              </CardContent>
            </Card>
            
            <Card className="gradient-card hover-lift border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-secondary rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4 text-center">💬 Direct Messaging</h3>
                <p className="text-neutral-600 text-center">Communicate directly with potential partners through our secure messaging system to discuss collaboration details.</p>
              </CardContent>
            </Card>
            
            <Card className="gradient-card hover-lift border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-accent rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4 text-center">📊 Analytics Dashboard</h3>
                <p className="text-neutral-600 text-center">Track event performance, sponsor engagement, and ROI with comprehensive analytics and reporting tools.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Success Stories That Inspire
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              See how EventConnect has transformed campus events and corporate sponsorships.
            </p>
          </div>
          
          {/* Success Metrics */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center glass-card p-6 rounded-xl hover-lift">
              <DollarSign className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="text-4xl font-bold gradient-text mb-2">$2.5M+</div>
              <div className="text-neutral-600">💰 Total Funding Secured</div>
            </div>
            <div className="text-center glass-card p-6 rounded-xl hover-lift">
              <Heart className="h-8 w-8 text-pink-500 mx-auto mb-2" />
              <div className="text-4xl font-bold text-pink-600 mb-2">98%</div>
              <div className="text-neutral-600">❤️ Satisfaction Rate</div>
            </div>
            <div className="text-center glass-card p-6 rounded-xl hover-lift">
              <GraduationCap className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-neutral-600">🎓 Universities Served</div>
            </div>
            <div className="text-center glass-card p-6 rounded-xl hover-lift">
              <Zap className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-4xl font-bold text-purple-600 mb-2">72hrs</div>
              <div className="text-neutral-600">⚡ Average Match Time</div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-neutral-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">SC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">Sarah Chen</div>
                    <div className="text-sm text-neutral-600">Stanford University</div>
                  </div>
                </div>
                <p className="text-neutral-700 italic mb-4">"EventConnect helped us secure $50,000 in sponsorships for our AI conference. The matching was so accurate!"</p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-accent fill-current" />
                  ))}
                  <span className="text-sm text-neutral-600 ml-2">5/5</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-neutral-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">MR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">Michael Rodriguez</div>
                    <div className="text-sm text-neutral-600">TechFlow Solutions</div>
                  </div>
                </div>
                <p className="text-neutral-700 italic mb-4">"We've reached over 10,000 students through EventConnect. The ROI has been exceptional for our brand awareness campaigns."</p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-accent fill-current" />
                  ))}
                  <span className="text-sm text-neutral-600 ml-2">5/5</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-neutral-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">DP</span>
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">David Park</div>
                    <div className="text-sm text-neutral-600">UC Berkeley</div>
                  </div>
                </div>
                <p className="text-neutral-700 italic mb-4">"The platform's messaging system made it so easy to connect with sponsors. We funded 3 major events this semester!"</p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-accent fill-current" />
                  ))}
                  <span className="text-sm text-neutral-600 ml-2">5/5</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Showcase */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Featured Events Seeking Sponsors
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Discover high-impact events with engaged audiences ready for your brand.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg border-neutral-200">
              <CardContent className="p-6">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Tech Conference</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Technology</span>
                  <span className="text-xs text-neutral-500">MIT</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Future of AI Summit</h3>
                <p className="text-neutral-600 text-sm mb-4">A 3-day conference featuring industry leaders discussing AI innovations and career opportunities.</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-neutral-600">
                    <Users className="h-4 w-4 mr-2 text-primary" />
                    <span>Expected: 2,500 attendees</span>
                  </div>
                  <div className="flex items-center text-sm text-neutral-600">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span>March 15-17, 2024</span>
                  </div>
                  <div className="flex items-center text-sm text-neutral-600">
                    <DollarSign className="h-4 w-4 mr-2 text-primary" />
                    <span>Seeking: $25,000</span>
                  </div>
                </div>
                
                <Button className="w-full">View Details</Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg border-neutral-200">
              <CardContent className="p-6">
                <div className="h-48 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Startup Pitch</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">Business</span>
                  <span className="text-xs text-neutral-500">Stanford</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Startup Pitch Competition</h3>
                <p className="text-neutral-600 text-sm mb-4">Student entrepreneurs compete for funding while showcasing innovative solutions to real-world problems.</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-neutral-600">
                    <Users className="h-4 w-4 mr-2 text-secondary" />
                    <span>Expected: 800 attendees</span>
                  </div>
                  <div className="flex items-center text-sm text-neutral-600">
                    <Calendar className="h-4 w-4 mr-2 text-secondary" />
                    <span>April 22, 2024</span>
                  </div>
                  <div className="flex items-center text-sm text-neutral-600">
                    <DollarSign className="h-4 w-4 mr-2 text-secondary" />
                    <span>Seeking: $15,000</span>
                  </div>
                </div>
                
                <Button variant="secondary" className="w-full">View Details</Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg border-neutral-200">
              <CardContent className="p-6">
                <div className="h-48 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Career Fair</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">Career</span>
                  <span className="text-xs text-neutral-500">UCLA</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Engineering Career Fair</h3>
                <p className="text-neutral-600 text-sm mb-4">Connect with top engineering talent through networking sessions, workshops, and recruitment opportunities.</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-neutral-600">
                    <Users className="h-4 w-4 mr-2 text-accent" />
                    <span>Expected: 3,000 attendees</span>
                  </div>
                  <div className="flex items-center text-sm text-neutral-600">
                    <Calendar className="h-4 w-4 mr-2 text-accent" />
                    <span>February 28, 2024</span>
                  </div>
                  <div className="flex items-center text-sm text-neutral-600">
                    <DollarSign className="h-4 w-4 mr-2 text-accent" />
                    <span>Seeking: $40,000</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white">View Details</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button onClick={handleLogin} variant="outline" size="lg">
              Browse All Events
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Campus Events?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of students and corporate sponsors who have successfully connected through EventConnect.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleLogin} variant="secondary" size="lg">
              Start as Student Organizer
            </Button>
            <Button onClick={handleLogin} className="bg-accent hover:bg-yellow-500 text-white" size="lg">
              Join as Corporate Sponsor
            </Button>
          </div>
          
          <p className="text-blue-200 mt-6">
            No setup fees • Free trial available • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center mb-4">
                <Handshake className="h-8 w-8 text-primary mr-2" />
                <span className="text-2xl font-bold">EventConnect</span>
              </div>
              <p className="text-neutral-400 mb-4">
                Connecting student organizers with corporate sponsors for impactful campus events.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Students</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Create Event Profile</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Find Sponsors</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Event Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Sponsors</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Browse Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sponsor Benefits</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ROI Calculator</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-400">
            <div className="space-y-4">
              <p>&copy; 2024 Event Eye by EventConnect. All rights reserved.</p>
              
              {/* Creator Attribution */}
              <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl p-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-3">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-white font-semibold text-lg">Created by</span>
                  <Star className="h-5 w-5 text-yellow-400 ml-2" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-2">Pravalika Singarapu</h3>
                <div className="flex items-center justify-center space-x-2 text-sm text-neutral-300">
                  <Zap className="h-4 w-4 text-cyan-400" />
                  <span>Project for</span>
                  <span className="font-semibold text-white">VibeCode India Hackathon 2025</span>
                  <Zap className="h-4 w-4 text-cyan-400" />
                </div>
                <p className="text-xs text-neutral-400 mt-2">
                  🚀 Transforming campus sponsorships through innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

