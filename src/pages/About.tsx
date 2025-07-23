import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Heart, Target, Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import agent1 from "@/assets/agent-1.jpg";
import agent2 from "@/assets/agent-2.jpg";
import property1 from "@/assets/property-1.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "Founder & CEO",
      image: agent1,
      bio: "With over 15 years of experience in real estate, Sarah founded Sainah Homes with a vision to provide exceptional service to every client.",
      specialties: ["Luxury Properties", "Market Analysis", "Strategic Planning"]
    },
    {
      name: "David Rodriguez",
      role: "Senior Real Estate Agent",
      image: agent2,
      bio: "David brings 10+ years of expertise in residential sales and has helped over 300 families find their perfect homes.",
      specialties: ["First-Time Buyers", "Investment Properties", "Negotiation"]
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Client-First Approach",
      description: "Your needs and dreams are at the center of everything we do. We listen, understand, and deliver personalized solutions."
    },
    {
      icon: CheckCircle,
      title: "Integrity & Trust",
      description: "We believe in transparent communication and honest dealings. Your trust is our most valuable asset."
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description: "We strive for excellence in every interaction, ensuring exceptional results that exceed expectations."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "As local experts, we're deeply committed to the communities we serve and the relationships we build."
    }
  ];

  const milestones = [
    { year: "2008", event: "Founded Sainah Homes", description: "Started with a vision to transform real estate service" },
    { year: "2012", event: "500+ Happy Families", description: "Reached our first major milestone in client satisfaction" },
    { year: "2016", event: "Award Recognition", description: "Named 'Best Real Estate Agency' by Local Business Awards" },
    { year: "2020", event: "Digital Transformation", description: "Launched advanced digital tools for better client experience" },
    { year: "2024", event: "1,200+ Properties Sold", description: "Celebrating continued growth and client success" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 animate-fade-in">
                About Sainah Homes
              </h1>
              <p className="text-xl text-text-soft mb-6 animate-slide-up">
                Since 2008, we've been dedicated to helping families find their perfect homes and investors discover profitable opportunities in the real estate market.
              </p>
              <p className="text-lg text-text-soft mb-8 animate-slide-up">
                Our team combines deep local knowledge with innovative technology to provide exceptional service that goes beyond your expectations. We don't just sell properties; we help build dreams and create lasting relationships.
              </p>
              <Link to="/contact">
                <Button variant="cta" size="lg">
                  Work With Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={property1}
                alt="Modern home interior"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-navy">15+</div>
                <div className="text-text-soft">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Target className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-2xl font-bold text-navy mb-4">Our Mission</h3>
                <p className="text-text-soft text-lg">
                  To provide exceptional real estate services that exceed client expectations, build lasting relationships, and contribute to the growth and prosperity of our local communities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Eye className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
                <p className="text-text-soft text-lg">
                  To be the most trusted and innovative real estate agency, known for our integrity, expertise, and commitment to helping every client achieve their property dreams.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Core Values</h2>
            <p className="text-xl text-text-soft">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-4">
                    <value.icon className="w-8 h-8 text-navy" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">{value.title}</h3>
                  <p className="text-text-soft">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Meet Our Team</h2>
            <p className="text-xl text-text-soft">Experienced professionals dedicated to your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="aspect-square">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-navy mb-2">{member.name}</h3>
                    <p className="text-gold font-semibold mb-4">{member.role}</p>
                    <p className="text-text-soft mb-4">{member.bio}</p>
                    <div>
                      <h4 className="font-semibold text-navy mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-cream text-navy text-sm rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Journey</h2>
            <p className="text-xl text-text-soft">Key milestones in our growth story</p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gold"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-gold rounded-full flex items-center justify-center relative z-10">
                    <span className="text-navy font-bold">{milestone.year}</span>
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-bold text-navy mb-2">{milestone.event}</h3>
                    <p className="text-text-soft">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Why Choose Sainah Homes?</h2>
            <p className="text-xl text-text-soft">What sets us apart in the real estate industry</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-4">
                <Users className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Local Expertise</h3>
              <p className="text-text-soft">
                Deep knowledge of local markets, neighborhoods, and trends that matter to your investment.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Proven Results</h3>
              <p className="text-text-soft">
                Track record of successful transactions and satisfied clients speaks to our commitment to excellence.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-4">
                <Heart className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Personal Service</h3>
              <p className="text-text-soft">
                Every client receives personalized attention and customized solutions for their unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the Sainah Homes difference - where your dreams become our mission
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Contact Our Team
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-navy">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;