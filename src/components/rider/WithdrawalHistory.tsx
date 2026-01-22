import { Badge } from "@/components/ui/badge";
import { History, CheckCircle2, Clock, XCircle } from "lucide-react";

export interface WithdrawalTransaction {
  id: string;
  amount: number;
  provider: "mtn" | "airtel";
  phoneNumber: string;
  status: "completed" | "pending" | "failed";
  createdAt: Date;
}

interface WithdrawalHistoryProps {
  transactions: WithdrawalTransaction[];
}

const WithdrawalHistory = ({ transactions }: WithdrawalHistoryProps) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-UG", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const getStatusBadge = (status: WithdrawalTransaction["status"]) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/30">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Completed
          </Badge>
        );
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-500/10 text-yellow-600 border-yellow-500/30">
            <Clock className="h-3 w-3 mr-1" />
            Pending
          </Badge>
        );
      case "failed":
        return (
          <Badge variant="outline" className="bg-red-500/10 text-red-600 border-red-500/30">
            <XCircle className="h-3 w-3 mr-1" />
            Failed
          </Badge>
        );
    }
  };

  const getProviderColor = (provider: "mtn" | "airtel") => {
    return provider === "mtn" ? "bg-yellow-500" : "bg-red-500";
  };

  if (transactions.length === 0) {
    return (
      <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <History className="h-4 w-4 text-primary" />
          Withdrawal History
        </h3>
        <div className="text-center py-8">
          <History className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground text-sm">No withdrawals yet</p>
          <p className="text-muted-foreground text-xs mt-1">
            Your withdrawal history will appear here
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-5 shadow-card border border-border">
      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
        <History className="h-4 w-4 text-primary" />
        Withdrawal History
      </h3>
      <div className="space-y-3">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border/50"
          >
            <div className="flex items-center gap-3">
              <div
                className={`h-8 w-8 rounded-full ${getProviderColor(tx.provider)} flex items-center justify-center`}
              >
                <span className="text-white text-xs font-bold">
                  {tx.provider === "mtn" ? "M" : "A"}
                </span>
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">
                  UGSH {tx.amount.toLocaleString()}
                </p>
                <p className="text-xs text-muted-foreground">
                  {tx.phoneNumber} • {formatDate(tx.createdAt)}
                </p>
              </div>
            </div>
            {getStatusBadge(tx.status)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WithdrawalHistory;
