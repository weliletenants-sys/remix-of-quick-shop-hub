import { Product } from "@/types";

export const products: Product[] = [
  // Dairy
  {
    id: "1",
    name: "Fresh Milk",
    price: 4500,
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop",
    description: "Fresh pasteurized milk, 1 liter",
    unit: "liter"
  },
  {
    id: "3",
    name: "Eggs",
    price: 15000,
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=300&fit=crop",
    description: "Farm fresh eggs, tray of 30",
    unit: "tray"
  },
  {
    id: "dairy-3",
    name: "Yogurt",
    price: 3500,
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
    description: "Fresh flavored yogurt, 500ml",
    unit: "piece"
  },

  // Bakery
  {
    id: "2",
    name: "Bread Loaf",
    price: 5000,
    category: "Bakery",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop",
    description: "Soft white bread loaf",
    unit: "piece"
  },
  {
    id: "bakery-2",
    name: "Chapati",
    price: 1000,
    category: "Bakery",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    description: "Fresh homemade chapati",
    unit: "piece"
  },
  {
    id: "bakery-3",
    name: "Cake Slice",
    price: 8000,
    category: "Bakery",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    description: "Delicious vanilla cake slice",
    unit: "piece"
  },

  // Grains
  {
    id: "4",
    name: "Rice",
    price: 8000,
    category: "Grains",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
    description: "Premium long grain rice, 2kg",
    unit: "2kg"
  },
  {
    id: "12",
    name: "Maize Flour",
    price: 6000,
    category: "Grains",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop",
    description: "Fine maize flour for ugali, 2kg",
    unit: "2kg"
  },
  {
    id: "grains-3",
    name: "Beans",
    price: 5000,
    category: "Grains",
    image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=400&h=300&fit=crop",
    description: "Red kidney beans, 1kg",
    unit: "kg"
  },

  // Cooking
  {
    id: "5",
    name: "Cooking Oil",
    price: 12000,
    category: "Cooking",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=300&fit=crop",
    description: "Vegetable cooking oil, 1 liter",
    unit: "liter"
  },
  {
    id: "6",
    name: "Sugar",
    price: 5500,
    category: "Cooking",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=300&fit=crop",
    description: "White sugar, 1kg pack",
    unit: "kg"
  },
  {
    id: "cooking-3",
    name: "Salt",
    price: 1500,
    category: "Cooking",
    image: "https://images.unsplash.com/photo-1518110925495-5fe2e86e0f40?w=400&h=300&fit=crop",
    description: "Table salt, 500g",
    unit: "pack"
  },

  // Vegetables
  {
    id: "7",
    name: "Tomatoes",
    price: 4000,
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1546470427-227c7369a9b9?w=400&h=300&fit=crop",
    description: "Fresh ripe tomatoes, 1kg",
    unit: "kg"
  },
  {
    id: "8",
    name: "Onions",
    price: 5000,
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400&h=300&fit=crop",
    description: "Red onions, 1kg",
    unit: "kg"
  },
  {
    id: "veg-3",
    name: "Cabbage",
    price: 3000,
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=400&h=300&fit=crop",
    description: "Fresh green cabbage",
    unit: "piece"
  },
  {
    id: "veg-4",
    name: "Carrots",
    price: 3500,
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop",
    description: "Fresh carrots, 1kg",
    unit: "kg"
  },

  // Fruits
  {
    id: "9",
    name: "Bananas",
    price: 3000,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop",
    description: "Sweet ripe bananas, bunch",
    unit: "bunch"
  },
  {
    id: "fruits-2",
    name: "Mangoes",
    price: 5000,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=300&fit=crop",
    description: "Fresh sweet mangoes, 3 pieces",
    unit: "pack"
  },
  {
    id: "fruits-3",
    name: "Oranges",
    price: 4000,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=300&fit=crop",
    description: "Juicy oranges, 6 pieces",
    unit: "pack"
  },
  {
    id: "fruits-4",
    name: "Pineapple",
    price: 6000,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&h=300&fit=crop",
    description: "Fresh whole pineapple",
    unit: "piece"
  },
  {
    id: "fruits-5",
    name: "Watermelon",
    price: 8000,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=400&h=300&fit=crop",
    description: "Fresh whole watermelon",
    unit: "piece"
  },

  // Meat
  {
    id: "10",
    name: "Chicken",
    price: 25000,
    category: "Meat",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop",
    description: "Fresh whole chicken, 1.5kg",
    unit: "piece"
  },
  {
    id: "meat-2",
    name: "Beef",
    price: 18000,
    category: "Meat",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=400&h=300&fit=crop",
    description: "Fresh beef, 1kg",
    unit: "kg"
  },
  {
    id: "meat-3",
    name: "Goat Meat",
    price: 22000,
    category: "Meat",
    image: "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=400&h=300&fit=crop",
    description: "Fresh goat meat, 1kg",
    unit: "kg"
  },

  // Seafood
  {
    id: "11",
    name: "Fish (Tilapia)",
    price: 18000,
    category: "Seafood",
    image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400&h=300&fit=crop",
    description: "Fresh tilapia, 1kg",
    unit: "kg"
  },
  {
    id: "seafood-2",
    name: "Nile Perch",
    price: 25000,
    category: "Seafood",
    image: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=400&h=300&fit=crop",
    description: "Fresh Nile perch fillet, 1kg",
    unit: "kg"
  },

  // Electronics
  {
    id: "elec-1",
    name: "Phone Charger",
    price: 15000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=300&fit=crop",
    description: "Fast charging USB charger",
    unit: "piece"
  },
  {
    id: "elec-2",
    name: "Earphones",
    price: 25000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop",
    description: "Wireless Bluetooth earphones",
    unit: "piece"
  },
  {
    id: "elec-3",
    name: "Power Bank",
    price: 45000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop",
    description: "10000mAh portable power bank",
    unit: "piece"
  },
  {
    id: "elec-4",
    name: "LED Bulb",
    price: 8000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1532007812255-3d83fbf43e9f?w=400&h=300&fit=crop",
    description: "Energy saving LED bulb",
    unit: "piece"
  },
  {
    id: "elec-5",
    name: "Phone Screen Protector",
    price: 10000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=300&fit=crop",
    description: "Tempered glass screen protector",
    unit: "piece"
  },

  // Fashion
  {
    id: "fashion-1",
    name: "T-Shirt",
    price: 25000,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    description: "Cotton casual T-shirt",
    unit: "piece"
  },
  {
    id: "fashion-2",
    name: "Jeans",
    price: 55000,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop",
    description: "Denim jeans, various sizes",
    unit: "piece"
  },
  {
    id: "fashion-3",
    name: "Sneakers",
    price: 85000,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    description: "Comfortable sports sneakers",
    unit: "pair"
  },
  {
    id: "fashion-4",
    name: "Cap",
    price: 15000,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=300&fit=crop",
    description: "Stylish baseball cap",
    unit: "piece"
  },
  {
    id: "fashion-5",
    name: "Dress",
    price: 65000,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop",
    description: "Elegant casual dress",
    unit: "piece"
  },

  // Jewelry
  {
    id: "jewel-1",
    name: "Gold Earrings",
    price: 120000,
    category: "Jewelry",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop",
    description: "Beautiful gold-plated earrings",
    unit: "pair"
  },
  {
    id: "jewel-2",
    name: "Necklace",
    price: 85000,
    category: "Jewelry",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop",
    description: "Elegant beaded necklace",
    unit: "piece"
  },
  {
    id: "jewel-3",
    name: "Bracelet",
    price: 35000,
    category: "Jewelry",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=300&fit=crop",
    description: "Stylish charm bracelet",
    unit: "piece"
  },
  {
    id: "jewel-4",
    name: "Watch",
    price: 150000,
    category: "Jewelry",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=300&fit=crop",
    description: "Classic wrist watch",
    unit: "piece"
  },

  // Beverages
  {
    id: "bev-1",
    name: "Soda",
    price: 2500,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop",
    description: "Chilled soft drink, 500ml",
    unit: "bottle"
  },
  {
    id: "bev-2",
    name: "Bottled Water",
    price: 1500,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop",
    description: "Mineral water, 1 liter",
    unit: "bottle"
  },
  {
    id: "bev-3",
    name: "Juice",
    price: 4500,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=400&h=300&fit=crop",
    description: "Fresh fruit juice, 500ml",
    unit: "bottle"
  },
  {
    id: "bev-4",
    name: "Tea Leaves",
    price: 8000,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=300&fit=crop",
    description: "Premium tea leaves, 250g",
    unit: "pack"
  },

  // Personal Care
  {
    id: "care-1",
    name: "Soap",
    price: 3000,
    category: "Personal Care",
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400&h=300&fit=crop",
    description: "Bath soap, 3 pack",
    unit: "pack"
  },
  {
    id: "care-2",
    name: "Toothpaste",
    price: 5000,
    category: "Personal Care",
    image: "https://images.unsplash.com/photo-1628359355624-855c71a4b5bd?w=400&h=300&fit=crop",
    description: "Fluoride toothpaste, 100ml",
    unit: "tube"
  },
  {
    id: "care-3",
    name: "Lotion",
    price: 12000,
    category: "Personal Care",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=300&fit=crop",
    description: "Body lotion, 400ml",
    unit: "bottle"
  },
  {
    id: "care-4",
    name: "Shampoo",
    price: 15000,
    category: "Personal Care",
    image: "https://images.unsplash.com/photo-1585232351009-aa56aa9e0a3a?w=400&h=300&fit=crop",
    description: "Hair shampoo, 400ml",
    unit: "bottle"
  },

  // Household
  {
    id: "house-1",
    name: "Detergent",
    price: 8000,
    category: "Household",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&h=300&fit=crop",
    description: "Washing powder, 1kg",
    unit: "pack"
  },
  {
    id: "house-2",
    name: "Toilet Paper",
    price: 6000,
    category: "Household",
    image: "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=400&h=300&fit=crop",
    description: "Toilet paper, 4 rolls",
    unit: "pack"
  },
  {
    id: "house-3",
    name: "Matches",
    price: 500,
    category: "Household",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    description: "Safety matches, 3 boxes",
    unit: "pack"
  },
  {
    id: "house-4",
    name: "Candles",
    price: 2000,
    category: "Household",
    image: "https://images.unsplash.com/photo-1602523961358-f9f03dd557db?w=400&h=300&fit=crop",
    description: "White candles, 6 pack",
    unit: "pack"
  }
];

export const categories = [...new Set(products.map(p => p.category))];
