import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Calendar, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import agent1 from "@/assets/agent-1.jpg";
import agent2 from "@/assets/agent-2.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: "",
    timeframe: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      preferredContact: "",
      timeframe: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["123 Real Estate Plaza", "Downtown District", "City, State 12345"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["Main Office: (555) 123-4567", "Mobile: (555) 987-6543"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@sainahhomes.com", "sarah@sainahhomes.com"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 7:00 PM", "Saturday: 10:00 AM - 5:00 PM", "Sunday: 12:00 PM - 4:00 PM"],
      action: "Schedule Visit"
    }
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & CEO",
      image: agent1,
      phone: "(555) 123-4567",
      email: "sarah@sainahhomes.com",
      specialties: ["Luxury Properties", "Market Analysis"]
    },
    {
      name: "David Rodriguez",
      role: "Senior Real Estate Agent",
      image: agent2,
      phone: "(555) 987-6543",
      email: "david@sainahhomes.com",
      specialties: ["First-Time Buyers", "Investment Properties"]
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Adams",
      text: "Sainah Homes made our home buying experience seamless and stress-free. Highly recommend!",
      rating: 5
    },
    {
      name: "Michael Thompson",
      text: "Professional, knowledgeable, and always available to answer questions. Excellent service!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-xl text-text-soft max-w-2xl mx-auto animate-slide-up">
              Ready to start your real estate journey? We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-4">
                    <info.icon className="w-8 h-8 text-navy" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-text-soft text-sm">{detail}</p>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <MessageSquare className="w-8 h-8 text-gold mr-3" />
                  <h2 className="text-3xl font-bold text-navy">Send us a Message</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-navy font-medium mb-2">Full Name *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-navy font-medium mb-2">Email Address *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-navy font-medium mb-2">Phone Number</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-navy font-medium mb-2">Subject</label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="buying">Buying a Property</SelectItem>
                          <SelectItem value="selling">Selling a Property</SelectItem>
                          <SelectItem value="investment">Investment Opportunities</SelectItem>
                          <SelectItem value="valuation">Property Valuation</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-navy font-medium mb-2">Preferred Contact Method</label>
                      <Select value={formData.preferredContact} onValueChange={(value) => handleInputChange("preferredContact", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="How should we contact you?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="text">Text Message</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-navy font-medium mb-2">Timeframe</label>
                      <Select value={formData.timeframe} onValueChange={(value) => handleInputChange("timeframe", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="When are you looking to proceed?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediately">Immediately</SelectItem>
                          <SelectItem value="1-3months">1-3 months</SelectItem>
                          <SelectItem value="3-6months">3-6 months</SelectItem>
                          <SelectItem value="6+months">6+ months</SelectItem>
                          <SelectItem value="just-looking">Just looking</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-navy font-medium mb-2">Message *</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your real estate needs..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-navy mb-4">Find Our Office</h3>
                  <div className="bg-secondary rounded-lg h-64 flex items-center justify-center mb-4">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-gold mx-auto mb-2" />
                      <p className="text-navy font-medium">Interactive Map</p>
                      <p className="text-text-soft text-sm">123 Real Estate Plaza, Downtown District</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="p-6 bg-navy text-white">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3 text-gold" />
                      <div>
                        <p className="font-medium">Call us directly</p>
                        <p className="text-white/80">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-3 text-gold" />
                      <div>
                        <p className="font-medium">Email us</p>
                        <p className="text-white/80">info@sainahhomes.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-3 text-gold" />
                      <div>
                        <p className="font-medium">Schedule a consultation</p>
                        <p className="text-white/80">Available 7 days a week</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="hero" className="w-full mt-6">
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Meet Our Team</h2>
            <p className="text-xl text-text-soft">Get to know the experts who will help you achieve your real estate goals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="aspect-square">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-navy mb-2">{member.name}</h3>
                      <p className="text-gold font-semibold mb-3">{member.role}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-text-soft">
                          <Phone className="w-4 h-4 mr-2" />
                          {member.phone}
                        </div>
                        <div className="flex items-center text-sm text-text-soft">
                          <Mail className="w-4 h-4 mr-2" />
                          {member.email}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm font-medium text-navy mb-1">Specialties:</p>
                        <div className="flex flex-wrap gap-1">
                          {member.specialties.map((specialty, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-cream text-navy text-xs rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm">
                        Contact {member.name.split(' ')[0]}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-text-soft mb-12">
            Hear from clients who've worked with our team
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-text-soft mb-4 italic">"{testimonial.text}"</p>
                  <div className="font-semibold text-navy">{testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Make Your Move?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Whether you're buying, selling, or investing, we're here to guide you through every step of the process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Start Your Journey
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-navy">
              Browse Properties
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;