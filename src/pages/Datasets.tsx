import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download, Eye, Star, Globe, BookOpen, Building2, Heart } from "lucide-react";

const Datasets = () => {
  const datasets = [
    {
      name: "OpenSubtitles 2018",
      description: "Large collection of translated movie subtitles covering 60+ languages",
      languages: "60+ languages",
      size: "3.2B sentence pairs",
      domain: "Entertainment",
      quality: 4.2,
      downloads: "125K",
      icon: <Eye className="h-5 w-5" />
    },
    {
      name: "WMT News Commentary",
      description: "High-quality news commentary translations for major language pairs",
      languages: "12 language pairs",
      size: "450M sentence pairs",
      domain: "News",
      quality: 4.8,
      downloads: "89K",
      icon: <Globe className="h-5 w-5" />
    },
    {
      name: "Medical Translation Corpus",
      description: "Specialized medical text translations for healthcare applications",
      languages: "25 languages",
      size: "125M sentence pairs",
      domain: "Medical",
      quality: 4.9,
      downloads: "34K",
      icon: <Heart className="h-5 w-5" />
    },
    {
      name: "Legal Document Translations",
      description: "Professional legal document translations for business and legal use",
      languages: "15 languages",
      size: "75M sentence pairs",
      domain: "Legal",
      quality: 4.7,
      downloads: "22K",
      icon: <Building2 className="h-5 w-5" />
    },
    {
      name: "Technical Documentation",
      description: "Software and technical documentation translations",
      languages: "20 languages",
      size: "200M sentence pairs",
      domain: "Technical",
      quality: 4.6,
      downloads: "67K",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      name: "European Parliament Proceedings",
      description: "Official translations from European Parliament sessions",
      languages: "24 EU languages",
      size: "1.8B sentence pairs",
      domain: "Government",
      quality: 4.9,
      downloads: "156K",
      icon: <Globe className="h-5 w-5" />
    }
  ];

  const categories = [
    "All Domains",
    "News",
    "Entertainment",
    "Medical",
    "Legal",
    "Technical",
    "Government",
    "Academic",
    "Business"
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Translation Datasets
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover high-quality parallel corpora for training and evaluating neural machine translation models.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search datasets by name, language, or domain..." 
              className="pl-10"
            />
          </div>
        </div>
        <Select>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Filter by domain" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category.toLowerCase()}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="downloads">Most Downloaded</SelectItem>
            <SelectItem value="quality">Highest Quality</SelectItem>
            <SelectItem value="size">Largest Size</SelectItem>
            <SelectItem value="recent">Most Recent</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {datasets.map((dataset, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="text-primary">
                    {dataset.icon}
                  </div>
                  <Badge variant="outline">{dataset.domain}</Badge>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{dataset.quality}</span>
                </div>
              </div>
              <CardTitle className="text-lg">{dataset.name}</CardTitle>
              <CardDescription>{dataset.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Languages:</span>
                  <br />
                  <span className="font-medium">{dataset.languages}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Size:</span>
                  <br />
                  <span className="font-medium">{dataset.size}</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-sm text-muted-foreground">
                  {dataset.downloads} downloads
                </span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                    Preview
                  </Button>
                  <Button size="sm">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Upload Your Own Dataset</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Contribute to the community by sharing your parallel corpora. Help improve translation quality for everyone.
        </p>
        <Button size="lg">Upload Dataset</Button>
      </div>
    </div>
  );
};

export default Datasets;