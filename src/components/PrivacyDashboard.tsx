import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Shield, 
  Cookie, 
  Bell, 
  Mail, 
  Download, 
  Trash2, 
  Eye, 
  Settings,
  Calendar,
  MapPin,
  Globe
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PrivacySettings {
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  emailMarketing: boolean;
  smsMarketing: boolean;
  pushNotifications: boolean;
  dataCollection: boolean;
  locationTracking: boolean;
  thirdPartySharing: boolean;
}

const PrivacyDashboard = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState<PrivacySettings>({
    analytics: true,
    marketing: false,
    functional: true,
    emailMarketing: false,
    smsMarketing: false,
    pushNotifications: true,
    dataCollection: true,
    locationTracking: false,
    thirdPartySharing: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSettingChange = (key: keyof PrivacySettings, value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSaveSettings = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Settings Saved",
        description: "Your privacy preferences have been updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save settings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDataExport = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Export Requested",
        description: "Your data export will be emailed to you within 24 hours.",
      });
    } catch (error) {
      toast({
        title: "Export Failed",
        description: "Failed to initiate data export. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDataDeletion = async () => {
    if (!window.confirm("Are you sure you want to delete all your data? This action cannot be undone.")) {
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Deletion Requested",
        description: "Your data deletion request has been submitted. You will receive confirmation within 30 days.",
      });
    } catch (error) {
      toast({
        title: "Deletion Failed",
        description: "Failed to process deletion request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Shield className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">Privacy Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your privacy settings and data preferences
          </p>
        </div>
      </div>

      <Tabs defaultValue="privacy" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="privacy" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Privacy
          </TabsTrigger>
          <TabsTrigger value="cookies" className="flex items-center gap-2">
            <Cookie className="h-4 w-4" />
            Cookies
          </TabsTrigger>
          <TabsTrigger value="communications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Communications
          </TabsTrigger>
          <TabsTrigger value="data" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Data Rights
          </TabsTrigger>
        </TabsList>

        {/* Privacy Settings */}
        <TabsContent value="privacy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Data Collection Preferences
              </CardTitle>
              <CardDescription>
                Control how we collect and use your personal data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span className="font-medium">Analytics Data Collection</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Allow collection of usage analytics to improve our services
                  </p>
                </div>
                <Switch
                  checked={settings.dataCollection}
                  onCheckedChange={(checked) => handleSettingChange('dataCollection', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span className="font-medium">Location Tracking</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Allow location-based features and regional optimization
                  </p>
                </div>
                <Switch
                  checked={settings.locationTracking}
                  onCheckedChange={(checked) => handleSettingChange('locationTracking', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span className="font-medium">Third-Party Data Sharing</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Allow sharing anonymized data with trusted partners
                  </p>
                </div>
                <Switch
                  checked={settings.thirdPartySharing}
                  onCheckedChange={(checked) => handleSettingChange('thirdPartySharing', checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Cookie Settings */}
        <TabsContent value="cookies" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="h-5 w-5" />
                Cookie Preferences
              </CardTitle>
              <CardDescription>
                Manage your cookie preferences for different types of cookies
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Essential Cookies</span>
                    <Badge variant="secondary">Required</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Necessary for website functionality and security
                  </p>
                </div>
                <Switch checked={true} disabled />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="font-medium">Analytics Cookies</span>
                  <p className="text-sm text-muted-foreground">
                    Help us understand how visitors interact with our website
                  </p>
                </div>
                <Switch
                  checked={settings.analytics}
                  onCheckedChange={(checked) => handleSettingChange('analytics', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="font-medium">Functional Cookies</span>
                  <p className="text-sm text-muted-foreground">
                    Enable enhanced functionality and personalization
                  </p>
                </div>
                <Switch
                  checked={settings.functional}
                  onCheckedChange={(checked) => handleSettingChange('functional', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="font-medium">Marketing Cookies</span>
                  <p className="text-sm text-muted-foreground">
                    Used to deliver relevant advertisements
                  </p>
                </div>
                <Switch
                  checked={settings.marketing}
                  onCheckedChange={(checked) => handleSettingChange('marketing', checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Communication Settings */}
        <TabsContent value="communications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Communication Preferences
              </CardTitle>
              <CardDescription>
                Control how we communicate with you
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span className="font-medium">Email Marketing</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Receive promotional emails and newsletters
                  </p>
                </div>
                <Switch
                  checked={settings.emailMarketing}
                  onCheckedChange={(checked) => handleSettingChange('emailMarketing', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="font-medium">SMS Marketing</span>
                  <p className="text-sm text-muted-foreground">
                    Receive promotional text messages
                  </p>
                </div>
                <Switch
                  checked={settings.smsMarketing}
                  onCheckedChange={(checked) => handleSettingChange('smsMarketing', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    <span className="font-medium">Push Notifications</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Receive browser notifications for important updates
                  </p>
                </div>
                <Switch
                  checked={settings.pushNotifications}
                  onCheckedChange={(checked) => handleSettingChange('pushNotifications', checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Data Rights */}
        <TabsContent value="data" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Your Data Rights
              </CardTitle>
              <CardDescription>
                Exercise your rights under GDPR and other privacy regulations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Calendar className="h-4 w-4" />
                <AlertDescription>
                  Account created: January 15, 2024 • Last login: 2 hours ago
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={handleDataExport}
                  disabled={isLoading}
                >
                  <Download className="h-4 w-4" />
                  Export My Data
                </Button>

                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={handleDataDeletion}
                  disabled={isLoading}
                >
                  <Trash2 className="h-4 w-4" />
                  Delete My Account
                </Button>
              </div>

              <div className="text-sm text-muted-foreground space-y-2">
                <p>
                  <strong>Data Export:</strong> Download all your personal data in a machine-readable format.
                </p>
                <p>
                  <strong>Account Deletion:</strong> Permanently delete your account and all associated data.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSaveSettings} disabled={isLoading}>
          {isLoading ? 'Saving...' : 'Save All Settings'}
        </Button>
      </div>
    </div>
  );
};

export default PrivacyDashboard;