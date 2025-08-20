import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, ArrowRight, TrendingUp, BookOpen, Users } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Future of Neural Machine Translation: Breakthrough Research in 2025",
    excerpt: "Discover the latest advancements in NMT technology, including contextual understanding, multimodal translation, and zero-shot learning capabilities that are revolutionizing the industry.",
    author: "Dr. Sarah Chen",
    authorRole: "Chief AI Researcher",
    date: "January 15, 2025",
    readTime: "8 min read",
    image: "/placeholder.svg",
    category: "Research",
    featured: true
  };

  const blogPosts = [
    {
      title: "Building Custom Translation Models for Legal Documents",
      excerpt: "Learn how to train specialized NMT models for legal translation with domain-specific terminology and improved accuracy.",
      author: "Michael Rodriguez",
      authorRole: "ML Engineer",
      date: "January 12, 2025",
      readTime: "6 min read",
      image: "/placeholder.svg",
      category: "Tutorial",
      views: 2847
    },
    {
      title: "API Integration Best Practices: From Prototype to Production",
      excerpt: "A comprehensive guide to integrating our translation API into your applications with optimal performance and error handling.",
      author: "Alex Johnson",
      authorRole: "Developer Advocate",
      date: "January 10, 2025",
      readTime: "12 min read",
      image: "/placeholder.svg",
      category: "Developer",
      views: 1923
    },
    {
      title: "Understanding Translation Quality Metrics: BLEU, ROUGE, and Beyond",
      excerpt: "Deep dive into evaluation metrics for machine translation quality and how to choose the right ones for your use case.",
      author: "Dr. Emma Wilson",
      authorRole: "Research Scientist",
      date: "January 8, 2025",
      readTime: "10 min read",
      image: "/placeholder.svg",
      category: "Research",
      views: 3156
    },
    {
      title: "Case Study: Scaling Translation for Global E-commerce",
      excerpt: "How a major e-commerce platform improved conversion rates by 34% using our real-time translation API.",
      author: "Lisa Park",
      authorRole: "Product Manager",
      date: "January 5, 2025",
      readTime: "7 min read",
      image: "/placeholder.svg",
      category: "Case Study",
      views: 2641
    },
    {
      title: "The Economics of Machine Translation: ROI Analysis",
      excerpt: "Quantifying the business value of machine translation and calculating return on investment for enterprise deployments.",
      author: "David Kim",
      authorRole: "Business Analyst",
      date: "January 3, 2025",
      readTime: "9 min read",
      image: "/placeholder.svg",
      category: "Business",
      views: 1784
    },
    {
      title: "Multilingual SEO with Machine Translation",
      excerpt: "Strategies for using machine translation to expand your global SEO reach while maintaining quality and cultural relevance.",
      author: "Maria Garcia",
      authorRole: "SEO Specialist",
      date: "December 30, 2024",
      readTime: "11 min read",
      image: "/placeholder.svg",
      category: "SEO",
      views: 2193
    }
  ];

  const categories = [
    { name: "All", count: 47, active: true },
    { name: "Research", count: 12, active: false },
    { name: "Tutorial", count: 15, active: false },
    { name: "Developer", count: 8, active: false },
    { name: "Case Study", count: 6, active: false },
    { name: "Business", count: 4, active: false },
    { name: "SEO", count: 2, active: false }
  ];

  const stats = [
    { icon: <BookOpen className="h-5 w-5" />, label: "Articles Published", value: "120+" },
    { icon: <Users className="h-5 w-5" />, label: "Monthly Readers", value: "45K+" },
    { icon: <TrendingUp className="h-5 w-5" />, label: "Expert Authors", value: "25+" }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">NMT Platform Blog</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Insights, tutorials, and research from our team of experts in neural machine translation and AI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-2 text-primary">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mb-12">
        <Card className="overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/5">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 p-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">Featured</Badge>
                <Badge variant="outline">{featuredPost.category}</Badge>
              </div>
              <CardTitle className="text-2xl mb-4 hover:text-primary transition-colors cursor-pointer">
                {featuredPost.title}
              </CardTitle>
              <CardDescription className="text-base mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </CardDescription>
              <div className="flex items-center gap-4 mb-6">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{featuredPost.author}</div>
                  <div className="text-sm text-muted-foreground">{featuredPost.authorRole}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {featuredPost.readTime}
                </div>
              </div>
              <Button>
                Read Article
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Latest Articles</h2>
            <Button variant="outline">View All</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.views} views</span>
                  </div>
                  <CardTitle className="text-lg hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-medium">{post.author}</div>
                      <div className="text-xs text-muted-foreground">{post.authorRole}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors ${
                      category.active 
                        ? 'bg-primary text-primary-foreground' 
                        : 'hover:bg-muted'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className={category.active ? 'opacity-80' : 'text-muted-foreground'}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Subscribe to Newsletter</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Get the latest articles and insights delivered to your inbox.
              </CardDescription>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <Button className="w-full">Subscribe</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Popular Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {['Neural Networks', 'API', 'Machine Learning', 'Deep Learning', 'NLP', 'Transformers', 'BERT', 'GPT'].map((tag) => (
                  <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;