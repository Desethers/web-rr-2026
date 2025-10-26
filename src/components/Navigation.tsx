import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-semibold tracking-tight hover:opacity-70 transition-elegant">
            Raphaël Rossi
          </Link>
          
          <div className="flex items-center gap-2">
            <Link 
              to="/exhibitions" 
              className={`nav-pill ${isActive('/exhibitions') ? 'bg-secondary' : ''}`}
            >
              Past exhibitions
            </Link>
            <Link 
              to="/gallery" 
              className={`nav-pill ${isActive('/gallery') ? 'bg-secondary' : ''}`}
            >
              Gallery
            </Link>
            <Link 
              to="/about" 
              className={`nav-pill ${isActive('/about') ? 'bg-secondary' : ''}`}
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
