import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Customer Portal', href: '/portal' },
    { name: 'Admin', href: '/admin/login' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span>info@blackstonehomeandlawn.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Free Estimates • Licensed & Insured</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-primary text-primary-foreground font-bold text-xl px-3 py-2 rounded-lg">
              BH&L
            </div>
            <div>
              <div className="font-bold text-xl text-primary">Blackstone</div>
              <div className="text-sm text-muted-foreground">Home & Lawn</div>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors hover:text-primary ${
                  isActive(item.href) 
                    ? 'text-primary font-medium border-b-2 border-primary' 
                    : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="quote" size="lg" asChild>
              <Link to="/#quote">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 mt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors hover:text-primary py-2 ${
                    isActive(item.href) ? 'text-primary font-medium' : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="quote" size="lg" asChild className="w-full">
                <Link to="/#quote" onClick={() => setIsMenuOpen(false)}>
                  Get Free Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;