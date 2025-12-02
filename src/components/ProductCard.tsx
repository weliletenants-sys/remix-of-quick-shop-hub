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
    <div className="group relative bg-card rounded-2xl p-4 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-24 mb-3 text-5xl">
          {product.image}
        </div>
        
        <div className="flex-1">
          <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-accent text-accent-foreground mb-2">
            {product.category}
          </span>
          <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
          <div>
            <span className="text-lg font-bold text-primary">
              KSH {product.price}
            </span>
            <span className="text-xs text-muted-foreground ml-1">
              /{product.unit}
            </span>
          </div>

          {quantity === 0 ? (
            <Button
              size="sm"
              variant="hero"
              onClick={handleAdd}
              className={`transition-transform ${isAdding ? "scale-95" : ""}`}
            >
              <Plus className="h-4 w-4" />
              Add
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8"
                onClick={() => updateQuantity(product.id, quantity - 1)}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="w-6 text-center font-semibold">{quantity}</span>
              <Button
                size="icon"
                variant="hero"
                className="h-8 w-8"
                onClick={() => addToCart(product)}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
