import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { toast } from "@/hooks/use-toast";
import { 
  Bell, 
  MapPin, 
  Clock, 
  Package, 
  CheckCircle2, 
  XCircle,
  Phone,
  Navigation,
  Wallet,
  TrendingUp
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import WithdrawModal from "@/components/rider/WithdrawModal";
import WithdrawalHistory, { WithdrawalTransaction } from "@/components/rider/WithdrawalHistory";

interface OrderNotification {
  id: string;
  customerName: string;
  customerPhone: string;
  pickupAddress: string;
  deliveryAddress: string;
  items: { name: string; quantity: number }[];
  total: number;
  status: "pending" | "accepted" | "in_progress" | "delivered";
  createdAt: Date;
  distance: string;
  estimatedTime: string;
}

// Mock order notifications
const mockOrders: OrderNotification[] = [
  {
    id: "ORD-001",
    customerName: "Sarah Nakamya",
    customerPhone: "+256 772 123 456",
    pickupAddress: "Nakasero Market, Kampala",
    deliveryAddress: "Kololo, Plot 15 Acacia Avenue",
    items: [
      { name: "Fresh Tomatoes", quantity: 2 },
      { name: "Bananas", quantity: 3 },
      { name: "Rice", quantity: 1 },
    ],
    total: 45000,
    status: "pending",
    createdAt: new Date(Date.now() - 5 * 60 * 1000),
    distance: "4.2 km",
    estimatedTime: "15 mins",
  },
  {
    id: "ORD-002",
    customerName: "James Okello",
    customerPhone: "+256 782 987 654",
    pickupAddress: "Wandegeya Market",
    deliveryAddress: "Makerere University, Hall 3",
    items: [
      { name: "Eggs", quantity: 1 },
      { name: "Bread", quantity: 2 },
    ],
    total: 18000,
    status: "pending",
    createdAt: new Date(Date.now() - 2 * 60 * 1000),
    distance: "2.8 km",
    estimatedTime: "10 mins",
  },
  {
    id: "ORD-003",
    customerName: "Grace Achieng",
    customerPhone: "+256 701 555 888",
    pickupAddress: "Owino Market",
    deliveryAddress: "Ntinda, Ministers Village",
    items: [
      { name: "Vegetables Mix", quantity: 1 },
      { name: "Chicken", quantity: 2 },
    ],
    total: 62000,
    status: "accepted",
    createdAt: new Date(Date.now() - 30 * 60 * 1000),
    distance: "8.5 km",
    estimatedTime: "25 mins",
  },
];

// Mock withdrawal transactions
const mockWithdrawals: WithdrawalTransaction[] = [
  {
    id: "WD-001",
    amount: 15000,
    provider: "mtn",
    phoneNumber: "256 772 456 789",
    status: "completed",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
  },
  {
    id: "WD-002",
    amount: 8500,
    provider: "airtel",
    phoneNumber: "256 701 234 567",
    status: "completed",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
  },
  {
    id: "WD-003",
    amount: 3000,
    provider: "mtn",
    phoneNumber: "256 772 456 789",
    status: "pending",
    createdAt: new Date(Date.now() - 30 * 60 * 1000), // 30 mins ago
  },
];

const RiderDashboard = () => {
  const [orders, setOrders] = useState<OrderNotification[]>(mockOrders);
  const [activeTab, setActiveTab] = useState<"new" | "active" | "completed">("new");
  const [withdrawals] = useState<WithdrawalTransaction[]>(mockWithdrawals);

  const handleAcceptOrder = (orderId: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: "accepted" } : order
    ));
    toast({
      title: "Order Accepted! 🎉",
      description: "Navigate to the pickup location to collect the order.",
    });
  };

  const handleDeclineOrder = (orderId: string) => {
    setOrders(orders.filter(order => order.id !== orderId));
    toast({
      title: "Order Declined",
      description: "The order has been passed to another rider.",
    });
  };

  const handleMarkDelivered = (orderId: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: "delivered" } : order
    ));
    toast({
      title: "Delivery Complete! ✅",
      description: "Great job! Payment will be credited to your account.",
    });
  };

  const formatTime = (date: Date) => {
    const mins = Math.floor((Date.now() - date.getTime()) / 60000);
    if (mins < 1) return "Just now";
    if (mins < 60) return `${mins} min ago`;
    return `${Math.floor(mins / 60)} hr ago`;
  };

  const newOrders = orders.filter(o => o.status === "pending");
  const activeOrders = orders.filter(o => o.status === "accepted" || o.status === "in_progress");
  const completedOrders = orders.filter(o => o.status === "delivered");

  // Calculate commission (5% of each completed delivery)
  const COMMISSION_RATE = 0.05;
  const totalEarnings = completedOrders.reduce((sum, order) => sum + (order.total * COMMISSION_RATE), 0);

  const getDisplayOrders = () => {
    switch (activeTab) {
      case "new": return newOrders;
      case "active": return activeOrders;
      case "completed": return completedOrders;
      default: return [];
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="max-w-2xl mx-auto">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Rider Dashboard
              </h1>
              <p className="text-muted-foreground">
                Manage your deliveries and earnings
              </p>
            </div>
            <div className="relative">
              <Bell className="h-6 w-6 text-muted-foreground" />
              {newOrders.length > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {newOrders.length}
                </span>
              )}
            </div>
          </div>

          {/* Earnings Card */}
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 mb-6 text-primary-foreground shadow-card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Wallet className="h-5 w-5" />
                  <p className="text-sm opacity-90">Your Commission (5%)</p>
                </div>
                <p className="text-3xl font-bold">
                  UGSH {totalEarnings.toLocaleString()}
                </p>
                <p className="text-sm opacity-75 mt-1">
                  From {completedOrders.length} completed {completedOrders.length === 1 ? 'delivery' : 'deliveries'}
                </p>
              </div>
              <div className="h-14 w-14 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <TrendingUp className="h-7 w-7" />
              </div>
            </div>
            <WithdrawModal availableBalance={totalEarnings} />
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-card rounded-xl p-4 shadow-card text-center">
              <p className="text-2xl font-bold text-primary">{newOrders.length}</p>
              <p className="text-sm text-muted-foreground">New Orders</p>
            </div>
            <div className="bg-card rounded-xl p-4 shadow-card text-center">
              <p className="text-2xl font-bold text-secondary">{activeOrders.length}</p>
              <p className="text-sm text-muted-foreground">Active</p>
            </div>
            <div className="bg-card rounded-xl p-4 shadow-card text-center">
              <p className="text-2xl font-bold text-foreground">{completedOrders.length}</p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
          </div>

          {/* Commission Breakdown */}
          {completedOrders.length > 0 && (
            <div className="bg-card rounded-2xl p-5 shadow-card border border-border mb-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Wallet className="h-4 w-4 text-primary" />
                Earnings Breakdown
              </h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order</TableHead>
                    <TableHead>Order Total</TableHead>
                    <TableHead className="text-right">Your Commission (5%)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {completedOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>UGSH {order.total.toLocaleString()}</TableCell>
                      <TableCell className="text-right text-primary font-semibold">
                        UGSH {(order.total * COMMISSION_RATE).toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-muted/50 font-semibold">
                    <TableCell colSpan={2}>Total Earnings</TableCell>
                    <TableCell className="text-right text-primary">
                      UGSH {totalEarnings.toLocaleString()}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          )}

          {/* Withdrawal History */}
          <WithdrawalHistory transactions={withdrawals} />

          {/* Tab Navigation */}
          <div className="flex gap-2 mb-6">
            <Button
              variant={activeTab === "new" ? "default" : "outline"}
              onClick={() => setActiveTab("new")}
              className="flex-1"
            >
              New ({newOrders.length})
            </Button>
            <Button
              variant={activeTab === "active" ? "default" : "outline"}
              onClick={() => setActiveTab("active")}
              className="flex-1"
            >
              Active ({activeOrders.length})
            </Button>
            <Button
              variant={activeTab === "completed" ? "default" : "outline"}
              onClick={() => setActiveTab("completed")}
              className="flex-1"
            >
              Done ({completedOrders.length})
            </Button>
          </div>

          {/* Orders List */}
          <div className="space-y-4">
            {getDisplayOrders().length === 0 ? (
              <div className="bg-card rounded-2xl p-8 shadow-card text-center">
                <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  {activeTab === "new" && "No new orders at the moment"}
                  {activeTab === "active" && "No active deliveries"}
                  {activeTab === "completed" && "No completed deliveries yet"}
                </p>
              </div>
            ) : (
              getDisplayOrders().map((order) => (
                <div 
                  key={order.id} 
                  className="bg-card rounded-2xl p-5 shadow-card border border-border"
                >
                  {/* Order Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground">
                          {order.id}
                        </h3>
                        <Badge 
                          variant={
                            order.status === "pending" ? "default" :
                            order.status === "accepted" ? "secondary" :
                            order.status === "delivered" ? "outline" : "default"
                          }
                        >
                          {order.status === "pending" && "New"}
                          {order.status === "accepted" && "In Progress"}
                          {order.status === "delivered" && "Completed"}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" />
                        {formatTime(order.createdAt)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">UGSH {order.total.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">{order.distance} • {order.estimatedTime}</p>
                    </div>
                  </div>

                  {/* Customer Info */}
                  <div className="flex items-center gap-3 mb-4 p-3 bg-muted/50 rounded-lg">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {order.customerName.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{order.customerName}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        {order.customerPhone}
                      </p>
                    </div>
                  </div>

                  {/* Locations */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin className="h-3 w-3 text-secondary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Pickup</p>
                        <p className="text-sm font-medium text-foreground">{order.pickupAddress}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Navigation className="h-3 w-3 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Deliver to</p>
                        <p className="text-sm font-medium text-foreground">{order.deliveryAddress}</p>
                      </div>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Items</p>
                    <div className="flex flex-wrap gap-2">
                      {order.items.map((item, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {item.quantity}x {item.name}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {order.status === "pending" && (
                    <div className="flex gap-3 pt-4 border-t border-border">
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => handleDeclineOrder(order.id)}
                      >
                        <XCircle className="h-4 w-4 mr-2" />
                        Decline
                      </Button>
                      <Button
                        variant="hero"
                        className="flex-1"
                        onClick={() => handleAcceptOrder(order.id)}
                      >
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        Accept
                      </Button>
                    </div>
                  )}

                  {order.status === "accepted" && (
                    <div className="pt-4 border-t border-border">
                      <Button
                        variant="success"
                        className="w-full"
                        onClick={() => handleMarkDelivered(order.id)}
                      >
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        Mark as Delivered
                      </Button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RiderDashboard;
