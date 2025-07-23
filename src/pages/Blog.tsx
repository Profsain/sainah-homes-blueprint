import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User, ArrowRight, TrendingUp, Clock } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for First-Time Home Buyers in 2024",
      excerpt: "Navigate the current real estate market with confidence using these expert tips designed specifically for first-time buyers.",
      content: "Buying your first home can be overwhelming, but with the right guidance...",
      author: "Sarah Mitchell",
      date: "2024-01-15",
      category: "Buying Tips",
      image: property1,
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Market Trends: What to Expect in the Coming Year",
      excerpt: "Our analysis of current market conditions and predictions for the real estate landscape in the next 12 months.",
      content: "The real estate market continues to evolve with changing economic conditions...",
      author: "David Rodriguez",
      date: "2024-01-10",
      category: "Market Analysis",
      image: property2,
      readTime: "7 min read",
      featured: true
    },
    {
      id: 3,
      title: "Home Staging Secrets That Sell Properties Fast",
      excerpt: "Professional staging tips that can help your property stand out and attract serious buyers quickly.",
      content: "Staging your home properly can significantly impact both the speed of sale...",
      author: "Sarah Mitchell",
      date: "2024-01-05",
      category: "Selling Tips",
      image: property3,
      readTime: "4 min read",
      featured: false
    },
    {
      id: 4,
      title: "Investment Properties: ROI Strategies for 2024",
      excerpt: "Maximize your real estate investment returns with these proven strategies and market insights.",
      content: "Real estate investment remains one of the most reliable ways to build wealth...",
      author: "David Rodriguez",
      date: "2024-01-02",
      category: "Investment",
      image: property1,
      readTime: "6 min read",
      featured: false
    },
    {
      id: 5,
      title: "Neighborhood Spotlight: Downtown District Revival",
      excerpt: "Explore the transformation of the Downtown District and why it's becoming the hottest real estate market.",
      content: "The Downtown District has undergone a remarkable transformation in recent years...",
      author: "Sarah Mitchell",
      date: "2023-12-28",
      category: "Neighborhoods",
      image: property2,
      readTime: "8 min read",
      featured: false
    },
    {
      id: 6,
      title: "Sustainable Homes: Green Features That Add Value",
      excerpt: "Discover which eco-friendly home features provide the best return on investment and appeal to modern buyers.",
      content: "Sustainability is no longer just a trend—it's becoming a requirement...",
      author: "David Rodriguez",
      date: "2023-12-20",
      category: "Green Living",
      image: property3,
      readTime: "5 min read",
      featured: false
    }
  ];

  const categories = [
    "All",
    "Buying Tips",
    "Selling Tips",
    "Market Analysis",
    "Investment",
    "Neighborhoods",
    "Green Living"
  ];

  const recentPosts = blogPosts.slice(0, 4);
  const featuredPosts = blogPosts.filter(post => post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const BlogCard = ({ post, featured = false }: { post: typeof blogPosts[0], featured?: boolean }) => (
    <Card className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${featured ? 'lg:col-span-2' : ''}`}>
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={post.image}
          alt={post.title}
          className={`w-full object-cover group-hover:scale-110 transition-transform duration-300 ${
            featured ? 'h-80' : 'h-64'
          }`}
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-gold text-navy">{post.category}</Badge>
        </div>
        {post.featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-navy text-white">Featured</Badge>
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <div className="flex items-center text-text-soft text-sm mb-3">
          <User className="w-4 h-4 mr-1" />
          <span className="mr-4">{post.author}</span>
          <Calendar className="w-4 h-4 mr-1" />
          <span className="mr-4">{formatDate(post.date)}</span>
          <Clock className="w-4 h-4 mr-1" />
          <span>{post.readTime}</span>
        </div>
        
        <h3 className={`font-bold text-navy mb-3 group-hover:text-gold transition-colors ${
          featured ? 'text-2xl' : 'text-xl'
        }`}>
          {post.title}
        </h3>
        
        <p className="text-text-soft mb-4 line-clamp-3">{post.excerpt}</p>
        
        <Button variant="outline" className="group-hover:bg-navy group-hover:text-white">
          Read More
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
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
              Real Estate Insights & News
            </h1>
            <p className="text-xl text-text-soft max-w-2xl mx-auto animate-slide-up">
              Stay informed with the latest market trends, expert tips, and industry insights from our real estate professionals
            </p>
          </div>

          {/* Search and Categories */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-soft w-5 h-5" />
                    <Input
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 border-0 bg-secondary"
                    />
                  </div>
                </div>
                <Button variant="hero">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category.toLowerCase() ? "cta" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Featured Articles</h2>
            <p className="text-xl text-text-soft">Our most popular and insightful content</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} featured={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-navy">Latest Articles</h2>
                <div className="flex items-center gap-2">
                  <span className="text-text-soft text-sm">Sort by:</span>
                  <Button variant="outline" size="sm">
                    Newest First
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center mt-12 gap-2">
                <Button variant="outline" disabled>Previous</Button>
                <Button variant="cta">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Newsletter Signup */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-navy mb-4">Stay Updated</h3>
                  <p className="text-text-soft mb-4">
                    Get the latest real estate insights delivered to your inbox weekly.
                  </p>
                  <div className="space-y-3">
                    <Input placeholder="Your email address" />
                    <Button variant="cta" className="w-full">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-navy mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="flex gap-3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-navy text-sm mb-1 line-clamp-2">
                            {post.title}
                          </h4>
                          <div className="text-xs text-text-soft">
                            {formatDate(post.date)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-navy mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.slice(1).map((category) => (
                      <Button
                        key={category}
                        variant="ghost"
                        className="w-full justify-start text-left"
                      >
                        {category}
                        <span className="ml-auto text-text-soft">
                          {Math.floor(Math.random() * 10) + 1}
                        </span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Market Stats */}
              <Card className="p-6 bg-navy text-white">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Market Stats
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Avg. Home Price</span>
                      <span className="font-bold text-gold">$825,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Properties Sold</span>
                      <span className="font-bold text-gold">143 this month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Market Trend</span>
                      <span className="font-bold text-green-400">+5.2%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have Questions About the Market?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our real estate experts are here to provide personalized insights and answer your questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Contact Our Experts
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-navy">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;