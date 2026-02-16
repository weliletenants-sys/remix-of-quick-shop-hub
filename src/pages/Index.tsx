import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Clock, Shield, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import groceriesHero from "@/assets/groceries-hero.jpg";

const Index = () => {
  const features = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Get items delivered within 30 minutes",
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Order anytime, we're always ready",
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Items handled with care",
    },
    {
      icon: MapPin,
      title: "Wide Coverage",
      description: "Delivering across the city",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      {/* Hero Section - Orange gradient with grocery image fading on left */}
      <section className="relative overflow-hidden gradient-hero min-h-[400px] md:min-h-[500px]">
        {/* Background image on the left, fading into gradient */}
        <div className="absolute inset-0 w-1/2 md:w-[45%]">
          <img
            src={groceriesHero}
            alt="Fresh groceries"
            className="w-full h-full object-cover"
          />
          {/* Fade overlay from right */}
          <div className="absolute inset-0 bg-gradient-to-l from-[hsl(18,95%,52%)] via-[hsl(18,95%,52%)/0.6] to-transparent" />
        </div>

        <div className="container relative z-10 py-12 md:py-24">
          <div className="ml-auto max-w-lg text-center md:text-right animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight mb-4">
              Fastest Online{" "}
              <span className="text-foreground/90">Food</span>{" "}
              <span className="text-primary-foreground">Delivery</span>{" "}
              Service
            </h1>
            <p className="text-primary-foreground/80 text-base md:text-lg mb-8">
              We are the fastest and most reliable delivery service. Search for your
              favourite food or items in your area.
            </p>
            <Link to="/shop">
              <Button
                size="xl"
                className="rounded-full bg-card text-foreground font-bold hover:bg-card/90 shadow-elevated text-base px-8"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-primary-foreground/10" />
        <div className="absolute bottom-10 right-20 w-20 h-20 rounded-full bg-primary-foreground/10" />
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Why Choose Us?
            </h2>
            <p className="text-muted-foreground text-sm">
              Simple, fast, and reliable delivery
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card p-5 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-12 w-12 rounded-2xl gradient-hero flex items-center justify-center mb-3 mx-auto">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl gradient-hero p-8 md:p-12">
            <div className="relative z-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                Ready to Order?
              </h2>
              <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto text-sm">
                Register now and get your first delivery with priority service
              </p>
              <Link to="/register">
                <Button
                  size="lg"
                  className="rounded-full bg-card text-foreground font-bold hover:bg-card/90 shadow-elevated"
                >
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-primary-foreground/10" />
            <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-primary-foreground/10" />
          </div>
        </div>
      </section>

      {/* Rider CTA */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
              Are You a Boda Rider?
            </h2>
            <p className="text-muted-foreground text-sm mb-5">
              Join our network of riders and earn money delivering orders.
            </p>
            <Link to="/rider-register">
              <Button size="lg" variant="outline" className="rounded-full">
                Register as a Rider
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="container text-center text-xs text-muted-foreground">
          <p>© 2024 SwiftDeliver. Fast, reliable delivery service.</p>
        </div>
      </footer>

      <BottomNav />
    </div>
  );
};

export default Index;
