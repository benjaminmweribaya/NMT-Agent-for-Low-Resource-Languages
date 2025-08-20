import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, MessageSquare, Users, Headphones } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Get help via email with detailed responses",
      contact: "support@nmtplatform.com",
      response: "Within 24 hours"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Live Chat",
      description: "Real-time assistance during business hours",
      contact: "Available in dashboard",
      response: "Immediate"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      description: "Direct phone support for enterprise customers",
      contact: "+1 (555) 123-4567",
      response: "Business hours"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Enterprise Sales",
      description: "Custom solutions and enterprise plans",
      contact: "sales@nmtplatform.com",
      response: "Within 4 hours"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "1234 Tech Street, San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      timezone: "PST (UTC-8)"
    },
    {
      city: "London",
      address: "456 Innovation Lane, London, UK EC1A 1BB",
      phone: "+44 20 1234 5678",
      timezone: "GMT (UTC+0)"
    },
    {
      city: "Singapore",
      address: "789 Business Boulevard, Singapore 018956",
      phone: "+65 1234 5678",
      timezone: "SGT (UTC+8)"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Get in touch with our team. We're here to help with any questions about our neural machine translation platform.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Enter your last name" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email address" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" placeholder="Enter your company name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="technical">Technical Support</SelectItem>
                  <SelectItem value="billing">Billing Question</SelectItem>
                  <SelectItem value="enterprise">Enterprise Sales</SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                  <SelectItem value="feedback">Product Feedback</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Tell us how we can help you..."
                className="min-h-32"
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
            <div className="grid grid-cols-1 gap-4">
              {contactMethods.map((method, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-primary">{method.icon}</div>
                      <CardTitle className="text-lg">{method.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-2">{method.description}</CardDescription>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{method.contact}</span>
                      <span className="text-muted-foreground">{method.response}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Support Hours
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM (PST)</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM (PST)</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
              <div className="pt-2 text-muted-foreground">
                Enterprise customers have 24/7 phone support
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Our Offices</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offices.map((office, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {office.city}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>{office.address}</p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {office.phone}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {office.timezone}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16 bg-muted rounded-lg p-8 text-center">
        <Headphones className="h-12 w-12 mx-auto mb-4 text-primary" />
        <h3 className="text-2xl font-semibold mb-2">Need immediate help?</h3>
        <p className="text-muted-foreground mb-4">
          Check out our comprehensive documentation and community forum for quick answers to common questions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline">View Documentation</Button>
          <Button variant="outline">Visit Community Forum</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;