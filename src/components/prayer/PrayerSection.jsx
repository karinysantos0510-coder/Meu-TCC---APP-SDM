import { motion } from "framer-motion";

export default function PrayerSection({ title, subtitle, children, icon: Icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-6"
    >
      {(title || subtitle) && (
        <div className="flex items-center gap-3 mb-4">
          {Icon && (
            <div className="w-8 h-8 rounded-full bg-mercy-gold/10 flex items-center justify-center shrink-0">
              <Icon className="w-4 h-4 text-mercy-gold" />
            </div>
          )}
          <div>
            {title && <h3 className="font-cinzel text-base font-semibold text-foreground">{title}</h3>}
            {subtitle && <p className="text-xs text-muted-foreground font-inter mt-0.5">{subtitle}</p>}
          </div>
        </div>
      )}
      <div className="space-y-3">
        {children}
      </div>
    </motion.div>
  );
}