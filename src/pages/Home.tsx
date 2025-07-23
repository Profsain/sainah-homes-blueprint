import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Star, MapPin, BedDouble, Bath, Square, ArrowRight, CheckCircle, Users, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import heroHome from "@/assets/hero-home.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const Home = () => {
  const [searchData, setSearchData] = useState({
    location: "",
    priceRange: "",
    propertyType: ""
  });

  const featuredProperties = [
    {
      id: 1,
      image: property1,
      title: "Modern Downtown Apartment",
      location: "Downtown District",
      price: "$850,000",
      beds: 3,
      baths: 2,
      area: 1200,
      featured: true
    },
    {
      id: 2,
      image: property2,
      title: "Luxury Family Home",
      location: "Westside Hills",
      price: "$1,250,000",
      beds: 4,
      baths: 3,
      area: 2500,
      featured: true
    },
    {
      id: 3,
      image: property3,
      title: "Cozy Garden Villa",
      location: "Green Valley",
      price: "$675,000",
      beds: 2,
      baths: 2,
      area: 950,
      featured: true
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Sainah Homes helped us find our dream home! Their team was professional, knowledgeable, and went above and beyond.",
      rating: 5,
      location: "Westside Hills"
    },
    {
      name: "Michael Chen",
      text: "Excellent service from start to finish. They made the selling process smooth and stress-free.",
      rating: 5,
      location: "Downtown District"
    },
    {
      name: "Emily Rodriguez",
      text: "Professional team with deep local knowledge. Highly recommend for anyone buying or selling.",
      rating: 5,
      location: "Green Valley"
    }
  ];

  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Award, label: "Awards Won", value: "25+" },
    { icon: Heart, label: "Properties Sold", value: "1,200+" },
    { icon: CheckCircle, label: "Years Experience", value: "15+" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.7), rgba(30, 41, 59, 0.7)), url(${heroHome})`
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Find Your Dream Home
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up">
            Discover the perfect property with Sainah Homes - your trusted real estate partner
          </p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-lg p-6 shadow-2xl max-w-4xl mx-auto animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Input
                  placeholder="Enter location..."
                  value={searchData.location}
                  onChange={(e) => setSearchData({...searchData, location: e.target.value})}
                  className="border-0 bg-secondary focus:ring-2 focus:ring-gold"
                />
              </div>
              <div>
                <Select value={searchData.priceRange} onValueChange={(value) => setSearchData({...searchData, priceRange: value})}>
                  <SelectTrigger className="border-0 bg-secondary">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-500k">Under $500K</SelectItem>
                    <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                    <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                    <SelectItem value="over-2m">Over $2M</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={searchData.propertyType} onValueChange={(value) => setSearchData({...searchData, propertyType: value})}>
                  <SelectTrigger className="border-0 bg-secondary">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="hero" size="lg" className="w-full">
                <Search className="w-5 h-5 mr-2" />
                Search Properties
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-navy" />
                </div>
                <div className="text-3xl font-bold text-navy mb-2">{stat.value}</div>
                <div className="text-text-soft">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Featured Properties</h2>
            <p className="text-xl text-text-soft">Discover our handpicked selection of premium properties</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Card key={property.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {property.featured && (
                    <Badge className="absolute top-4 left-4 bg-gold text-navy">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-text-soft mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-2">{property.title}</h3>
                  <div className="text-2xl font-bold text-gold mb-4">{property.price}</div>
                  
                  <div className="flex items-center justify-between text-text-soft">
                    <div className="flex items-center">
                      <BedDouble className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.beds} beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.baths} baths</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.area} sq ft</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/listings">
              <Button variant="cta" size="lg">
                View All Properties
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Your Trusted Real Estate Partner
              </h2>
              <p className="text-lg text-text-soft mb-6">
                With over 15 years of experience in the real estate market, Sainah Homes has been helping families find their perfect homes and investors discover profitable opportunities.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-gold mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy">Expert Local Knowledge</h4>
                    <p className="text-text-soft">Deep understanding of neighborhood trends and market values</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-gold mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy">Personalized Service</h4>
                    <p className="text-text-soft">Tailored solutions to meet your unique real estate needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-gold mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy">End-to-End Support</h4>
                    <p className="text-text-soft">From property search to closing, we're with you every step</p>
                  </div>
                </div>
              </div>
              <Link to="/about">
                <Button variant="cta" size="lg">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={property1}
                  alt="Modern living room"
                  className="w-full h-40 object-cover rounded-lg shadow-lg"
                />
                <img
                  src={property3}
                  alt="Beautiful bedroom"
                  className="w-full h-56 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src={property2}
                  alt="Modern kitchen"
                  className="w-full h-56 object-cover rounded-lg shadow-lg"
                />
                <img
                  src={property1}
                  alt="Living space"
                  className="w-full h-40 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">What Our Clients Say</h2>
            <p className="text-xl text-text-soft">Hear from families who found their perfect homes with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-text-soft mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-navy">{testimonial.name}</div>
                    <div className="text-sm text-text-soft">{testimonial.location}</div>
                  </div>
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
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let our experienced team help you navigate the real estate market with confidence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get Started Today
              </Button>
            </Link>
            <Link to="/listings">
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-navy">
                Browse Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;