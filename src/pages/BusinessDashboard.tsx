import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Store, Package, TrendingUp, Clock, Search, CheckCircle, Truck } from "lucide-react";
import { mockBusinesses, mockBusinessOrders, type BusinessOrder } from "@/data/mockBusinessData";

const currentBusiness = mockBusinesses[0]; // Simulating logged-in business

const BusinessDashboard = () => {
  const [search, setSearch] = useState("");

  const businessOrders = mockBusinessOrders.filter((o) => o.businessId === currentBusiness.id);
  const filteredOrders = businessOrders.filter(
    (o) =>
      o.customerName.toLowerCase().includes(search.toLowerCase()) ||
      o.orderId.toLowerCase().includes(search.toLowerCase()) ||
      o.riderName.toLowerCase().includes(search.toLowerCase())
  );

  const totalRevenue = businessOrders.filter((o) => o.status === "delivered").reduce((sum, o) => sum + o.totalAmount, 0);
  const pendingOrders = businessOrders.filter((o) => ["new", "preparing", "ready"].includes(o.status)).length;
  const completedOrders = businessOrders.filter((o) => o.status === "delivered").length;

  const getStatusBadge = (status: BusinessOrder["status"]) => {
    const styles: Record<BusinessOrder["status"], string> = {
      new: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      preparing: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      ready: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      "picked-up": "bg-purple-500/20 text-purple-400 border-purple-500/30",
      delivered: "bg-green-500/20 text-green-400 border-green-500/30",
      cancelled: "bg-red-500/20 text-red-400 border-red-500/30",
    };
    return <Badge variant="outline" className={styles[status]}>{status.replace("-", " ")}</Badge>;
  };

  const handleStatusUpdate = (orderId: string, newStatus: BusinessOrder["status"]) => {
    console.log(`Updating order ${orderId} to ${newStatus}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        {/* Business Info */}
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-hero">
            <Store className="h-7 w-7 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">{currentBusiness.name}</h1>
            <p className="text-muted-foreground">{currentBusiness.category} · {currentBusiness.location}</p>
          </div>
          <Badge variant="outline" className="ml-auto bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
            {currentBusiness.status}
          </Badge>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-border">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Package className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{businessOrders.length}</p>
                  <p className="text-xs text-muted-foreground">Total Orders</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Clock className="h-8 w-8 text-yellow-400" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{pendingOrders}</p>
                  <p className="text-xs text-muted-foreground">Pending</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-8 w-8 text-emerald-400" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{completedOrders}</p>
                  <p className="text-xs text-muted-foreground">Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">UGX {totalRevenue.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Revenue</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Orders */}
        <Tabs defaultValue="all" className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <TabsList>
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <div className="relative max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search orders..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
            </div>
          </div>

          <TabsContent value="all">
            <OrdersTable orders={filteredOrders} getStatusBadge={getStatusBadge} onStatusUpdate={handleStatusUpdate} />
          </TabsContent>
          <TabsContent value="active">
            <OrdersTable
              orders={filteredOrders.filter((o) => ["new", "preparing", "ready", "picked-up"].includes(o.status))}
              getStatusBadge={getStatusBadge}
              onStatusUpdate={handleStatusUpdate}
            />
          </TabsContent>
          <TabsContent value="completed">
            <OrdersTable
              orders={filteredOrders.filter((o) => o.status === "delivered")}
              getStatusBadge={getStatusBadge}
              onStatusUpdate={handleStatusUpdate}
            />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

const OrdersTable = ({
  orders,
  getStatusBadge,
  onStatusUpdate,
}: {
  orders: typeof mockBusinessOrders;
  getStatusBadge: (s: BusinessOrder["status"]) => JSX.Element;
  onStatusUpdate: (id: string, s: BusinessOrder["status"]) => void;
}) => (
  <Card className="border-border">
    <CardHeader>
      <CardTitle className="text-lg">Orders ({orders.length})</CardTitle>
    </CardHeader>
    <CardContent>
      {orders.length === 0 ? (
        <p className="text-center py-8 text-muted-foreground">No orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Rider</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium text-foreground">{order.orderId}</TableCell>
                  <TableCell className="text-foreground">{order.customerName}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {order.items.map((i) => `${i.name} x${i.quantity}`).join(", ")}
                  </TableCell>
                  <TableCell className="text-foreground font-medium">UGX {order.totalAmount.toLocaleString()}</TableCell>
                  <TableCell className="text-foreground">
                    <span className="flex items-center gap-1"><Truck className="h-3 w-3" />{order.riderName}</span>
                  </TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell>
                    {order.status === "new" && (
                      <Button size="sm" variant="outline" onClick={() => onStatusUpdate(order.id, "preparing")}>
                        Start Preparing
                      </Button>
                    )}
                    {order.status === "preparing" && (
                      <Button size="sm" variant="outline" onClick={() => onStatusUpdate(order.id, "ready")}>
                        Mark Ready
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </CardContent>
  </Card>
);

export default BusinessDashboard;
