import { Home, Heart, ShoppingCart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const BottomNav = () => {
  const location = useLocation();
  const { itemCount } = useCart();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Heart, label: "Favorites", path: "/shop" },
    { icon: ShoppingCart, label: "Cart", path: "/cart", badge: itemCount },
    { icon: User, label: "Profile", path: "/register" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border md:hidden">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className="relative flex flex-col items-center justify-center gap-0.5 flex-1 h-full"
            >
              <div className="relative">
                <item.icon
                  className={`h-5 w-5 transition-colors ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                />
                {item.badge && item.badge > 0 && (
                  <span className="absolute -top-1.5 -right-2.5 h-4 w-4 rounded-full gradient-hero text-[10px] font-bold text-primary-foreground flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </div>
              <span
                className={`text-[10px] font-medium ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
