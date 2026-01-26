import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Fresh Milk",
    price: 4500,
    category: "Dairy",
    image: "🥛",
    description: "Fresh pasteurized milk, 1 liter",
    unit: "liter"
  },
  {
    id: "2",
    name: "Bread Loaf",
    price: 5000,
    category: "Bakery",
    image: "🍞",
    description: "Soft white bread loaf",
    unit: "piece"
  },
  {
    id: "3",
    name: "Eggs",
    price: 15000,
    category: "Dairy",
    image: "🥚",
    description: "Farm fresh eggs, tray of 30",
    unit: "tray"
  },
  {
    id: "4",
    name: "Rice",
    price: 8000,
    category: "Grains",
    image: "🍚",
    description: "Premium long grain rice, 2kg",
    unit: "2kg"
  },
  {
    id: "5",
    name: "Cooking Oil",
    price: 12000,
    category: "Cooking",
    image: "🫒",
    description: "Vegetable cooking oil, 1 liter",
    unit: "liter"
  },
  {
    id: "6",
    name: "Sugar",
    price: 5500,
    category: "Cooking",
    image: "🧂",
    description: "White sugar, 1kg pack",
    unit: "kg"
  },
  {
    id: "7",
    name: "Tomatoes",
    price: 4000,
    category: "Vegetables",
    image: "🍅",
    description: "Fresh ripe tomatoes, 1kg",
    unit: "kg"
  },
  {
    id: "8",
    name: "Onions",
    price: 5000,
    category: "Vegetables",
    image: "🧅",
    description: "Red onions, 1kg",
    unit: "kg"
  },
  {
    id: "9",
    name: "Bananas",
    price: 3000,
    category: "Fruits",
    image: "🍌",
    description: "Sweet ripe bananas, bunch",
    unit: "bunch"
  },
  {
    id: "10",
    name: "Chicken",
    price: 25000,
    category: "Meat",
    image: "🍗",
    description: "Fresh whole chicken, 1.5kg",
    unit: "piece"
  },
  {
    id: "11",
    name: "Fish (Tilapia)",
    price: 18000,
    category: "Seafood",
    image: "🐟",
    description: "Fresh tilapia, 1kg",
    unit: "kg"
  },
  {
    id: "12",
    name: "Maize Flour",
    price: 6000,
    category: "Grains",
    image: "🌽",
    description: "Fine maize flour for ugali, 2kg",
    unit: "2kg"
  }
];

export const categories = [...new Set(products.map(p => p.category))];
