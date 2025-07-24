import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-primary text-primary-foreground font-bold text-xl px-3 py-2 rounded-lg">
                BH&L
              </div>
              <div>
                <div className="font-bold text-lg text-white">Blackstone</div>
                <div className="text-sm text-neutral-300">Home & Lawn</div>
              </div>
            </div>
            <p className="text-neutral-300 text-sm">
              Professional home maintenance and lawn care services. Licensed, insured, and committed to excellence.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-neutral-400 hover:text-secondary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-neutral-400 hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-neutral-300 hover:text-secondary transition-colors text-sm">
                Home
              </Link>
              <Link to="/services" className="block text-neutral-300 hover:text-secondary transition-colors text-sm">
                Services
              </Link>
              <Link to="/about" className="block text-neutral-300 hover:text-secondary transition-colors text-sm">
                About Us
              </Link>
              <Link to="/contact" className="block text-neutral-300 hover:text-secondary transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Our Services</h3>
            <div className="space-y-2 text-sm text-neutral-300">
              <p>• Home Repairs & Maintenance</p>
              <p>• Lawn Care & Landscaping</p>
              <p>• Pressure Washing</p>
              <p>• Painting Services</p>
              <p>• Seasonal Cleanup</p>
              <p>• Emergency Repairs</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-neutral-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-neutral-300">info@blackstonehomeandlawn.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-neutral-300">Serving Greater Metro Area</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="h-4 w-4 text-secondary" />
                <span className="text-neutral-300">Mon-Sat: 7AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-sm text-neutral-400">
          <p>&copy; 2024 Blackstone Home and Lawn. All rights reserved. Licensed & Insured.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;