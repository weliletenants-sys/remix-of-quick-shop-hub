export interface RiderInfo {
  id: string;
  name: string;
  email: string;
  phone: string;
  area: string;
  vehicleReg: string;
  numberPlate: string;
  status: "active" | "inactive" | "suspended";
  totalDeliveries: number;
  totalEarnings: number;
  joinedAt: Date;
}

export interface DeliveryRecord {
  id: string;
  orderId: string;
  riderId: string;
  riderName: string;
  customerName: string;
  customerPhone: string;
  pickupAddress: string;
  deliveryAddress: string;
  items: string[];
  totalAmount: number;
  commission: number;
  status: "pending" | "in-progress" | "delivered" | "cancelled";
  createdAt: Date;
  deliveredAt: Date | null;
}

export const mockRiders: RiderInfo[] = [
  {
    id: "r1",
    name: "Mukasa Brian",
    email: "mukasa.brian@email.com",
    phone: "+256 701 234 567",
    area: "Kampala Central",
    vehicleReg: "UBE 234X",
    numberPlate: "UBE 234X",
    status: "active",
    totalDeliveries: 47,
    totalEarnings: 235000,
    joinedAt: new Date("2025-08-15"),
  },
  {
    id: "r2",
    name: "Nalubega Sarah",
    email: "sarah.nalubega@email.com",
    phone: "+256 772 345 678",
    area: "Ntinda",
    vehicleReg: "UAZ 891M",
    numberPlate: "UAZ 891M",
    status: "active",
    totalDeliveries: 32,
    totalEarnings: 160000,
    joinedAt: new Date("2025-09-02"),
  },
  {
    id: "r3",
    name: "Okello James",
    email: "james.okello@email.com",
    phone: "+256 780 456 789",
    area: "Wandegeya",
    vehicleReg: "UBC 112K",
    numberPlate: "UBC 112K",
    status: "active",
    totalDeliveries: 58,
    totalEarnings: 290000,
    joinedAt: new Date("2025-07-20"),
  },
  {
    id: "r4",
    name: "Nabukenya Grace",
    email: "grace.nabukenya@email.com",
    phone: "+256 704 567 890",
    area: "Kawempe",
    vehicleReg: "UBD 445P",
    numberPlate: "UBD 445P",
    status: "inactive",
    totalDeliveries: 12,
    totalEarnings: 60000,
    joinedAt: new Date("2025-11-10"),
  },
  {
    id: "r5",
    name: "Ssempijja David",
    email: "david.ssempijja@email.com",
    phone: "+256 756 678 901",
    area: "Makindye",
    vehicleReg: "UAE 778R",
    numberPlate: "UAE 778R",
    status: "suspended",
    totalDeliveries: 5,
    totalEarnings: 25000,
    joinedAt: new Date("2025-12-01"),
  },
  {
    id: "r6",
    name: "Apio Rebecca",
    email: "rebecca.apio@email.com",
    phone: "+256 789 123 456",
    area: "Nakawa",
    vehicleReg: "UBF 330T",
    numberPlate: "UBF 330T",
    status: "active",
    totalDeliveries: 23,
    totalEarnings: 115000,
    joinedAt: new Date("2025-10-05"),
  },
];

export const mockDeliveries: DeliveryRecord[] = [
  {
    id: "d1",
    orderId: "ORD-001",
    riderId: "r1",
    riderName: "Mukasa Brian",
    customerName: "John Kato",
    customerPhone: "+256 700 111 222",
    pickupAddress: "Owino Market, Kampala",
    deliveryAddress: "Plot 12, Buganda Rd, Kampala",
    items: ["Fresh Milk (2L)", "White Bread", "Eggs (tray)"],
    totalAmount: 45000,
    commission: 2250,
    status: "delivered",
    createdAt: new Date("2026-02-08T09:30:00"),
    deliveredAt: new Date("2026-02-08T10:15:00"),
  },
  {
    id: "d2",
    orderId: "ORD-002",
    riderId: "r3",
    riderName: "Okello James",
    customerName: "Mary Namukasa",
    customerPhone: "+256 772 333 444",
    pickupAddress: "Nakasero Market",
    deliveryAddress: "Ntinda Shopping Centre",
    items: ["Phone Charger", "Earphones"],
    totalAmount: 35000,
    commission: 1750,
    status: "delivered",
    createdAt: new Date("2026-02-08T11:00:00"),
    deliveredAt: new Date("2026-02-08T11:45:00"),
  },
  {
    id: "d3",
    orderId: "ORD-003",
    riderId: "r2",
    riderName: "Nalubega Sarah",
    customerName: "Peter Ochieng",
    customerPhone: "+256 780 555 666",
    pickupAddress: "Kalerwe Market",
    deliveryAddress: "Wandegeya, Makerere",
    items: ["Tomatoes (5kg)", "Onions (3kg)", "Cooking Oil (1L)"],
    totalAmount: 52000,
    commission: 2600,
    status: "in-progress",
    createdAt: new Date("2026-02-09T08:00:00"),
    deliveredAt: null,
  },
  {
    id: "d4",
    orderId: "ORD-004",
    riderId: "r6",
    riderName: "Apio Rebecca",
    customerName: "Fatima Nanteza",
    customerPhone: "+256 704 777 888",
    pickupAddress: "Kibuye Market",
    deliveryAddress: "Makindye, Tank Hill Rd",
    items: ["Gold Earrings", "Necklace"],
    totalAmount: 250000,
    commission: 12500,
    status: "delivered",
    createdAt: new Date("2026-02-07T14:00:00"),
    deliveredAt: new Date("2026-02-07T15:20:00"),
  },
  {
    id: "d5",
    orderId: "ORD-005",
    riderId: "r1",
    riderName: "Mukasa Brian",
    customerName: "Alex Tumusiime",
    customerPhone: "+256 756 999 000",
    pickupAddress: "Nakawa Market",
    deliveryAddress: "Bugolobi, Spring Rd",
    items: ["Rice (5kg)", "Beans (2kg)", "Sugar (1kg)"],
    totalAmount: 68000,
    commission: 3400,
    status: "pending",
    createdAt: new Date("2026-02-09T09:30:00"),
    deliveredAt: null,
  },
  {
    id: "d6",
    orderId: "ORD-006",
    riderId: "r3",
    riderName: "Okello James",
    customerName: "Diana Achieng",
    customerPhone: "+256 789 222 333",
    pickupAddress: "Kisekka Market",
    deliveryAddress: "Kololo, Acacia Ave",
    items: ["T-Shirt", "Jeans"],
    totalAmount: 85000,
    commission: 4250,
    status: "delivered",
    createdAt: new Date("2026-02-06T16:00:00"),
    deliveredAt: new Date("2026-02-06T17:10:00"),
  },
  {
    id: "d7",
    orderId: "ORD-007",
    riderId: "r2",
    riderName: "Nalubega Sarah",
    customerName: "Samuel Wabwire",
    customerPhone: "+256 701 444 555",
    pickupAddress: "Owino Market",
    deliveryAddress: "Kawempe, Bombo Rd",
    items: ["Chapati Flour (2kg)", "Margarine", "Tea Leaves"],
    totalAmount: 28000,
    commission: 1400,
    status: "cancelled",
    createdAt: new Date("2026-02-05T10:00:00"),
    deliveredAt: null,
  },
];
