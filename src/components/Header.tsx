import { ShoppingCart, User, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { itemCount } = useCart();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-hero">
            <Truck className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">SwiftDeliver</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/shop" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Shop
          </Link>
        </nav>

        <div className="flex items-center gap-3">
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
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <User className="h-4 w-4 mr-2" />
              Register
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
