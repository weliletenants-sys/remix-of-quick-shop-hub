import { Product } from "@/types";

export const products: Product[] = [
  // Dairy
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
    id: "3",
    name: "Eggs",
    price: 15000,
    category: "Dairy",
    image: "🥚",
    description: "Farm fresh eggs, tray of 30",
    unit: "tray"
  },
  {
    id: "dairy-3",
    name: "Yogurt",
    price: 3500,
    category: "Dairy",
    image: "🥣",
    description: "Fresh flavored yogurt, 500ml",
    unit: "piece"
  },

  // Bakery
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
    id: "bakery-2",
    name: "Chapati",
    price: 1000,
    category: "Bakery",
    image: "🫓",
    description: "Fresh homemade chapati",
    unit: "piece"
  },
  {
    id: "bakery-3",
    name: "Cake Slice",
    price: 8000,
    category: "Bakery",
    image: "🍰",
    description: "Delicious vanilla cake slice",
    unit: "piece"
  },

  // Grains
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
    id: "12",
    name: "Maize Flour",
    price: 6000,
    category: "Grains",
    image: "🌽",
    description: "Fine maize flour for ugali, 2kg",
    unit: "2kg"
  },
  {
    id: "grains-3",
    name: "Beans",
    price: 5000,
    category: "Grains",
    image: "🫘",
    description: "Red kidney beans, 1kg",
    unit: "kg"
  },

  // Cooking
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
    id: "cooking-3",
    name: "Salt",
    price: 1500,
    category: "Cooking",
    image: "🧂",
    description: "Table salt, 500g",
    unit: "pack"
  },

  // Vegetables
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
    id: "veg-3",
    name: "Cabbage",
    price: 3000,
    category: "Vegetables",
    image: "🥬",
    description: "Fresh green cabbage",
    unit: "piece"
  },
  {
    id: "veg-4",
    name: "Carrots",
    price: 3500,
    category: "Vegetables",
    image: "🥕",
    description: "Fresh carrots, 1kg",
    unit: "kg"
  },

  // Fruits
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
    id: "fruits-2",
    name: "Mangoes",
    price: 5000,
    category: "Fruits",
    image: "🥭",
    description: "Fresh sweet mangoes, 3 pieces",
    unit: "pack"
  },
  {
    id: "fruits-3",
    name: "Oranges",
    price: 4000,
    category: "Fruits",
    image: "🍊",
    description: "Juicy oranges, 6 pieces",
    unit: "pack"
  },
  {
    id: "fruits-4",
    name: "Pineapple",
    price: 6000,
    category: "Fruits",
    image: "🍍",
    description: "Fresh whole pineapple",
    unit: "piece"
  },
  {
    id: "fruits-5",
    name: "Watermelon",
    price: 8000,
    category: "Fruits",
    image: "🍉",
    description: "Fresh whole watermelon",
    unit: "piece"
  },

  // Meat
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
    id: "meat-2",
    name: "Beef",
    price: 18000,
    category: "Meat",
    image: "🥩",
    description: "Fresh beef, 1kg",
    unit: "kg"
  },
  {
    id: "meat-3",
    name: "Goat Meat",
    price: 22000,
    category: "Meat",
    image: "🍖",
    description: "Fresh goat meat, 1kg",
    unit: "kg"
  },

  // Seafood
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
    id: "seafood-2",
    name: "Nile Perch",
    price: 25000,
    category: "Seafood",
    image: "🐠",
    description: "Fresh Nile perch fillet, 1kg",
    unit: "kg"
  },

  // Electronics
  {
    id: "elec-1",
    name: "Phone Charger",
    price: 15000,
    category: "Electronics",
    image: "🔌",
    description: "Fast charging USB charger",
    unit: "piece"
  },
  {
    id: "elec-2",
    name: "Earphones",
    price: 25000,
    category: "Electronics",
    image: "🎧",
    description: "Wireless Bluetooth earphones",
    unit: "piece"
  },
  {
    id: "elec-3",
    name: "Power Bank",
    price: 45000,
    category: "Electronics",
    image: "🔋",
    description: "10000mAh portable power bank",
    unit: "piece"
  },
  {
    id: "elec-4",
    name: "LED Bulb",
    price: 8000,
    category: "Electronics",
    image: "💡",
    description: "Energy saving LED bulb",
    unit: "piece"
  },
  {
    id: "elec-5",
    name: "Phone Screen Protector",
    price: 10000,
    category: "Electronics",
    image: "📱",
    description: "Tempered glass screen protector",
    unit: "piece"
  },

  // Fashion
  {
    id: "fashion-1",
    name: "T-Shirt",
    price: 25000,
    category: "Fashion",
    image: "👕",
    description: "Cotton casual T-shirt",
    unit: "piece"
  },
  {
    id: "fashion-2",
    name: "Jeans",
    price: 55000,
    category: "Fashion",
    image: "👖",
    description: "Denim jeans, various sizes",
    unit: "piece"
  },
  {
    id: "fashion-3",
    name: "Sneakers",
    price: 85000,
    category: "Fashion",
    image: "👟",
    description: "Comfortable sports sneakers",
    unit: "pair"
  },
  {
    id: "fashion-4",
    name: "Cap",
    price: 15000,
    category: "Fashion",
    image: "🧢",
    description: "Stylish baseball cap",
    unit: "piece"
  },
  {
    id: "fashion-5",
    name: "Dress",
    price: 65000,
    category: "Fashion",
    image: "👗",
    description: "Elegant casual dress",
    unit: "piece"
  },

  // Jewelry
  {
    id: "jewel-1",
    name: "Gold Earrings",
    price: 120000,
    category: "Jewelry",
    image: "💎",
    description: "Beautiful gold-plated earrings",
    unit: "pair"
  },
  {
    id: "jewel-2",
    name: "Necklace",
    price: 85000,
    category: "Jewelry",
    image: "📿",
    description: "Elegant beaded necklace",
    unit: "piece"
  },
  {
    id: "jewel-3",
    name: "Bracelet",
    price: 35000,
    category: "Jewelry",
    image: "💍",
    description: "Stylish charm bracelet",
    unit: "piece"
  },
  {
    id: "jewel-4",
    name: "Watch",
    price: 150000,
    category: "Jewelry",
    image: "⌚",
    description: "Classic wrist watch",
    unit: "piece"
  },

  // Beverages
  {
    id: "bev-1",
    name: "Soda",
    price: 2500,
    category: "Beverages",
    image: "🥤",
    description: "Chilled soft drink, 500ml",
    unit: "bottle"
  },
  {
    id: "bev-2",
    name: "Bottled Water",
    price: 1500,
    category: "Beverages",
    image: "💧",
    description: "Mineral water, 1 liter",
    unit: "bottle"
  },
  {
    id: "bev-3",
    name: "Juice",
    price: 4500,
    category: "Beverages",
    image: "🧃",
    description: "Fresh fruit juice, 500ml",
    unit: "bottle"
  },
  {
    id: "bev-4",
    name: "Tea Leaves",
    price: 8000,
    category: "Beverages",
    image: "🍵",
    description: "Premium tea leaves, 250g",
    unit: "pack"
  },

  // Personal Care
  {
    id: "care-1",
    name: "Soap",
    price: 3000,
    category: "Personal Care",
    image: "🧼",
    description: "Bath soap, 3 pack",
    unit: "pack"
  },
  {
    id: "care-2",
    name: "Toothpaste",
    price: 5000,
    category: "Personal Care",
    image: "🦷",
    description: "Fluoride toothpaste, 100ml",
    unit: "tube"
  },
  {
    id: "care-3",
    name: "Lotion",
    price: 12000,
    category: "Personal Care",
    image: "🧴",
    description: "Body lotion, 400ml",
    unit: "bottle"
  },
  {
    id: "care-4",
    name: "Shampoo",
    price: 15000,
    category: "Personal Care",
    image: "🧴",
    description: "Hair shampoo, 400ml",
    unit: "bottle"
  },

  // Household
  {
    id: "house-1",
    name: "Detergent",
    price: 8000,
    category: "Household",
    image: "🧹",
    description: "Washing powder, 1kg",
    unit: "pack"
  },
  {
    id: "house-2",
    name: "Toilet Paper",
    price: 6000,
    category: "Household",
    image: "🧻",
    description: "Toilet paper, 4 rolls",
    unit: "pack"
  },
  {
    id: "house-3",
    name: "Matches",
    price: 500,
    category: "Household",
    image: "🔥",
    description: "Safety matches, 3 boxes",
    unit: "pack"
  },
  {
    id: "house-4",
    name: "Candles",
    price: 2000,
    category: "Household",
    image: "🕯️",
    description: "White candles, 6 pack",
    unit: "pack"
  }
];

export const categories = [...new Set(products.map(p => p.category))];
