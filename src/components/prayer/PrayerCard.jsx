import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PrayerCard({ title, description, icon: Icon, to, accent = "blue" }) {
  const accents = {
    blue: "bg-primary/5 border-primary/10 hover:border-primary/25 hover:bg-primary/8",
    red: "bg-mercy-red-light border-mercy-red/10 hover:border-mercy-red/25",
    gold: "bg-mercy-gold-light border-mercy-gold/15 hover:border-mercy-gold/30",
    rose: "bg-mercy-rose/30 border-mercy-red/8 hover:border-mercy-red/20",
  };

  const iconColors = {
    blue: "text-primary bg-primary/10",
    red: "text-mercy-red bg-mercy-red/10",
    gold: "text-mercy-gold bg-mercy-gold/10",
    rose: "text-mercy-red bg-mercy-rose",
  };

  return (
    <Link
      to={to}
      className={`group block p-4 rounded-xl border transition-all duration-300 ${accents[accent]}`}
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${iconColors[accent]}`}>
            <Icon className="w-5 h-5" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h4 className="font-cinzel text-sm font-semibold text-foreground truncate">{title}</h4>
          {description && (
            <p className="text-xs text-muted-foreground font-inter mt-0.5 line-clamp-2">{description}</p>
          )}
        </div>
        <ChevronRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-foreground/60 transition-colors shrink-0" />
      </div>
    </Link>
  );
}