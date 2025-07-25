import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, FileText, MessageSquare, Settings, User, Calendar, Clock, CheckCircle } from "lucide-react";

const CustomerPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Mock data for demonstration
  const upcomingServices = [
    { id: 1, service: "Lawn Mowing", date: "2024-01-15", time: "9:00 AM", status: "Scheduled" },
    { id: 2, service: "Gutter Cleaning", date: "2024-01-20", time: "2:00 PM", status: "Confirmed" },
  ];

  const serviceHistory = [
    { id: 1, service: "Pressure Washing", date: "2023-12-10", status: "Completed", amount: "$150" },
    { id: 2, service: "Lawn Care", date: "2023-12-05", status: "Completed", amount: "$75" },
    { id: 3, service: "Deck Staining", date: "2023-11-28", status: "Completed", amount: "$300" },
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-hero text-primary-foreground">
        {/* Wally mascot */}
        <div className="absolute top-20 right-8 hidden lg:block">
          <img 
            src="/lovable-uploads/815b13a5-9161-48a7-8d15-9c3e96a4f4ef.png" 
            alt="Wally the Wolf - Blackstone Mascot"
            className="w-40 h-40 object-contain opacity-80"
          />
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto">
            <Card className="shadow-elegant">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">Customer Portal Login</CardTitle>
                <CardDescription>Access your service history and manage appointments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" />
                </div>
                <Button 
                  variant="hero" 
                  className="w-full" 
                  onClick={() => setIsLoggedIn(true)}
                >
                  Sign In
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                  <p>Don't have an account? <button className="text-primary hover:underline">Contact us to get started</button></p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, John!</h1>
              <p className="opacity-90">Manage your services and view your history</p>
            </div>
            <div className="hidden md:block">
              <img 
                src="/lovable-uploads/815b13a5-9161-48a7-8d15-9c3e96a4f4ef.png" 
                alt="Wally the Wolf"
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-md">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              History
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Messages
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Next Service</p>
                      <p className="text-xl font-bold">Jan 15, 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Completed Services</p>
                      <p className="text-xl font-bold">12 This Year</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Avg Response</p>
                      <p className="text-xl font-bold">Same Day</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Services */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Services</CardTitle>
                <CardDescription>Your scheduled appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingServices.map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{service.service}</h4>
                        <p className="text-sm text-muted-foreground">{service.date} at {service.time}</p>
                      </div>
                      <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">
                        {service.status}
                      </span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Schedule New Service
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Service History</CardTitle>
                <CardDescription>Your completed services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {serviceHistory.map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{service.service}</h4>
                        <p className="text-sm text-muted-foreground">{service.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{service.amount}</p>
                        <span className="text-sm text-green-600">{service.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Messages</CardTitle>
                <CardDescription>Communication with our team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No messages yet</p>
                  <Button variant="outline" className="mt-4">
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>Manage your account information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Smith" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" defaultValue="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue="(555) 123-4567" />
                  </div>
                </div>
                <Button variant="hero" className="w-full md:w-auto">
                  Update Profile
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CustomerPortal;