import { useCart } from "@/context/CartContext";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, clearCart, total } = useCart();
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const deliveryFee = 100;
  const grandTotal = total + deliveryFee;

  const handlePlaceOrder = () => {
    if (!deliveryAddress.trim()) {
      toast({
        title: "Address Required",
        description: "Please enter your delivery address",
        variant: "destructive",
      });
      return;
    }
    if (!phone.trim()) {
      toast({
        title: "Phone Required",
        description: "Please enter your phone number",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Order Placed! 🎉",
      description: "Your order has been received. A rider will be assigned shortly.",
    });
    clearCart();
    setDeliveryAddress("");
    setPhone("");
    setNotes("");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Your Cart is Empty
            </h1>
            <p className="text-muted-foreground mb-6">
              Browse our shop and add items to your cart
            </p>
            <Link to="/shop">
              <Button variant="hero" size="lg">
                Start Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">Your Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-card rounded-xl p-4 shadow-card flex items-center gap-4"
              >
                <div className="text-4xl">{item.image}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    UGSH {item.price} / {item.unit}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center font-semibold">
                    {item.quantity}
                  </span>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
                <div className="text-right min-w-[80px]">
                  <p className="font-bold text-primary">
                    UGSH {item.price * item.quantity}
                  </p>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-destructive hover:text-destructive"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 shadow-card sticky top-24">
              <h2 className="text-xl font-bold text-foreground mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <Input
                  placeholder="Phone Number *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Input
                  placeholder="Delivery Address *"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                />
                <Textarea
                  placeholder="Delivery notes (optional)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                />
              </div>

              <div className="space-y-3 border-t border-border pt-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>UGSH {total}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Delivery Fee</span>
                  <span>UGSH {deliveryFee}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-foreground pt-3 border-t border-border">
                  <span>Total</span>
                  <span className="text-primary">UGSH {grandTotal}</span>
                </div>
              </div>

              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={handlePlaceOrder}
              >
                Place Order
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Payment on delivery. Your rider will contact you shortly.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
