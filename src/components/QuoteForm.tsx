import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Phone, Mail } from "lucide-react";

const QuoteForm = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    description: "",
    urgency: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.phone || !formData.serviceType) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Quote request submitted!",
        description: "We'll contact you within 24 hours with your free estimate."
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto shadow-elegant">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <CheckCircle className="h-16 w-16 text-secondary mx-auto" />
            <h3 className="text-2xl font-bold text-primary">Thank You!</h3>
            <p className="text-muted-foreground">
              Your quote request has been submitted successfully. We'll contact you within 24 hours with your free estimate.
            </p>
            <div className="pt-4 space-y-2">
              <p className="text-sm font-medium">Need immediate assistance?</p>
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-1 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-1 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>Call or Email</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-elegant">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-primary">Get Your Free Quote</CardTitle>
        <CardDescription>
          Fill out the form below and we'll provide you with a detailed estimate within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="(555) 123-4567"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Property Address</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              placeholder="Enter property address"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="serviceType">Service Type *</Label>
            <Select onValueChange={(value) => handleInputChange("serviceType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select service type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lawn-care">Lawn Care & Landscaping</SelectItem>
                <SelectItem value="handyman">Handyman Services</SelectItem>
                <SelectItem value="both">Both Lawn Care & Handyman</SelectItem>
                <SelectItem value="pressure-washing">Pressure Washing</SelectItem>
                <SelectItem value="painting">Painting Services</SelectItem>
                <SelectItem value="seasonal">Seasonal Cleanup</SelectItem>
                <SelectItem value="emergency">Emergency Repairs</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="urgency">Timeline</Label>
            <Select onValueChange={(value) => handleInputChange("urgency", value)}>
              <SelectTrigger>
                <SelectValue placeholder="When do you need this done?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">ASAP</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="next-week">Next Week</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="flexible">I'm Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Project Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Please describe your project in detail..."
              rows={4}
            />
          </div>

          <Button type="submit" variant="quote" className="w-full" size="lg">
            Get My Free Quote
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            * Required fields. We'll never share your information.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default QuoteForm;