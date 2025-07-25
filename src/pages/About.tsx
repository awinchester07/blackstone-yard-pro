import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Clock, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "5", label: "Years Experience" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Emergency Service" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "We're licensed, insured, and committed to honest, reliable service every time."
    },
    {
      icon: Award,
      title: "Quality Workmanship",
      description: "We take pride in our work and guarantee exceptional results on every project."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We listen, communicate, and deliver."
    },
    {
      icon: Clock,
      title: "Punctuality",
      description: "We respect your time and always arrive when we say we will."
    }
  ];

  const certifications = [
    "Licensed General Contractor",
    "Fully Insured & Bonded",
    "EPA Certified",
    "Better Business Bureau A+ Rating",
    "Local Chamber of Commerce Member"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <img 
                  src="/lovable-uploads/815b13a5-9161-48a7-8d15-9c3e96a4f4ef.png" 
                  alt="Wally the Wolf - Blackstone Mascot"
                  className="w-48 h-48 object-contain"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                About Blackstone Home & Lawn
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Meet Wally the Wolf, our mascot who represents the Blackstone spirit - 
                reliable, hardworking, and always ready to tackle any home or lawn challenge!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Blackstone Home & Lawn was founded with a simple mission: to provide homeowners with 
                    reliable, high-quality home maintenance and lawn care services they can trust.
                  </p>
                  <p>
                    What started as a small handyman business has grown into a comprehensive home and 
                    lawn care service, but we've never lost sight of our core values: quality work, 
                    honest pricing, and exceptional customer service.
                  </p>
                  <p>
                    Today, we're proud to serve hundreds of satisfied customers throughout the metro area, 
                    maintaining their homes and creating beautiful outdoor spaces they can enjoy year-round.
                  </p>
                </div>
                <Button variant="quote" size="lg" className="mt-6" asChild>
                  <Link to="/#quote">Get Your Free Quote</Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center shadow-card">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and ensure you receive the best possible service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-secondary p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-10 w-10 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground">
                Experienced professionals dedicated to exceeding your expectations.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Professional Excellence</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Our team consists of skilled professionals with years of experience in home maintenance 
                    and landscaping. Every team member is background-checked, trained, and committed to 
                    delivering exceptional results.
                  </p>
                  <p>
                    We believe in continuous learning and stay updated with the latest techniques and 
                    technologies to provide you with the best possible service.
                  </p>
                  <p>
                    Whether it's a simple repair or a complex landscaping project, you can trust our 
                    team to handle it with skill and professionalism.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Certifications & Licenses</h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-card">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Blackstone transformed our backyard into a beautiful oasis. The team was professional, 
                  punctual, and the quality of work exceeded our expectations."
                </p>
                <p className="font-semibold text-primary">- Jennifer Martinez</p>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "I've been using Blackstone for all my home repairs for over two years. 
                  They're reliable, honest, and do excellent work at fair prices."
                </p>
                <p className="font-semibold text-primary">- Robert Thompson</p>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "From lawn care to home maintenance, Blackstone does it all. 
                  They've saved me so much time and my property has never looked better."
                </p>
                <p className="font-semibold text-primary">- Amanda Chen</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience the Blackstone Difference?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied customers who trust us with their home and lawn care needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-neutral-100" asChild>
              <Link to="/#quote">Get Your Free Quote</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 bg-white/10 text-white hover:bg-white/20" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;