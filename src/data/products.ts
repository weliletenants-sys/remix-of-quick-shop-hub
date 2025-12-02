import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Fresh Milk",
    price: 150,
    category: "Dairy",
    image: "🥛",
    description: "Fresh pasteurized milk, 1 liter",
    unit: "liter"
  },
  {
    id: "2",
    name: "Bread Loaf",
    price: 80,
    category: "Bakery",
    image: "🍞",
    description: "Soft white bread loaf",
    unit: "piece"
  },
  {
    id: "3",
    name: "Eggs",
    price: 450,
    category: "Dairy",
    image: "🥚",
    description: "Farm fresh eggs, tray of 30",
    unit: "tray"
  },
  {
    id: "4",
    name: "Rice",
    price: 280,
    category: "Grains",
    image: "🍚",
    description: "Premium long grain rice, 2kg",
    unit: "2kg"
  },
  {
    id: "5",
    name: "Cooking Oil",
    price: 350,
    category: "Cooking",
    image: "🫒",
    description: "Vegetable cooking oil, 1 liter",
    unit: "liter"
  },
  {
    id: "6",
    name: "Sugar",
    price: 220,
    category: "Cooking",
    image: "🧂",
    description: "White sugar, 1kg pack",
    unit: "kg"
  },
  {
    id: "7",
    name: "Tomatoes",
    price: 100,
    category: "Vegetables",
    image: "🍅",
    description: "Fresh ripe tomatoes, 1kg",
    unit: "kg"
  },
  {
    id: "8",
    name: "Onions",
    price: 120,
    category: "Vegetables",
    image: "🧅",
    description: "Red onions, 1kg",
    unit: "kg"
  },
  {
    id: "9",
    name: "Bananas",
    price: 80,
    category: "Fruits",
    image: "🍌",
    description: "Sweet ripe bananas, bunch",
    unit: "bunch"
  },
  {
    id: "10",
    name: "Chicken",
    price: 800,
    category: "Meat",
    image: "🍗",
    description: "Fresh whole chicken, 1.5kg",
    unit: "piece"
  },
  {
    id: "11",
    name: "Fish (Tilapia)",
    price: 600,
    category: "Seafood",
    image: "🐟",
    description: "Fresh tilapia, 1kg",
    unit: "kg"
  },
  {
    id: "12",
    name: "Maize Flour",
    price: 180,
    category: "Grains",
    image: "🌽",
    description: "Fine maize flour for ugali, 2kg",
    unit: "2kg"
  }
];

export const categories = [...new Set(products.map(p => p.category))];
