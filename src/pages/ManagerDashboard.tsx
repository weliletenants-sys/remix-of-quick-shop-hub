import { useState } from "react";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Users, Package, TrendingUp, DollarSign, Search, Bike, MapPin, Phone, Mail, Calendar,
} from "lucide-react";
import { mockRiders, mockDeliveries } from "@/data/mockManagerData";

const ManagerDashboard = () => {
  const [riderSearch, setRiderSearch] = useState("");
  const [deliverySearch, setDeliverySearch] = useState("");

  const totalRevenue = mockDeliveries
    .filter((d) => d.status === "delivered")
    .reduce((sum, d) => sum + d.totalAmount, 0);
  const totalCommissions = mockDeliveries
    .filter((d) => d.status === "delivered")
    .reduce((sum, d) => sum + d.commission, 0);
  const activeRiders = mockRiders.filter((r) => r.status === "active").length;
  const completedDeliveries = mockDeliveries.filter((d) => d.status === "delivered").length;

  const filteredRiders = mockRiders.filter(
    (r) =>
      r.name.toLowerCase().includes(riderSearch.toLowerCase()) ||
      r.area.toLowerCase().includes(riderSearch.toLowerCase()) ||
      r.phone.includes(riderSearch)
  );

  const filteredDeliveries = mockDeliveries.filter(
    (d) =>
      d.riderName.toLowerCase().includes(deliverySearch.toLowerCase()) ||
      d.customerName.toLowerCase().includes(deliverySearch.toLowerCase()) ||
      d.orderId.toLowerCase().includes(deliverySearch.toLowerCase())
  );

  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat("en-UG", {
      day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit",
    }).format(date);

  const statusBadge = (status: string) => {
    const map: Record<string, string> = {
      active: "bg-green-500/10 text-green-600 border-green-500/30",
      inactive: "bg-yellow-500/10 text-yellow-600 border-yellow-500/30",
      suspended: "bg-red-500/10 text-red-600 border-red-500/30",
      delivered: "bg-green-500/10 text-green-600 border-green-500/30",
      "in-progress": "bg-blue-500/10 text-blue-600 border-blue-500/30",
      pending: "bg-yellow-500/10 text-yellow-600 border-yellow-500/30",
      cancelled: "bg-red-500/10 text-red-600 border-red-500/30",
    };
    return (
      <Badge variant="outline" className={map[status] || ""}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Manager Dashboard</h1>
          <p className="text-muted-foreground mt-1">Overview of all riders and deliveries</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total Riders", value: mockRiders.length, icon: Users, color: "text-primary" },
            { label: "Active Riders", value: activeRiders, icon: Bike, color: "text-green-600" },
            { label: "Deliveries Made", value: completedDeliveries, icon: Package, color: "text-blue-600" },
            { label: "Total Revenue", value: `UGSH ${totalRevenue.toLocaleString()}`, icon: TrendingUp, color: "text-amber-600" },
          ].map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="text-lg font-bold text-foreground">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="riders" className="space-y-4">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="riders">
              <Users className="h-4 w-4 mr-2" /> Riders ({mockRiders.length})
            </TabsTrigger>
            <TabsTrigger value="deliveries">
              <Package className="h-4 w-4 mr-2" /> Deliveries ({mockDeliveries.length})
            </TabsTrigger>
          </TabsList>

          {/* Riders Tab */}
          <TabsContent value="riders" className="space-y-4">
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search riders..."
                value={riderSearch}
                onChange={(e) => setRiderSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <Card>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Rider</TableHead>
                      <TableHead className="hidden md:table-cell">Contact</TableHead>
                      <TableHead className="hidden sm:table-cell">Area</TableHead>
                      <TableHead className="hidden lg:table-cell">Vehicle</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Deliveries</TableHead>
                      <TableHead className="text-right hidden sm:table-cell">Earnings</TableHead>
                      <TableHead className="hidden lg:table-cell">Joined</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRiders.map((rider) => (
                      <TableRow key={rider.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="text-xs font-bold text-primary">
                                {rider.name.split(" ").map((n) => n[0]).join("")}
                              </span>
                            </div>
                            <span className="font-medium text-foreground">{rider.name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <div className="space-y-1 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1"><Phone className="h-3 w-3" />{rider.phone}</div>
                            <div className="flex items-center gap-1"><Mail className="h-3 w-3" />{rider.email}</div>
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <div className="flex items-center gap-1 text-sm">
                            <MapPin className="h-3 w-3 text-muted-foreground" /> {rider.area}
                          </div>
                        </TableCell>
                        <TableCell className="hidden lg:table-cell text-sm">{rider.numberPlate}</TableCell>
                        <TableCell>{statusBadge(rider.status)}</TableCell>
                        <TableCell className="text-right font-medium">{rider.totalDeliveries}</TableCell>
                        <TableCell className="text-right hidden sm:table-cell font-medium">
                          UGSH {rider.totalEarnings.toLocaleString()}
                        </TableCell>
                        <TableCell className="hidden lg:table-cell text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDate(rider.joinedAt)}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>

          {/* Deliveries Tab */}
          <TabsContent value="deliveries" className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search deliveries..."
                  value={deliverySearch}
                  onChange={(e) => setDeliverySearch(e.target.value)}
                  className="pl-9"
                />
              </div>
              <div className="flex gap-2 text-xs text-muted-foreground">
                <span>Total Commissions: <strong className="text-foreground">UGSH {totalCommissions.toLocaleString()}</strong></span>
              </div>
            </div>
            <Card>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Rider</TableHead>
                      <TableHead className="hidden md:table-cell">Customer</TableHead>
                      <TableHead className="hidden lg:table-cell">Items</TableHead>
                      <TableHead className="hidden sm:table-cell">Route</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                      <TableHead className="text-right hidden sm:table-cell">Commission</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="hidden md:table-cell">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredDeliveries.map((del) => (
                      <TableRow key={del.id}>
                        <TableCell className="font-mono text-xs font-medium">{del.orderId}</TableCell>
                        <TableCell className="font-medium">{del.riderName}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          <div className="text-sm">{del.customerName}</div>
                          <div className="text-xs text-muted-foreground">{del.customerPhone}</div>
                        </TableCell>
                        <TableCell className="hidden lg:table-cell">
                          <div className="text-xs text-muted-foreground max-w-[200px] truncate">
                            {del.items.join(", ")}
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <div className="text-xs space-y-1">
                            <div className="text-muted-foreground">From: {del.pickupAddress}</div>
                            <div className="text-foreground">To: {del.deliveryAddress}</div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          UGSH {del.totalAmount.toLocaleString()}
                        </TableCell>
                        <TableCell className="text-right hidden sm:table-cell text-sm">
                          UGSH {del.commission.toLocaleString()}
                        </TableCell>
                        <TableCell>{statusBadge(del.status)}</TableCell>
                        <TableCell className="hidden md:table-cell text-xs text-muted-foreground">
                          {formatDate(del.createdAt)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ManagerDashboard;
