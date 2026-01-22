import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Wallet, Phone, Banknote, ArrowRight } from "lucide-react";

interface WithdrawModalProps {
  availableBalance: number;
}

const mobileMoneyProviders = [
  { id: "mtn", name: "MTN Mobile Money", prefix: "256 77" },
  { id: "airtel", name: "Airtel Money", prefix: "256 70" },
];

const WithdrawModal = ({ availableBalance }: WithdrawModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [provider, setProvider] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleWithdraw = async (e: React.FormEvent) => {
    e.preventDefault();

    const withdrawAmount = parseFloat(amount);

    if (!provider) {
      toast({
        title: "Select Provider",
        description: "Please select a mobile money provider",
        variant: "destructive",
      });
      return;
    }

    if (!phoneNumber || phoneNumber.length < 9) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid mobile money number",
        variant: "destructive",
      });
      return;
    }

    if (!amount || withdrawAmount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid withdrawal amount",
        variant: "destructive",
      });
      return;
    }

    if (withdrawAmount > availableBalance) {
      toast({
        title: "Insufficient Balance",
        description: "Withdrawal amount exceeds your available balance",
        variant: "destructive",
      });
      return;
    }

    if (withdrawAmount < 1000) {
      toast({
        title: "Minimum Amount",
        description: "Minimum withdrawal is UGSH 1,000",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    // Simulate withdrawal processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Withdrawal Initiated! 💸",
      description: `UGSH ${withdrawAmount.toLocaleString()} is being sent to your ${provider === "mtn" ? "MTN" : "Airtel"} number. You'll receive it within minutes.`,
    });

    setIsProcessing(false);
    setIsOpen(false);
    setProvider("");
    setPhoneNumber("");
    setAmount("");
  };

  const selectedProvider = mobileMoneyProviders.find((p) => p.id === provider);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
          <Banknote className="h-4 w-4" />
          Withdraw
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-primary" />
            Withdraw to Mobile Money
          </DialogTitle>
          <DialogDescription>
            Withdraw your earnings to any mobile money agent in Uganda
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleWithdraw} className="space-y-5 mt-4">
          {/* Available Balance */}
          <div className="bg-muted/50 rounded-lg p-4 text-center">
            <p className="text-sm text-muted-foreground">Available Balance</p>
            <p className="text-2xl font-bold text-primary">
              UGSH {availableBalance.toLocaleString()}
            </p>
          </div>

          {/* Mobile Money Provider */}
          <div className="space-y-2">
            <Label>Mobile Money Provider</Label>
            <Select value={provider} onValueChange={setProvider}>
              <SelectTrigger>
                <SelectValue placeholder="Select provider" />
              </SelectTrigger>
              <SelectContent>
                {mobileMoneyProviders.map((p) => (
                  <SelectItem key={p.id} value={p.id}>
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-3 w-3 rounded-full ${
                          p.id === "mtn" ? "bg-yellow-500" : "bg-red-500"
                        }`}
                      />
                      {p.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone">Mobile Money Number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="phone"
                type="tel"
                placeholder={selectedProvider?.prefix || "e.g., 256 772 123 456"}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/[^0-9\s]/g, ""))}
                className="pl-10"
                maxLength={15}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Enter the number registered with the mobile money agent
            </p>
          </div>

          {/* Amount */}
          <div className="space-y-2">
            <Label htmlFor="amount">Amount to Withdraw</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                UGSH
              </span>
              <Input
                id="amount"
                type="number"
                placeholder="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="pl-14"
                min="1000"
                max={availableBalance}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Min: UGSH 1,000</span>
              <button
                type="button"
                onClick={() => setAmount(availableBalance.toString())}
                className="text-primary hover:underline"
              >
                Withdraw All
              </button>
            </div>
          </div>

          {/* Summary */}
          {amount && parseFloat(amount) > 0 && (
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Amount</span>
                <span className="font-medium">UGSH {parseFloat(amount).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Transaction Fee</span>
                <span className="font-medium text-primary">FREE</span>
              </div>
              <div className="border-t border-border pt-2 flex justify-between">
                <span className="font-medium">You'll Receive</span>
                <span className="font-bold text-primary">
                  UGSH {parseFloat(amount).toLocaleString()}
                </span>
              </div>
            </div>
          )}

          <Button
            type="submit"
            className="w-full"
            variant="hero"
            disabled={isProcessing || availableBalance <= 0}
          >
            {isProcessing ? (
              "Processing..."
            ) : (
              <>
                Withdraw Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Funds are sent instantly to your mobile money account
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WithdrawModal;
