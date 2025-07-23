import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Home, TrendingUp, FileText, Calculator, Users, Phone, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Property Buying Assistance",
      description: "Complete support from property search to closing, ensuring you find the perfect home within your budget.",
      features: [
        "Personalized property search",
        "Market analysis and pricing guidance",
        "Negotiation support",
        "Inspection coordination",
        "Closing assistance"
      ],
      cta: "Find Your Home"
    },
    {
      icon: TrendingUp,
      title: "Selling & Valuation",
      description: "Maximize your property value with our strategic marketing approach and expert market knowledge.",
      features: [
        "Professional property valuation",
        "Strategic marketing plan",
        "Professional photography",
        "Open house coordination",
        "Price optimization"
      ],
      cta: "Sell Your Property"
    },
    {
      icon: Users,
      title: "Property Management",
      description: "Comprehensive property management services for landlords and investors seeking hassle-free rental income.",
      features: [
        "Tenant screening and placement",
        "Rent collection and accounting",
        "Maintenance coordination",
        "Regular property inspections",
        "Legal compliance support"
      ],
      cta: "Manage Properties"
    },
    {
      icon: FileText,
      title: "Legal & Mortgage Consulting",
      description: "Navigate complex legal and financial aspects of real estate transactions with expert guidance.",
      features: [
        "Legal document review",
        "Mortgage pre-approval assistance",
        "Contract negotiation",
        "Title insurance coordination",
        "Closing coordination"
      ],
      cta: "Get Consultation"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We start with understanding your unique needs, goals, and preferences through a detailed consultation."
    },
    {
      step: "02",
      title: "Strategic Planning",
      description: "Our team develops a customized strategy tailored to your specific real estate objectives."
    },
    {
      step: "03",
      title: "Execution",
      description: "We implement the plan with regular updates and transparent communication throughout the process."
    },
    {
      step: "04",
      title: "Success & Support",
      description: "We ensure successful completion and provide ongoing support for any future real estate needs."
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: "Expert Knowledge",
      description: "15+ years of local market expertise and industry insights"
    },
    {
      icon: Calculator,
      title: "Accurate Valuations",
      description: "Data-driven property analysis and competitive market assessments"
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Always available to answer questions and provide assistance"
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "Track record of successful transactions and satisfied clients"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 animate-fade-in">
            Our Real Estate Services
          </h1>
          <p className="text-xl text-text-soft max-w-3xl mx-auto mb-8 animate-slide-up">
            Comprehensive real estate solutions designed to meet your unique needs, whether you're buying, selling, investing, or managing properties.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="lg">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">What We Offer</h2>
            <p className="text-xl text-text-soft">Complete real estate services under one roof</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mr-4">
                      <service.icon className="w-8 h-8 text-navy" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy">{service.title}</h3>
                  </div>
                  
                  <p className="text-text-soft mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-gold mr-3" />
                        <span className="text-navy">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-navy group-hover:text-white">
                    {service.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Process</h2>
            <p className="text-xl text-text-soft">How we ensure your success every step of the way</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-navy rounded-full mb-6 text-white text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{step.title}</h3>
                <p className="text-text-soft">{step.description}</p>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full">
                    <div className="w-full h-0.5 bg-gold transform -translate-x-1/2"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Why Choose Our Services</h2>
            <p className="text-xl text-text-soft">The advantages of working with Sainah Homes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-4">
                    <benefit.icon className="w-8 h-8 text-navy" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">{benefit.title}</h3>
                  <p className="text-text-soft">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Serving the Greater Metropolitan Area
              </h2>
              <p className="text-lg text-text-soft mb-6">
                Our comprehensive services cover all major neighborhoods and surrounding communities, ensuring you get the local expertise you need wherever you're looking to buy, sell, or invest.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h4 className="font-semibold text-navy mb-2">Primary Areas</h4>
                  <ul className="space-y-1 text-text-soft">
                    <li>Downtown District</li>
                    <li>Westside Hills</li>
                    <li>Green Valley</li>
                    <li>Riverside Commons</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-2">Expanding To</h4>
                  <ul className="space-y-1 text-text-soft">
                    <li>North Harbor</li>
                    <li>East Gardens</li>
                    <li>South Ridge</li>
                    <li>Central Plaza</li>
                  </ul>
                </div>
              </div>
              
              <Link to="/contact">
                <Button variant="cta" size="lg">
                  Check Service Availability
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-navy mb-2">1,200+</div>
                    <div className="text-text-soft">Properties Sold</div>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-navy mb-2">15+</div>
                    <div className="text-text-soft">Years Experience</div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6 mt-8">
                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-navy mb-2">500+</div>
                    <div className="text-text-soft">Happy Clients</div>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-navy mb-2">25+</div>
                    <div className="text-text-soft">Awards Won</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to discuss your real estate needs and discover how we can help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/listings">
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-navy">
                View Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;