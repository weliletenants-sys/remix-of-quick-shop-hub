import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, MapPin, Lock, ArrowRight, Bike, FileText } from "lucide-react";

const RiderRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    numberPlate: "",
    vehicleRegistration: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.location) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Weak Password",
        description: "Password must be at least 6 characters",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate registration
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Registration Successful! 🎉",
      description: "Welcome to SwiftDeliver Riders. You'll receive order notifications soon!",
    });
    
    setIsLoading(false);
    navigate("/rider-dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="max-w-md mx-auto">
          {/* Returning Rider Banner */}
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-5 mb-6 text-primary-foreground shadow-card">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                <User className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">Already a Rider?</h3>
                <p className="text-sm opacity-90">Go straight to your dashboard — no need to register again!</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full mt-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => navigate("/rider-dashboard")}
            >
              <ArrowRight className="h-4 w-4 mr-2" />
              Open My Dashboard
            </Button>
          </div>

          <div className="text-center mb-8">
            <div className="h-16 w-16 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-4">
              <Bike className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              New Rider? Register Here
            </h1>
            <p className="text-muted-foreground">
              Join SwiftDeliver and start earning with deliveries
            </p>
            <div className="mt-4 bg-primary/10 border border-primary/20 rounded-lg p-3">
              <p className="text-sm text-primary font-medium">
                ✓ One-time registration — sign up once, deliver forever!
              </p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+256 712 345 678"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Operating Area</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="location"
                    name="location"
                    placeholder="e.g., Kampala Central"
                    value={formData.location}
                    onChange={handleChange}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="numberPlate">Number Plate</Label>
                <div className="relative">
                  <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="numberPlate"
                    name="numberPlate"
                    placeholder="e.g., UAA 123B"
                    value={formData.numberPlate}
                    onChange={handleChange}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="vehicleRegistration">Vehicle Registration</Label>
                <div className="relative">
                  <Bike className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="vehicleRegistration"
                    name="vehicleRegistration"
                    placeholder="e.g., UBA 123A"
                    value={formData.vehicleRegistration}
                    onChange={handleChange}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="pl-10"
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Creating Account..."
                ) : (
                  <>
                    Register as Rider
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            <p className="text-sm text-muted-foreground text-center mt-6">
              Already registered?{" "}
              <button 
                type="button"
                onClick={() => navigate("/rider-dashboard")}
                className="text-primary font-medium hover:underline"
              >
                Go to Dashboard
              </button>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RiderRegister;
