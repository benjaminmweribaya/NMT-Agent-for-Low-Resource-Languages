import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for testing and small projects",
      features: [
        "1,000 characters/month",
        "50+ language pairs",
        "Basic translation quality",
        "Email support",
        "Rate limit: 10 req/min"
      ],
      button: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$49",
      period: "/month",
      description: "Ideal for businesses and developers",
      features: [
        "500,000 characters/month",
        "100+ language pairs",
        "High-quality translation",
        "Priority email support",
        "Rate limit: 100 req/min",
        "Custom models",
        "Translation analytics"
      ],
      button: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large-scale enterprise deployments",
      features: [
        "Unlimited characters",
        "All language pairs",
        "Premium translation quality",
        "24/7 phone & email support",
        "Custom rate limits",
        "Dedicated models",
        "Advanced analytics",
        "SLA guarantee",
        "On-premise deployment"
      ],
      button: "Contact Sales",
      popular: false
    }
  ];

  const usagePricing = [
    { range: "0 - 1M characters", price: "$0.50", unit: "per 10K characters" },
    { range: "1M - 10M characters", price: "$0.40", unit: "per 10K characters" },
    { range: "10M - 100M characters", price: "$0.30", unit: "per 10K characters" },
    { range: "100M+ characters", price: "$0.20", unit: "per 10K characters" }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Choose the perfect plan for your translation needs. All plans include our core features with no hidden fees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  Most Popular
                </Badge>
              </div>
            )}
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <CardDescription className="mt-2">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full" 
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.button}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Usage-Based Pricing</h2>
        <Card>
          <CardHeader>
            <CardTitle>Pay-as-you-scale pricing tiers</CardTitle>
            <CardDescription>
              Our usage-based pricing scales with your needs, offering better rates as your volume increases.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {usagePricing.map((tier, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b last:border-b-0">
                  <div>
                    <span className="font-semibold">{tier.range}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary">{tier.price}</span>
                    <span className="text-sm text-muted-foreground ml-2">{tier.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-16 space-y-4">
        <h3 className="text-2xl font-semibold">Need a custom solution?</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We offer custom enterprise solutions with dedicated infrastructure, specialized models, and tailored support.
        </p>
        <Button size="lg">Contact Sales Team</Button>
      </div>
    </div>
  );
};

export default Pricing;