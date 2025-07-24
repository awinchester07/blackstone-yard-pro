import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-4567",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@blackstonehomeandlawn.com",
      description: "Send us a message anytime"
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: "Greater Metro Area",
      description: "We serve a 25-mile radius"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Sat: 7AM-6PM",
      description: "Emergency services available 24/7"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Ready to get started? We're here to help with all your home and lawn care needs.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">
              Multiple ways to reach us - choose what works best for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="bg-gradient-secondary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{info.title}</h3>
                  <p className="text-lg font-medium mb-1">{info.details}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-primary flex items-center">
                      <MessageSquare className="mr-3 h-6 w-6" />
                      Send Us a Message
                    </CardTitle>
                    <CardDescription className="text-base">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Enter your email address"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          placeholder="What can we help you with?"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Tell us about your project or question..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" variant="quote" className="w-full" size="lg">
                        Send Message
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        * Required fields. We'll never share your information.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Why Choose Blackstone?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-secondary w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-primary">Fast Response Time</h4>
                        <p className="text-muted-foreground text-sm">We respond to all inquiries within 24 hours.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-secondary w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-primary">Free Estimates</h4>
                        <p className="text-muted-foreground text-sm">All consultations and estimates are completely free.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-secondary w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-primary">Licensed & Insured</h4>
                        <p className="text-muted-foreground text-sm">Fully licensed and insured for your peace of mind.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-secondary w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-primary">Satisfaction Guaranteed</h4>
                        <p className="text-muted-foreground text-sm">We stand behind our work with a 100% satisfaction guarantee.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="shadow-card">
                  <CardContent className="pt-6">
                    <h4 className="text-lg font-semibold text-primary mb-3">Emergency Services</h4>
                    <p className="text-muted-foreground mb-4">
                      Need immediate assistance? We offer 24/7 emergency services for urgent repairs and situations.
                    </p>
                    <Button variant="outline" className="w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Emergency Line
                    </Button>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="pt-6">
                    <h4 className="text-lg font-semibold text-primary mb-3">Service Areas</h4>
                    <p className="text-muted-foreground text-sm">
                      We proudly serve the greater metro area including surrounding suburbs and communities within a 25-mile radius. 
                      Contact us to confirm service availability in your area.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait - contact us today for your free consultation and estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-neutral-100">
              <Phone className="mr-2 h-5 w-5" />
              Call (555) 123-4567
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 bg-white/10 text-white hover:bg-white/20" asChild>
              <Link to="/#quote">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;