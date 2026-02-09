export interface Business {
  id: string;
  name: string;
  ownerName: string;
  email: string;
  phone: string;
  category: string;
  location: string;
  description: string;
  status: "active" | "pending" | "suspended";
  registeredAt: Date;
}

export interface BusinessOrder {
  id: string;
  orderId: string;
  businessId: string;
  riderId: string;
  riderName: string;
  customerName: string;
  items: { name: string; quantity: number; price: number }[];
  totalAmount: number;
  status: "new" | "preparing" | "ready" | "picked-up" | "delivered" | "cancelled";
  createdAt: Date;
  pickedUpAt: Date | null;
}

export const businessCategories = [
  "Grocery & Fresh Produce",
  "Electronics & Gadgets",
  "Fashion & Clothing",
  "Pharmacy & Health",
  "Restaurant & Food",
  "Hardware & Tools",
  "Beauty & Personal Care",
  "Stationery & Office",
  "Other",
];

export const mockBusinesses: Business[] = [
  {
    id: "b1",
    name: "Nakasero Fresh Market",
    ownerName: "Josephine Akello",
    email: "josephine@nakaserofresh.com",
    phone: "+256 700 123 456",
    category: "Grocery & Fresh Produce",
    location: "Nakasero Market, Kampala",
    description: "Fresh fruits, vegetables, and groceries sourced daily from local farmers.",
    status: "active",
    registeredAt: new Date("2025-06-10"),
  },
  {
    id: "b2",
    name: "TechHub Electronics",
    ownerName: "Ronald Ssempa",
    email: "ronald@techhub.ug",
    phone: "+256 772 234 567",
    category: "Electronics & Gadgets",
    location: "Kisekka Market, Kampala",
    description: "Affordable phones, chargers, earphones, and electronic accessories.",
    status: "active",
    registeredAt: new Date("2025-07-22"),
  },
  {
    id: "b3",
    name: "Mama Grace Kitchen",
    ownerName: "Grace Nambi",
    email: "grace@mamagrace.com",
    phone: "+256 780 345 678",
    category: "Restaurant & Food",
    location: "Wandegeya, Kampala",
    description: "Authentic Ugandan dishes prepared fresh and ready for delivery.",
    status: "active",
    registeredAt: new Date("2025-08-05"),
  },
  {
    id: "b4",
    name: "Style Avenue Boutique",
    ownerName: "Fatima Nansamba",
    email: "fatima@styleavenue.ug",
    phone: "+256 704 456 789",
    category: "Fashion & Clothing",
    location: "Kalerwe, Kampala",
    description: "Trendy and affordable fashion for men, women, and children.",
    status: "pending",
    registeredAt: new Date("2026-01-15"),
  },
];

export const mockBusinessOrders: BusinessOrder[] = [
  {
    id: "bo1",
    orderId: "ORD-001",
    businessId: "b1",
    riderId: "r1",
    riderName: "Mukasa Brian",
    customerName: "John Kato",
    items: [
      { name: "Fresh Milk (2L)", quantity: 1, price: 8000 },
      { name: "White Bread", quantity: 2, price: 7000 },
      { name: "Eggs (tray)", quantity: 1, price: 15000 },
    ],
    totalAmount: 37000,
    status: "delivered",
    createdAt: new Date("2026-02-08T09:30:00"),
    pickedUpAt: new Date("2026-02-08T09:50:00"),
  },
  {
    id: "bo2",
    orderId: "ORD-008",
    businessId: "b1",
    riderId: "r2",
    riderName: "Nalubega Sarah",
    customerName: "Peter Ochieng",
    items: [
      { name: "Tomatoes (5kg)", quantity: 1, price: 20000 },
      { name: "Onions (3kg)", quantity: 1, price: 12000 },
      { name: "Cooking Oil (1L)", quantity: 1, price: 15000 },
    ],
    totalAmount: 47000,
    status: "preparing",
    createdAt: new Date("2026-02-09T08:00:00"),
    pickedUpAt: null,
  },
  {
    id: "bo3",
    orderId: "ORD-009",
    businessId: "b2",
    riderId: "r3",
    riderName: "Okello James",
    customerName: "Mary Namukasa",
    items: [
      { name: "Phone Charger", quantity: 1, price: 15000 },
      { name: "Earphones", quantity: 1, price: 20000 },
    ],
    totalAmount: 35000,
    status: "picked-up",
    createdAt: new Date("2026-02-08T11:00:00"),
    pickedUpAt: new Date("2026-02-08T11:20:00"),
  },
  {
    id: "bo4",
    orderId: "ORD-010",
    businessId: "b3",
    riderId: "r6",
    riderName: "Apio Rebecca",
    customerName: "Samuel Wabwire",
    items: [
      { name: "Rolex (2pcs)", quantity: 2, price: 8000 },
      { name: "Chapati (5pcs)", quantity: 1, price: 5000 },
    ],
    totalAmount: 21000,
    status: "new",
    createdAt: new Date("2026-02-09T10:15:00"),
    pickedUpAt: null,
  },
  {
    id: "bo5",
    orderId: "ORD-011",
    businessId: "b1",
    riderId: "r1",
    riderName: "Mukasa Brian",
    customerName: "Alex Tumusiime",
    items: [
      { name: "Rice (5kg)", quantity: 1, price: 25000 },
      { name: "Beans (2kg)", quantity: 1, price: 10000 },
      { name: "Sugar (1kg)", quantity: 1, price: 8000 },
    ],
    totalAmount: 43000,
    status: "ready",
    createdAt: new Date("2026-02-09T09:30:00"),
    pickedUpAt: null,
  },
];
