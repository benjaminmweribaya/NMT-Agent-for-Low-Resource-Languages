import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Server, AlertTriangle, CheckCircle, Users, FileText } from "lucide-react";

const Security = () => {
  const securityFeatures = [
    {
      icon: <Lock className="h-6 w-6" />,
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption",
      status: "Active"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "SOC 2 Type II Compliance",
      description: "Independently audited security controls meeting the highest industry standards",
      status: "Certified"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "24/7 Security Monitoring",
      description: "Continuous monitoring and threat detection with immediate incident response",
      status: "Active"
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Secure Infrastructure",
      description: "Multi-region deployment with redundant security layers and DDoS protection",
      status: "Active"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Access Controls",
      description: "Role-based access control with multi-factor authentication and least privilege principles",
      status: "Active"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Regular Audits",
      description: "Quarterly security assessments and annual penetration testing by third parties",
      status: "Current"
    }
  ];

  const certifications = [
    { name: "SOC 2 Type II", description: "Security, availability, and confidentiality", year: "2024" },
    { name: "ISO 27001", description: "Information security management", year: "2024" },
    { name: "GDPR Compliant", description: "European data protection regulation", year: "2024" },
    { name: "HIPAA Ready", description: "Healthcare data protection standards", year: "2024" }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Enterprise-Grade Security
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your data security is our top priority. We implement industry-leading security measures to protect your translations and personal information.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {securityFeatures.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="text-primary">
                  {feature.icon}
                </div>
                <Badge variant={feature.status === "Certified" ? "default" : "secondary"}>
                  {feature.status}
                </Badge>
              </div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Data Protection</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h3 className="font-semibold">Zero-Knowledge Architecture</h3>
                <p className="text-muted-foreground text-sm">We cannot access your translation data - it's encrypted with keys only you control.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h3 className="font-semibold">Data Residency Control</h3>
                <p className="text-muted-foreground text-sm">Choose where your data is stored and processed to meet regulatory requirements.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h3 className="font-semibold">Automatic Data Deletion</h3>
                <p className="text-muted-foreground text-sm">Translation data is automatically deleted after processing unless explicitly saved.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h3 className="font-semibold">Backup Encryption</h3>
                <p className="text-muted-foreground text-sm">All backups are encrypted and stored in geographically distributed locations.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Infrastructure Security</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h3 className="font-semibold">Multi-Layer Defense</h3>
                <p className="text-muted-foreground text-sm">Web application firewalls, intrusion detection, and behavioral analysis.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h3 className="font-semibold">Container Security</h3>
                <p className="text-muted-foreground text-sm">Kubernetes-based deployment with network policies and runtime security.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h3 className="font-semibold">Secrets Management</h3>
                <p className="text-muted-foreground text-sm">Automated rotation of API keys, certificates, and access tokens.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h3 className="font-semibold">Vulnerability Management</h3>
                <p className="text-muted-foreground text-sm">Continuous scanning and automated patching of security vulnerabilities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Certifications & Compliance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">{cert.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                <Badge variant="outline">Updated {cert.year}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-muted rounded-lg p-8 mb-16">
        <div className="flex items-start gap-4">
          <AlertTriangle className="h-6 w-6 text-orange-500 mt-1" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Security Incident Response</h3>
            <p className="text-muted-foreground mb-4">
              We maintain a comprehensive incident response plan with clear escalation procedures. 
              Our security team is available 24/7 to respond to potential security issues.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong>Detection:</strong> Automated monitoring and alerting systems
              </div>
              <div>
                <strong>Response:</strong> Immediate containment and investigation
              </div>
              <div>
                <strong>Recovery:</strong> Service restoration and post-incident review
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Security Contact</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          If you discover a security vulnerability or have security-related questions, 
          please contact our security team immediately.
        </p>
        <div className="space-y-2">
          <p><strong>Security Email:</strong> security@nmtplatform.com</p>
          <p><strong>Bug Bounty Program:</strong> security.nmtplatform.com/bounty</p>
          <p><strong>PGP Key:</strong> Available upon request</p>
        </div>
      </div>
    </div>
  );
};

export default Security;