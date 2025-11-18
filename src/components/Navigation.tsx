import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navigation = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { to: "/exhibitions", label: "Past exhibitions" },
    { to: "/gallery", label: "Gallery" },
    { to: "/about", label: "About" },
  ];
  
  return (
    <nav className="bg-background">
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

          {/* Mobile Navigation */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden p-2 hover:bg-secondary/50 rounded-md transition-elegant">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px]">
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`text-lg py-3 px-4 rounded-md transition-elegant ${
                      isActive(link.to) 
                        ? 'bg-secondary text-foreground font-medium' 
                        : 'hover:bg-secondary/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
