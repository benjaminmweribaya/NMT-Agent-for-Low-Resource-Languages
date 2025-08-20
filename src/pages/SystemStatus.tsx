import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertCircle, XCircle, Clock, TrendingUp, Server, Database, Globe } from "lucide-react";

const SystemStatus = () => {
  const systemStatus = "operational"; // operational, degraded, outage

  const services = [
    {
      name: "Translation API",
      status: "operational",
      uptime: 99.97,
      latency: "145ms",
      icon: <Globe className="h-5 w-5" />
    },
    {
      name: "Model Training",
      status: "operational",
      uptime: 99.95,
      latency: "2.3s",
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      name: "Dataset Management",
      status: "operational",
      uptime: 99.98,
      latency: "89ms",
      icon: <Database className="h-5 w-5" />
    },
    {
      name: "Authentication",
      status: "operational",
      uptime: 99.99,
      latency: "67ms",
      icon: <CheckCircle className="h-5 w-5" />
    },
    {
      name: "Web Dashboard",
      status: "operational",
      uptime: 99.96,
      latency: "234ms",
      icon: <Server className="h-5 w-5" />
    },
    {
      name: "File Storage",
      status: "degraded",
      uptime: 99.87,
      latency: "456ms",
      icon: <AlertCircle className="h-5 w-5" />
    }
  ];

  const incidents = [
    {
      title: "Elevated API Response Times",
      status: "investigating",
      severity: "minor",
      time: "2 hours ago",
      description: "We are investigating reports of increased response times for the Translation API in the US-West region."
    },
    {
      title: "File Storage Performance Degradation",
      status: "identified",
      severity: "minor",
      time: "4 hours ago",
      description: "We have identified the cause of slower file uploads and are working on a resolution."
    },
    {
      title: "Model Training Queue Delays - RESOLVED",
      status: "resolved",
      severity: "major",
      time: "1 day ago",
      description: "Training requests were experiencing delays. Issue has been resolved and queue is processing normally."
    }
  ];

  const metrics = [
    { name: "API Requests", value: "2.4M", change: "+12%", period: "last 24h" },
    { name: "Active Users", value: "15.7K", change: "+8%", period: "last 24h" },
    { name: "Translation Accuracy", value: "94.2%", change: "+0.3%", period: "last 7d" },
    { name: "Response Time", value: "145ms", change: "-5ms", period: "avg last 24h" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "degraded":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case "outage":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <CheckCircle className="h-4 w-4 text-green-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "operational":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Operational</Badge>;
      case "degraded":
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Degraded</Badge>;
      case "outage":
        return <Badge className="bg-red-100 text-red-800 border-red-200">Outage</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "minor":
        return <Badge variant="outline" className="text-yellow-600 border-yellow-600">Minor</Badge>;
      case "major":
        return <Badge variant="outline" className="text-red-600 border-red-600">Major</Badge>;
      case "critical":
        return <Badge variant="outline" className="text-red-800 border-red-800">Critical</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getIncidentStatusBadge = (status: string) => {
    switch (status) {
      case "investigating":
        return <Badge variant="outline" className="text-blue-600 border-blue-600">Investigating</Badge>;
      case "identified":
        return <Badge variant="outline" className="text-orange-600 border-orange-600">Identified</Badge>;
      case "monitoring":
        return <Badge variant="outline" className="text-purple-600 border-purple-600">Monitoring</Badge>;
      case "resolved":
        return <Badge variant="outline" className="text-green-600 border-green-600">Resolved</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">System Status</h1>
        <div className="flex items-center justify-center gap-2 mb-4">
          {getStatusIcon(systemStatus)}
          <span className="text-xl">All Systems Operational</span>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real-time status of our neural machine translation platform and services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">{metric.value}</div>
              <div className="flex items-center gap-2 text-sm">
                <span className={metric.change.startsWith('+') ? 'text-green-600' : 'text-blue-600'}>
                  {metric.change}
                </span>
                <span className="text-muted-foreground">{metric.period}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Service Status</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-primary">{service.icon}</div>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                    </div>
                    {getStatusBadge(service.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Uptime (30 days)</span>
                      <span className="font-medium">{service.uptime}%</span>
                    </div>
                    <Progress value={service.uptime} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span>Avg Response Time</span>
                      <span className="font-medium">{service.latency}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Recent Incidents</h2>
          <div className="space-y-4">
            {incidents.map((incident, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">{incident.title}</CardTitle>
                        {getSeverityBadge(incident.severity)}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {incident.time}
                      </div>
                    </div>
                    {getIncidentStatusBadge(incident.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{incident.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-muted rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Subscribe to Status Updates</h3>
          <p className="text-muted-foreground mb-4">
            Get notified about system status changes and planned maintenance via email or webhook.
          </p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Subscribe via Email
            </button>
            <button className="px-4 py-2 border border-input bg-background rounded-md hover:bg-accent transition-colors">
              Webhook Setup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemStatus;