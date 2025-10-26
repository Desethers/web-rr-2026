import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-light tracking-tight hover:text-muted-foreground transition-elegant">
            Raphaël Rossi
          </Link>
          
          <div className="flex items-center gap-8">
            <Link 
              to="/exhibitions" 
              className={`nav-link text-sm ${isActive('/exhibitions') ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Past exhibitions
            </Link>
            <Link 
              to="/gallery" 
              className={`nav-link text-sm ${isActive('/gallery') ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Gallery
            </Link>
            <Link 
              to="/about" 
              className={`nav-link text-sm ${isActive('/about') ? 'text-primary' : 'text-muted-foreground'}`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
