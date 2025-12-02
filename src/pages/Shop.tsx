import { useState } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import { products, categories } from "@/data/products";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Shop Everyday Items
          </h1>
          <p className="text-muted-foreground">
            Browse our selection of fresh groceries and household essentials
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Categories */}
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No items found. Try a different search or category.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Shop;
