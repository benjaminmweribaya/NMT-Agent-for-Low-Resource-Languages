import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Download, Trash2, Edit, Eye, Ban, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type RequestType = 'access' | 'rectification' | 'erasure' | 'restrict' | 'portability' | 'object';

interface GdprRequest {
  requestType: RequestType;
  email: string;
  fullName: string;
  description: string;
  verificationMethod: string;
  agreedToTerms: boolean;
}

const requestTypes = [
  {
    value: 'access' as const,
    label: 'Right of Access',
    description: 'Request a copy of all personal data we hold about you',
    icon: Eye,
  },
  {
    value: 'rectification' as const,
    label: 'Right to Rectification',
    description: 'Request correction of inaccurate or incomplete personal data',
    icon: Edit,
  },
  {
    value: 'erasure' as const,
    label: 'Right to Erasure',
    description: 'Request deletion of your personal data',
    icon: Trash2,
  },
  {
    value: 'restrict' as const,
    label: 'Right to Restrict Processing',
    description: 'Request limitation of how we process your data',
    icon: Ban,
  },
  {
    value: 'portability' as const,
    label: 'Right to Data Portability',
    description: 'Request your data in a portable format',
    icon: Download,
  },
  {
    value: 'object' as const,
    label: 'Right to Object',
    description: 'Object to processing based on legitimate interests or marketing',
    icon: Shield,
  },
];

const GdprRequestForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<GdprRequest>({
    requestType: 'access',
    email: '',
    fullName: '',
    description: '',
    verificationMethod: '',
    agreedToTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreedToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Request Submitted",
        description: "Your GDPR request has been submitted successfully. We will respond within 30 days.",
      });

      // Reset form
      setFormData({
        requestType: 'access',
        email: '',
        fullName: '',
        description: '',
        verificationMethod: '',
        agreedToTerms: false,
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedRequestType = requestTypes.find(type => type.value === formData.requestType);
  const IconComponent = selectedRequestType?.icon || FileText;

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Shield className="h-6 w-6 text-primary" />
          <div>
            <CardTitle>GDPR Data Request</CardTitle>
            <CardDescription>
              Submit a request to exercise your data protection rights under GDPR
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Request Type Selection */}
          <div className="space-y-3">
            <Label>Type of Request</Label>
            <Select
              value={formData.requestType}
              onValueChange={(value: RequestType) =>
                setFormData(prev => ({ ...prev, requestType: value }))
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {requestTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    <div className="flex items-center gap-2">
                      <type.icon className="h-4 w-4" />
                      {type.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {selectedRequestType && (
              <Alert>
                <IconComponent className="h-4 w-4" />
                <AlertDescription>
                  {selectedRequestType.description}
                </AlertDescription>
              </Alert>
            )}
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData(prev => ({ ...prev, fullName: e.target.value }))
                }
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData(prev => ({ ...prev, email: e.target.value }))
                }
                required
                placeholder="Enter your email address"
              />
            </div>
          </div>

          {/* Identity Verification */}
          <div className="space-y-2">
            <Label htmlFor="verification">Identity Verification Method *</Label>
            <Select
              value={formData.verificationMethod}
              onValueChange={(value) =>
                setFormData(prev => ({ ...prev, verificationMethod: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select verification method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="account-login">I can log into my account</SelectItem>
                <SelectItem value="government-id">Government-issued ID</SelectItem>
                <SelectItem value="utility-bill">Utility bill or bank statement</SelectItem>
                <SelectItem value="other">Other (specify in description)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Additional Details</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData(prev => ({ ...prev, description: e.target.value }))
              }
              placeholder="Provide any additional details about your request..."
              rows={4}
            />
          </div>

          {/* Terms Agreement */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="terms"
              checked={formData.agreedToTerms}
              onCheckedChange={(checked) =>
                setFormData(prev => ({ ...prev, agreedToTerms: checked as boolean }))
              }
            />
            <Label htmlFor="terms" className="text-sm leading-5">
              I confirm that the information provided is accurate and I understand that identity verification may be required to process this request. I acknowledge that you will respond within 30 days as required by GDPR.
            </Label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting || !formData.agreedToTerms}
          >
            {isSubmitting ? 'Submitting Request...' : 'Submit GDPR Request'}
          </Button>
        </form>

        {/* Contact Information */}
        <div className="mt-6 p-4 bg-muted rounded-lg">
          <h4 className="font-medium mb-2">Need Help?</h4>
          <p className="text-sm text-muted-foreground mb-2">
            If you need assistance with your request, you can also contact us directly:
          </p>
          <ul className="text-sm space-y-1">
            <li>Data Protection Officer: dpo@nmtplatform.com</li>
            <li>Privacy Team: privacy@nmtplatform.com</li>
            <li>Response Time: Within 30 days</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default GdprRequestForm;