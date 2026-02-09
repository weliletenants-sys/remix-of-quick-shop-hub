import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { businessCategories } from "@/data/mockBusinessData";

const BusinessRegister = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    category: "",
    location: "",
    description: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { businessName, ownerName, email, phone, category, location } = formData;
    if (!businessName || !ownerName || !email || !phone || !category || !location) {
      toast({ title: "Missing fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    toast({ title: "Registration Submitted!", description: `${businessName} has been registered. You'll be redirected to your dashboard.` });
    setTimeout(() => navigate("/business-dashboard"), 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8 max-w-2xl">
        <Card className="border-border">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl gradient-hero">
              <Store className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Register Your Business</CardTitle>
            <CardDescription>
              Join SwiftDeliver as a partner shop and reach more customers through our rider network
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name *</Label>
                  <Input id="businessName" placeholder="e.g. Nakasero Fresh Market" value={formData.businessName} onChange={(e) => handleChange("businessName", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ownerName">Owner Full Name *</Label>
                  <Input id="ownerName" placeholder="e.g. Josephine Akello" value={formData.ownerName} onChange={(e) => handleChange("ownerName", e.target.value)} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="you@business.com" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="+256 7XX XXX XXX" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Business Category *</Label>
                  <Select value={formData.category} onValueChange={(val) => handleChange("category", val)}>
                    <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                    <SelectContent>
                      {businessCategories.map((cat) => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location / Address *</Label>
                  <Input id="location" placeholder="e.g. Nakasero Market, Kampala" value={formData.location} onChange={(e) => handleChange("location", e.target.value)} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Business Description</Label>
                <Textarea id="description" placeholder="Tell customers what you sell..." rows={3} value={formData.description} onChange={(e) => handleChange("description", e.target.value)} />
              </div>

              <Button type="submit" className="w-full gradient-hero text-primary-foreground" size="lg">
                Register Business <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default BusinessRegister;
