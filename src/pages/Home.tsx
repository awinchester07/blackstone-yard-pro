import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import QuoteForm from "@/components/QuoteForm";
import { CheckCircle, Star, Phone, Shield, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home-lawn.jpg";
import handymanServices from "@/assets/handyman-services.jpg";
import lawnCareServices from "@/assets/lawn-care-services.jpg";

const Home = () => {
  const services = [
    {
      title: "Handyman Services",
      description: "Professional home repairs, maintenance, and improvements",
      image: handymanServices,
      features: ["Home Repairs", "Maintenance", "Painting", "Pressure Washing"]
    },
    {
      title: "Lawn Care & Landscaping",
      description: "Complete lawn care and beautiful landscaping solutions",
      image: lawnCareServices,
      features: ["Lawn Mowing", "Landscaping", "Trimming", "Seasonal Cleanup"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Blackstone transformed our yard and fixed our deck perfectly. Professional and reliable!",
      rating: 5
    },
    {
      name: "Mike Davis",
      text: "Best lawn care service in the area. They always exceed expectations.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      text: "From small repairs to major landscaping, they do it all with quality workmanship.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Quote Form */}
      <section className="min-h-screen bg-gradient-hero text-primary-foreground relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left side - Hero content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Professional Home & 
                <span className="text-secondary"> Lawn Care</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                Your trusted partner for all home maintenance and beautiful landscapes. 
                Licensed, insured, and committed to excellence.
              </p>
              
              {/* Why Choose Us - Quick Points */}
              <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>5-Star Reviews</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>Same-Day Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>Quality Guaranteed</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="gold" size="lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (555) 123-4567
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>

            {/* Right side - Quote Form */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From home repairs to beautiful landscapes, we're your one-stop solution.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                  <CardDescription className="text-lg">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Blackstone?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine years of experience with modern techniques to deliver exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-muted-foreground">Fully licensed and insured for your peace of mind.</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reliable Service</h3>
              <p className="text-muted-foreground">On-time, every time. We respect your schedule.</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Work</h3>
              <p className="text-muted-foreground">Exceptional craftsmanship on every project.</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">5-Star Reviews</h3>
              <p className="text-muted-foreground">Consistently rated 5 stars by our customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from our satisfied customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-gold text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Home?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for your free consultation and estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Phone className="mr-2 h-5 w-5" />
              Call (555) 123-4567
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 bg-primary/10 text-primary hover:bg-primary/20" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;