import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, items, updateQuantity } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem?.quantity || 0;

  const handleAdd = () => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 200);
  };

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-32 md:h-40 bg-muted/30 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg";
          }}
        />
      </div>

      {/* Content */}
      <div className="p-3 md:p-4">
        <h3 className="font-semibold text-foreground text-sm line-clamp-1 mb-0.5">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-1 mb-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-base font-bold text-primary">
            UGSH {product.price.toLocaleString()}
          </span>

          {quantity === 0 ? (
            <Button
              size="sm"
              onClick={handleAdd}
              className={`rounded-full h-8 px-3 text-xs gradient-hero text-primary-foreground border-0 transition-transform ${
                isAdding ? "scale-95" : ""
              }`}
            >
              <Plus className="h-3.5 w-3.5 mr-1" />
              Add
            </Button>
          ) : (
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => updateQuantity(product.id, quantity - 1)}
                className="h-7 w-7 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors"
              >
                <Minus className="h-3 w-3" />
              </button>
              <span className="w-5 text-center text-sm font-semibold">
                {quantity}
              </span>
              <button
                onClick={() => addToCart(product)}
                className="h-7 w-7 rounded-full gradient-hero flex items-center justify-center text-primary-foreground"
              >
                <Plus className="h-3 w-3" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
