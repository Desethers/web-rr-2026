import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { to: "/exhibitions", label: "Past exhibitions" },
    { to: "/gallery", label: "Gallery" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className="bg-background">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[25px] pt-6 pb-1 md:pt-6 md:pb-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-">
          <Link
            to="/"
            className="text-xl sm:text-2xl font-semibold tracking-tight hover:opacity-70 transition-elegant whitespace-nowrap"
          >
            Raphaël Rossi
          </Link>

          {/* Navigation - Always visible */}
          <div className="flex flex-wrap items-center pt-6 gap-4">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className={`nav-pill ${isActive(link.to) ? "bg-secondary" : ""}`}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
