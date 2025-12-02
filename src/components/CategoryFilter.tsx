import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

const CategoryFilter = ({ categories, selected, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Button
        variant={selected === "All" ? "hero" : "ghost"}
        size="sm"
        onClick={() => onSelect("All")}
        className="rounded-full"
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selected === category ? "hero" : "ghost"}
          size="sm"
          onClick={() => onSelect(category)}
          className="rounded-full"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
