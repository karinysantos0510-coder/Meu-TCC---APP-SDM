import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function DailyVerse({ verse, reference }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-mercy-blue-light p-6 text-white"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-mercy-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-mercy-red/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
      
      <div className="relative z-10">
        <Quote className="w-6 h-6 text-mercy-gold/60 mb-3" />
        <p className="font-lora text-base leading-relaxed italic text-white/90 mb-3">
          {verse}
        </p>
        <p className="font-inter text-xs text-mercy-gold/80 font-medium">
          — {reference}
        </p>
      </div>
    </motion.div>
  );
}