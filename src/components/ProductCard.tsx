import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import ProductDetailModal from "./ProductDetailModal";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, items, updateQuantity } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem?.quantity || 0;

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 200);
  };

  const handleQuantityChange = (e: React.MouseEvent, newQuantity: number) => {
    e.stopPropagation();
    if (newQuantity <= 0) {
      updateQuantity(product.id, 0);
    } else {
      updateQuantity(product.id, newQuantity);
    }
  };

  const handleAddMore = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <>
      <div 
        className="group relative bg-card rounded-2xl p-4 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-24 mb-3 overflow-hidden rounded-lg bg-muted/30">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = '/placeholder.svg';
              }}
            />
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
                UGSH {product.price.toLocaleString()}
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
                  onClick={(e) => handleQuantityChange(e, quantity - 1)}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-6 text-center font-semibold">{quantity}</span>
                <Button
                  size="icon"
                  variant="hero"
                  className="h-8 w-8"
                  onClick={handleAddMore}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <ProductDetailModal
        product={product}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  );
};

export default ProductCard;
