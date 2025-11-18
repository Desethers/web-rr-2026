import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { to: "/exhibitions", label: "Past exhibitions" },
    { to: "/gallery", label: "Gallery" },
    { to: "/about", label: "About" },
  ];
  
  return (
    <nav className="bg-background relative">
      <div className="max-w-[1440px] mx-auto px-[25px] py-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl sm:text-2xl font-semibold tracking-tight hover:opacity-70 transition-elegant whitespace-nowrap"
          >
            Raphaël Rossi
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to} 
                className={`nav-pill ${isActive(link.to) ? 'bg-secondary' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary/50 rounded-md transition-elegant"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute right-0 top-full mt-2 mr-[25px] bg-background border border-border rounded-lg shadow-lg py-2 w-[250px] z-50">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-base transition-elegant ${
                  isActive(link.to) 
                    ? 'bg-secondary text-foreground font-medium' 
                    : 'hover:bg-secondary/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
