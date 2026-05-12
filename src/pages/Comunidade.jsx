import { Church, Users, BookOpen, Clock, Heart, Bell } from "lucide-react";
import { motion } from "framer-motion";
import PrayerSection from "../components/prayer/PrayerSection";

const schedule = [
  { time: "05h30", event: "Laudes e Meditação", type: "prayer" },
  { time: "07h00", event: "Santa Missa", type: "mass" },
  { time: "09h00", event: "Tércia", type: "prayer" },
  { time: "12h00", event: "Angelus e Sexta", type: "prayer" },
  { time: "15h00", event: "Hora da Misericórdia e Terço", type: "mercy" },
  { time: "17h00", event: "Estudo e Formação", type: "study" },
  { time: "18h00", event: "Vésperas", type: "prayer" },
  { time: "19h00", event: "Adoração ao Santíssimo", type: "adoration" },
  { time: "21h00", event: "Completas", type: "prayer" },
];

const typeStyles = {
  prayer: "bg-primary/10 text-primary",
  mass: "bg-mercy-gold/15 text-mercy-gold",
  mercy: "bg-mercy-red/10 text-mercy-red",
  study: "bg-blue-50 text-blue-600",
  adoration: "bg-mercy-gold/15 text-mercy-gold",
};

const typeIcons = {
  prayer: BookOpen,
  mass: Church,
  mercy: Heart,
  study: BookOpen,
  adoration: Bell,
};

export default function Comunidade() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 pb-24 lg:pb-8 lg:py-12">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-cinzel text-2xl font-bold text-foreground mb-1">Comunidade</h1>
        <p className="text-sm text-muted-foreground font-inter mb-8">
          Instituto da Divina Misericórdia — Vida de Oração
        </p>
      </motion.div>

      {/* About */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-mercy-cream border border-primary/10"
      >
        <div className="flex gap-3">
          <Church className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <h3 className="font-cinzel text-sm font-semibold text-foreground mb-2">Sobre o Instituto</h3>
            <p className="text-xs text-foreground/70 font-inter leading-relaxed">
              O Instituto da Divina Misericórdia é uma comunidade dedicada à propagação da devoção à 
              Divina Misericórdia, conforme revelada por Jesus a Santa Faustina Kowalska. 
              A comunidade é composta pelo Convento, onde vivem os consagrados e consagradas, 
              e pelo Seminário, onde se formam os futuros sacerdotes da Misericórdia.
            </p>
            <p className="text-xs text-foreground/70 font-inter leading-relaxed mt-2">
              A vida da comunidade é centrada na oração, especialmente na Liturgia das Horas, 
              no Terço da Divina Misericórdia e na Adoração ao Santíssimo Sacramento.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Daily Schedule */}
      <PrayerSection title="Horário Diário" subtitle="Rotina de oração da comunidade" icon={Clock}>
        <div className="space-y-2">
          {schedule.map((item, i) => {
            const TypeIcon = typeIcons[item.type];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <span className="text-xs font-inter font-medium text-muted-foreground w-12 shrink-0">{item.time}</span>
                <div className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${typeStyles[item.type]}`}>
                  <TypeIcon className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-inter text-foreground">{item.event}</span>
              </motion.div>
            );
          })}
        </div>
      </PrayerSection>

      {/* Community Info */}
      <PrayerSection title="Rezar em Comunidade" subtitle="Unidos na oração" icon={Users}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="p-5 rounded-xl bg-mercy-red-light border border-mercy-red/10"
        >
          <p className="text-sm text-foreground/80 font-inter leading-relaxed">
            Após as missas e celebrações, a comunidade se reúne para rezar a Liturgia das Horas correspondente ao momento do dia. 
            Use este aplicativo para acompanhar as orações em conjunto, seja presencialmente no Convento, 
            no Seminário ou à distância, unido espiritualmente à comunidade.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <Heart className="w-4 h-4 text-mercy-red" />
            <span className="text-xs font-inter font-medium text-mercy-red">
              "Onde dois ou três estiverem reunidos em meu nome, eu estarei no meio deles." — Mt 18,20
            </span>
          </div>
        </motion.div>
      </PrayerSection>
    </div>
  );
}