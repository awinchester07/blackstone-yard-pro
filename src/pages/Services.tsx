import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Wrench, Scissors, Paintbrush, Droplets, Leaf, Home } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const handymanServices = [
    {
      icon: Wrench,
      title: "General Repairs",
      description: "Fix leaky faucets, squeaky doors, broken fixtures, and more",
      features: ["Plumbing repairs", "Electrical fixes", "Door & window repairs", "Fixture installation"]
    },
    {
      icon: Paintbrush,
      title: "Painting Services",
      description: "Interior and exterior painting with premium quality finishes",
      features: ["Interior painting", "Exterior painting", "Staining & sealing", "Color consultation"]
    },
    {
      icon: Home,
      title: "Home Maintenance",
      description: "Regular maintenance to keep your home in perfect condition",
      features: ["Gutter cleaning", "Deck maintenance", "Weatherproofing", "Seasonal inspections"]
    },
    {
      icon: Droplets,
      title: "Pressure Washing",
      description: "Deep cleaning for driveways, decks, siding, and more",
      features: ["Driveway cleaning", "Deck restoration", "Siding cleaning", "Concrete surfaces"]
    }
  ];

  const lawnServices = [
    {
      icon: Scissors,
      title: "Lawn Mowing & Care",
      description: "Professional lawn maintenance for a pristine yard",
      features: ["Weekly mowing", "Edge trimming", "Fertilization", "Weed control"]
    },
    {
      icon: Leaf,
      title: "Landscaping",
      description: "Beautiful landscape design and installation",
      features: ["Landscape design", "Plant installation", "Mulching", "Garden beds"]
    },
    {
      icon: Scissors,
      title: "Tree & Shrub Care",
      description: "Expert pruning and maintenance for healthy plants",
      features: ["Tree trimming", "Shrub pruning", "Plant health care", "Removal services"]
    },
    {
      icon: Leaf,
      title: "Seasonal Services",
      description: "Year-round care for your outdoor spaces",
      features: ["Spring cleanup", "Fall leaf removal", "Snow removal", "Holiday decorating"]
    }
  ];

  const ServiceCard = ({ service }: { service: any }) => (
    <Card className="shadow-card hover:shadow-elegant transition-all duration-300 h-full">
      <CardHeader>
        <div className="flex items-center space-x-3 mb-3">
          <div className="bg-gradient-secondary p-3 rounded-lg">
            <service.icon className="h-6 w-6 text-secondary-foreground" />
          </div>
          <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
        </div>
        <CardDescription className="text-base">{service.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {service.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Comprehensive home and lawn care services to keep your property looking its best year-round.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/#quote">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>

      {/* Handyman Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Handyman Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional home repairs and maintenance services to keep your property in perfect condition.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {handymanServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Lawn Care Services */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Lawn Care & Landscaping</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete outdoor care services to create and maintain beautiful landscapes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lawnServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              Simple, straightforward steps to get your project completed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="text-muted-foreground">Call, email, or fill out our quote form to get started.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Estimate</h3>
              <p className="text-muted-foreground">We'll assess your needs and provide a detailed quote.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Schedule Work</h3>
              <p className="text-muted-foreground">We'll work around your schedule to get the job done.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Results</h3>
              <p className="text-muted-foreground">Enjoy your beautifully maintained home and yard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for your free consultation and estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-neutral-100" asChild>
              <Link to="/#quote">Get Free Quote</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 bg-white/10 text-white hover:bg-white/20" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;