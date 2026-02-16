import { useState } from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import ProductCard from "@/components/ProductCard";
import LocationPicker from "@/components/LocationPicker";
import { products, categories } from "@/data/products";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("Kampala Central");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Category emoji map
  const categoryEmoji: Record<string, string> = {
    Dairy: "🥛",
    Bakery: "🍞",
    Grains: "🌾",
    Cooking: "🍳",
    Vegetables: "🥬",
    Fruits: "🍎",
    Meat: "🍗",
    Seafood: "🐟",
    Electronics: "📱",
    Fashion: "👕",
    Jewelry: "💍",
    Beverages: "🥤",
    "Personal Care": "🧴",
    Household: "🏠",
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="container py-5">
        {/* Location Picker */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-bold text-foreground">Deliver to</h1>
          <LocationPicker selected={location} onSelect={setLocation} />
        </div>
        <div className="relative overflow-hidden rounded-2xl gradient-hero p-5 mb-6">
          <div className="relative z-10">
            <p className="text-3xl font-extrabold text-primary-foreground mb-1">
              25% OFF
            </p>
            <p className="text-primary-foreground/80 text-sm mb-3">
              Enjoy Delicious Food & Items
            </p>
            <button className="bg-card text-foreground text-xs font-semibold px-4 py-2 rounded-full shadow-card">
              Shop Now
            </button>
          </div>
          <div className="absolute top-2 right-2 w-20 h-20 rounded-full bg-primary-foreground/10" />
          <div className="absolute bottom-2 right-8 w-12 h-12 rounded-full bg-primary-foreground/10" />
        </div>

        {/* Search */}
        <div className="relative mb-5">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-xl bg-muted/50 border-0 h-11"
          />
        </div>

        {/* Category Icons */}
        <div className="mb-6">
          <h2 className="text-base font-bold text-foreground mb-3">Category</h2>
          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`flex flex-col items-center gap-1 min-w-[60px] ${
                selectedCategory === "All" ? "opacity-100" : "opacity-60"
              }`}
            >
              <div
                className={`h-12 w-12 rounded-2xl flex items-center justify-center text-lg ${
                  selectedCategory === "All"
                    ? "gradient-hero shadow-soft"
                    : "bg-muted"
                }`}
              >
                🛒
              </div>
              <span className="text-[10px] font-medium text-foreground">All</span>
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex flex-col items-center gap-1 min-w-[60px] ${
                  selectedCategory === cat ? "opacity-100" : "opacity-60"
                }`}
              >
                <div
                  className={`h-12 w-12 rounded-2xl flex items-center justify-center text-lg ${
                    selectedCategory === cat
                      ? "gradient-hero shadow-soft"
                      : "bg-muted"
                  }`}
                >
                  {categoryEmoji[cat] || "📦"}
                </div>
                <span className="text-[10px] font-medium text-foreground truncate max-w-[60px]">
                  {cat}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Popular Section */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-foreground">Popular Items</h2>
          <button className="text-xs font-medium text-primary">See all</button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              No items found. Try a different search or category.
            </p>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default Shop;
