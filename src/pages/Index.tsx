import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Clock, Shield, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import deliveryRider from "@/assets/delivery-rider.png";

const Index = () => {
  const features = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Get your items delivered within 30 minutes by our reliable boda riders",
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Order anytime, anywhere. We're always ready to serve you",
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Your items are handled with care and delivered safely",
    },
    {
      icon: MapPin,
      title: "Wide Coverage",
      description: "We deliver across the city to your doorstep",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-background" />
        {/* Background Image */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-30 md:opacity-50 pointer-events-none">
          <img 
            src={deliveryRider} 
            alt="Swift Delivery Rider" 
            className="w-full h-full object-contain object-right"
          />
        </div>
        <div className="container relative py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0 animate-slide-up">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              🚀 Fast & Reliable Delivery
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              Your Everyday Needs,{" "}
              <span className="text-primary">Delivered Fast</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Order groceries, household items, and more from your favorite shops. 
              Our trusted boda riders deliver straight to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="xl" variant="hero">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/shop">
                <Button size="xl" variant="outline">
                  Browse Items
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose SwiftDeliver?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We make ordering and delivery simple, fast, and reliable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-12 w-12 rounded-xl gradient-hero flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl gradient-hero p-8 md:p-12">
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Order?
              </h2>
              <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
                Register now and get your first delivery with priority service
              </p>
              <Link to="/register">
                <Button size="xl" variant="secondary" className="shadow-elevated">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rider CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Are You a Boda Rider?
            </h2>
            <p className="text-muted-foreground mb-6">
              Join our network of riders and earn money delivering orders. 
              Get instant notifications for new deliveries in your area.
            </p>
            <Link to="/rider-register">
              <Button size="lg" variant="outline">
                Register as a Rider
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 SwiftDeliver. Fast, reliable delivery service.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
