import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, BedDouble, Bath, Square, Heart, Filter, Grid, List } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const Listings = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    search: "",
    priceRange: "",
    propertyType: "",
    bedrooms: "",
    location: ""
  });

  const properties = [
    {
      id: 1,
      image: property1,
      title: "Modern Downtown Apartment",
      location: "Downtown District",
      price: 850000,
      beds: 3,
      baths: 2,
      area: 1200,
      type: "apartment",
      featured: true,
      description: "Stunning modern apartment in the heart of downtown with floor-to-ceiling windows and premium finishes."
    },
    {
      id: 2,
      image: property2,
      title: "Luxury Family Home",
      location: "Westside Hills",
      price: 1250000,
      beds: 4,
      baths: 3,
      area: 2500,
      type: "house",
      featured: true,
      description: "Spacious family home with gourmet kitchen, master suite, and beautiful landscaped backyard."
    },
    {
      id: 3,
      image: property3,
      title: "Cozy Garden Villa",
      location: "Green Valley",
      price: 675000,
      beds: 2,
      baths: 2,
      area: 950,
      type: "villa",
      featured: false,
      description: "Charming villa with private garden, updated kitchen, and peaceful neighborhood setting."
    },
    {
      id: 4,
      image: property1,
      title: "Executive Penthouse",
      location: "Downtown District",
      price: 2100000,
      beds: 4,
      baths: 4,
      area: 3200,
      type: "penthouse",
      featured: true,
      description: "Luxurious penthouse with panoramic city views, private terrace, and premium amenities."
    },
    {
      id: 5,
      image: property2,
      title: "Suburban Family Home",
      location: "Riverside Commons",
      price: 585000,
      beds: 3,
      baths: 2,
      area: 1800,
      type: "house",
      featured: false,
      description: "Perfect family home with open floor plan, updated bathrooms, and large backyard."
    },
    {
      id: 6,
      image: property3,
      title: "Modern Condo",
      location: "Westside Hills",
      price: 425000,
      beds: 2,
      baths: 1,
      area: 850,
      type: "condo",
      featured: false,
      description: "Contemporary condo with modern finishes, in-unit laundry, and community amenities."
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const PropertyCard = ({ property }: { property: typeof properties[0] }) => (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={property.image}
          alt={property.title}
          className={`w-full object-cover group-hover:scale-110 transition-transform duration-300 ${
            viewMode === 'grid' ? 'h-64' : 'h-48'
          }`}
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {property.featured && (
            <Badge className="bg-gold text-navy">Featured</Badge>
          )}
          <Badge variant="secondary" className="bg-white/90 text-navy">
            {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-white/90 hover:bg-white"
        >
          <Heart className="w-5 h-5" />
        </Button>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center text-text-soft mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        <h3 className="text-xl font-semibold text-navy mb-2">{property.title}</h3>
        <div className="text-2xl font-bold text-gold mb-3">{formatPrice(property.price)}</div>
        
        {viewMode === 'list' && (
          <p className="text-text-soft mb-4">{property.description}</p>
        )}
        
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
        
        <Button variant="outline" className="w-full mt-4 group-hover:bg-navy group-hover:text-white">
          View Details
        </Button>
      </CardContent>
    </Card>
  );

  const PropertyListItem = ({ property }: { property: typeof properties[0] }) => (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          <div className="relative overflow-hidden">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              {property.featured && (
                <Badge className="bg-gold text-navy">Featured</Badge>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-white/90 hover:bg-white"
            >
              <Heart className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="md:col-span-2 p-6">
            <div className="flex items-center text-text-soft mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{property.location}</span>
              <Badge variant="secondary" className="ml-auto">
                {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
              </Badge>
            </div>
            
            <h3 className="text-2xl font-semibold text-navy mb-2">{property.title}</h3>
            <div className="text-3xl font-bold text-gold mb-3">{formatPrice(property.price)}</div>
            <p className="text-text-soft mb-4">{property.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 text-text-soft">
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
              
              <Button variant="cta">
                View Details
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 animate-fade-in">
              Property Listings
            </h1>
            <p className="text-xl text-text-soft max-w-2xl mx-auto animate-slide-up">
              Discover your perfect home from our curated collection of premium properties
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
              <div className="md:col-span-2">
                <Input
                  placeholder="Search by title or location..."
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                  className="border-0 bg-secondary"
                />
              </div>
              <div>
                <Select value={filters.location} onValueChange={(value) => setFilters({ ...filters, location: value })}>
                  <SelectTrigger className="border-0 bg-secondary">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="downtown">Downtown District</SelectItem>
                    <SelectItem value="westside">Westside Hills</SelectItem>
                    <SelectItem value="green-valley">Green Valley</SelectItem>
                    <SelectItem value="riverside">Riverside Commons</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={filters.priceRange} onValueChange={(value) => setFilters({ ...filters, priceRange: value })}>
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
                <Select value={filters.propertyType} onValueChange={(value) => setFilters({ ...filters, propertyType: value })}>
                  <SelectTrigger className="border-0 bg-secondary">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="penthouse">Penthouse</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="hero">
                  <Search className="w-4 h-4 mr-2" />
                  Search Properties
                </Button>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'cta' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'cta' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-navy">Available Properties</h2>
              <p className="text-text-soft">{properties.length} properties found</p>
            </div>
            
            <Select defaultValue="newest">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="size">Size</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Properties Grid/List */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {properties.map((property) => (
                <PropertyListItem key={property.id} property={property} />
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex items-center justify-center mt-12 gap-2">
            <Button variant="outline" disabled>Previous</Button>
            <Button variant="cta">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-text-soft mb-8 max-w-2xl mx-auto">
            Our team can help you find properties that match your specific criteria, even if they're not listed yet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Contact Our Agents
            </Button>
            <Button variant="outline" size="lg">
              Set Up Property Alerts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listings;