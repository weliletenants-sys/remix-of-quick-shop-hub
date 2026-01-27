import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

interface ProductDetailModalProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductDetailModal = ({ product, open, onOpenChange }: ProductDetailModalProps) => {
  const { addToCart, items, updateQuantity } = useCart();

  if (!product) return null;

  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem?.quantity || 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Large Product Image */}
          <div className="aspect-square w-full overflow-hidden rounded-xl bg-muted/30">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = '/placeholder.svg';
              }}
            />
          </div>

          {/* Category Badge */}
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-accent text-accent-foreground">
            {product.category}
          </span>

          {/* Full Description */}
          <p className="text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div>
              <span className="text-2xl font-bold text-primary">
                UGSH {product.price.toLocaleString()}
              </span>
              <span className="text-sm text-muted-foreground ml-2">
                per {product.unit}
              </span>
            </div>

            {quantity === 0 ? (
              <Button
                variant="hero"
                onClick={() => addToCart(product)}
              >
                <Plus className="h-4 w-4" />
                Add to Cart
              </Button>
            ) : (
              <div className="flex items-center gap-3">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => updateQuantity(product.id, quantity - 1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center font-semibold text-lg">{quantity}</span>
                <Button
                  size="icon"
                  variant="hero"
                  onClick={() => addToCart(product)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
