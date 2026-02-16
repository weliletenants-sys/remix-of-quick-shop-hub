import { ShoppingCart, User, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { itemCount } = useCart();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-hero">
            <span className="text-lg font-bold text-primary-foreground">S</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-base font-bold text-foreground">SwiftDeliver</span>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>Deliver to your area</span>
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-5">
          {[
            { label: "Home", path: "/" },
            { label: "Shop", path: "/shop" },
            { label: "Rider Portal", path: "/rider-dashboard" },
            { label: "Business", path: "/business-dashboard" },
            { label: "Manager", path: "/manager" },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full gradient-hero text-xs font-bold text-primary-foreground flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
