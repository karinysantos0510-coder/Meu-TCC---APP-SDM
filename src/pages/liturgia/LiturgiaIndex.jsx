import { Sun, Moon, Sunset, Clock, BookOpen, Info } from "lucide-react";
import { motion } from "framer-motion";
import PrayerCard from "../../components/prayer/PrayerCard";
import PrayerSection from "../../components/prayer/PrayerSection";

const hours = [
  { title: "Laudes", desc: "Oração da manhã — Consagração do novo dia a Deus", icon: Sun, path: "/liturgia/laudes", accent: "gold", time: "6h00" },
  { title: "Tércia", desc: "Hora Média — Memória da descida do Espírito Santo", icon: Clock, path: "/liturgia/tercia", accent: "blue", time: "9h00" },
  { title: "Sexta", desc: "Hora Média — Memória da crucificação de Cristo", icon: Clock, path: "/liturgia/sexta", accent: "blue", time: "12h00" },
  { title: "Noa", desc: "Hora Média — Hora da Misericórdia", icon: Clock, path: "/liturgia/noa", accent: "red", time: "15h00" },
  { title: "Vésperas", desc: "Oração do entardecer — Ação de graças pelo dia", icon: Sunset, path: "/liturgia/vesperas", accent: "rose", time: "18h00" },
  { title: "Completas", desc: "Oração da noite — Entrega do sono a Deus", icon: Moon, path: "/liturgia/completas", accent: "red", time: "21h00" },
];

export default function LiturgiaIndex() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 pb-24 lg:pb-8 lg:py-12">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-cinzel text-2xl font-bold text-foreground mb-1">Liturgia das Horas</h1>
        <p className="text-sm text-muted-foreground font-inter mb-8">
          Ofício Divino — a oração pública da Igreja
        </p>
      </motion.div>

      {/* Info Card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8 p-4 rounded-xl bg-mercy-gold-light border border-mercy-gold/15"
      >
        <div className="flex gap-3">
          <Info className="w-4 h-4 text-mercy-gold mt-0.5 shrink-0" />
          <div>
            <p className="text-xs text-foreground/80 font-inter leading-relaxed">
              A Liturgia das Horas é a oração oficial da Igreja, santificando cada momento do dia. 
              Reze junto com a comunidade do Instituto da Divina Misericórdia, Convento e Seminário.
            </p>
          </div>
        </div>
      </motion.div>

      <PrayerSection title="Horas do Ofício" icon={BookOpen}>
        <div className="space-y-3">
          {hours.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-inter text-muted-foreground w-10 shrink-0 text-right">{h.time}</span>
                <div className="flex-1">
                  <PrayerCard title={h.title} description={h.desc} icon={h.icon} to={h.path} accent={h.accent} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </PrayerSection>
    </div>
  );
}