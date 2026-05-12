export default function PrayerText({ children, type = "body", className = "" }) {
  const styles = {
    rubric: "text-mercy-red text-xs font-inter italic",
    response: "text-primary font-semibold text-sm",
    body: "text-foreground/90 text-sm leading-relaxed",
    title: "font-cinzel text-lg font-bold text-foreground",
    subtitle: "font-cinzel text-sm font-semibold text-mercy-gold uppercase tracking-wider",
    antiphon: "text-mercy-red/80 text-sm italic border-l-2 border-mercy-red/20 pl-3",
    verse: "text-foreground/85 text-sm leading-loose",
    gloria: "text-primary/80 text-sm italic font-medium",
  };

  return (
    <p className={`${styles[type] || styles.body} ${className}`}>
      {children}
    </p>
  );
}