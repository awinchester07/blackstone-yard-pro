import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Settings, 
  LogOut, 
  Image, 
  FileText, 
  Users, 
  Upload,
  Save,
  Edit3
} from "lucide-react";
import { auth, storage } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AdminDashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Content state
  const [heroTitle, setHeroTitle] = useState("Professional Lawn Care & Handyman Services");
  const [heroSubtitle, setHeroSubtitle] = useState("Transform your outdoor space with our expert lawn care and reliable handyman services. Quality work, competitive prices, and customer satisfaction guaranteed.");
  const [aboutContent, setAboutContent] = useState("We are a family-owned business with over 10 years of experience in lawn care and handyman services.");
  const [contactPhone, setContactPhone] = useState("(555) 123-4567");
  const [contactEmail, setContactEmail] = useState("info@lawncare.com");

  useEffect(() => {
    const unsubscribe = checkUser();
    return () => unsubscribe();
  }, []);

  const checkUser = () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/admin/login");
      } else {
        setUser(user);
      }
      setLoading(false);
    });
    
    return unsubscribe;
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/admin/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleSaveContent = async () => {
    // In a real implementation, you would save this to your database
    toast({
      title: "Content Saved",
      description: "Website content has been updated successfully!",
    });
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      
      const storageRef = ref(storage, fileName);
      
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      toast({
        title: "Image Uploaded",
        description: "Image has been uploaded successfully!",
      });
    } catch (error: any) {
      toast({
        title: "Upload Failed",
        description: error.message || "Failed to upload image",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your website content and settings</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>

        <Tabs defaultValue="content" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Edit3 className="h-5 w-5 mr-2" />
                  Homepage Content
                </CardTitle>
                <CardDescription>
                  Update the main content sections of your website
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="hero-title">Hero Section Title</Label>
                  <Input
                    id="hero-title"
                    value={heroTitle}
                    onChange={(e) => setHeroTitle(e.target.value)}
                    placeholder="Main headline for your website"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hero-subtitle">Hero Section Subtitle</Label>
                  <Textarea
                    id="hero-subtitle"
                    value={heroSubtitle}
                    onChange={(e) => setHeroSubtitle(e.target.value)}
                    placeholder="Supporting text for your main headline"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="about-content">About Section Content</Label>
                  <Textarea
                    id="about-content"
                    value={aboutContent}
                    onChange={(e) => setAboutContent(e.target.value)}
                    placeholder="Tell visitors about your business"
                    rows={4}
                  />
                </div>
                <Button onClick={handleSaveContent} className="w-full">
                  <Save className="h-4 w-4 mr-2" />
                  Save Content Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="images" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Image className="h-5 w-5 mr-2" />
                  Image Management
                </CardTitle>
                <CardDescription>
                  Upload and manage images for your website
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Upload new images</p>
                    <p className="text-xs text-muted-foreground">
                      Drag and drop files here, or click to select files
                    </p>
                  </div>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="mt-4"
                  />
                </div>
                <Separator />
                <div>
                  <h3 className="font-medium mb-4">Current Images</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                      <p className="text-xs text-muted-foreground">Hero Image</p>
                    </div>
                    <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                      <p className="text-xs text-muted-foreground">Service 1</p>
                    </div>
                    <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                      <p className="text-xs text-muted-foreground">Service 2</p>
                    </div>
                    <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                      <p className="text-xs text-muted-foreground">About</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Services Management
                </CardTitle>
                <CardDescription>
                  Add, edit, and remove services offered
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="w-full">Add New Service</Button>
                  <Separator />
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Lawn Mowing</h3>
                          <p className="text-sm text-muted-foreground">Regular lawn maintenance service</p>
                          <p className="text-sm font-medium">Starting at $45</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="destructive" size="sm">Delete</Button>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Handyman Services</h3>
                          <p className="text-sm text-muted-foreground">General home repairs and maintenance</p>
                          <p className="text-sm font-medium">Starting at $75</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="destructive" size="sm">Delete</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Site Settings
                </CardTitle>
                <CardDescription>
                  Configure general website settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Contact Phone</Label>
                    <Input
                      id="contact-phone"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="Business phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Contact Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="Business email address"
                    />
                  </div>
                </div>
                <Button onClick={handleSaveContent} className="w-full">
                  <Save className="h-4 w-4 mr-2" />
                  Save Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;