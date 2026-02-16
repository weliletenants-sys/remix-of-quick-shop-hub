import { useState } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const locations = [
  "Kampala Central",
  "Wandegeya",
  "Ntinda",
  "Bukoto",
  "Kololo",
  "Nakasero",
  "Makerere",
  "Kawempe",
  "Rubaga",
  "Makindye",
  "Naalya",
  "Kira",
  "Entebbe",
  "Mukono",
];

interface LocationPickerProps {
  selected: string;
  onSelect: (location: string) => void;
}

const LocationPicker = ({ selected, onSelect }: LocationPickerProps) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = locations.filter((loc) =>
    loc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex items-center gap-1.5 bg-muted/60 rounded-xl px-3 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="truncate max-w-[160px]">{selected}</span>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm bg-card">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">Select Location</DialogTitle>
        </DialogHeader>
        <p className="text-xs text-muted-foreground -mt-2 mb-3">
          Items are available based on your delivery area
        </p>
        <Input
          placeholder="Search location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-xl bg-muted/50 border-0 h-10 mb-2"
        />
        <div className="max-h-64 overflow-y-auto space-y-1">
          {filtered.map((loc) => (
            <button
              key={loc}
              onClick={() => {
                onSelect(loc);
                setOpen(false);
                setSearch("");
              }}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center gap-2 ${
                selected === loc
                  ? "gradient-hero text-primary-foreground"
                  : "hover:bg-muted text-foreground"
              }`}
            >
              <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
              {loc}
            </button>
          ))}
          {filtered.length === 0 && (
            <p className="text-center text-sm text-muted-foreground py-4">
              No locations found
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LocationPicker;
