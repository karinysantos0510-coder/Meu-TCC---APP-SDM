import { Sun, Moon, Sunset, Clock, BookOpen, Cross, Church, Heart, Star } from "lucide-react";
import { motion } from "framer-motion";
import DailyVerse from "../components/prayer/DailyVerse";
import PrayerCard from "../components/prayer/PrayerCard";
import PrayerSection from "../components/prayer/PrayerSection";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return { text: "Bom dia", sub: "Que a misericórdia de Deus ilumine seu dia", icon: Sun };
  if (hour < 18) return { text: "Boa tarde", sub: "Permaneça na graça da Divina Misericórdia", icon: Sunset };
  return { text: "Boa noite", sub: "Descanse na paz do Senhor Misericordioso", icon: Moon };
}

function getLiturgicalHour() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 9) return { name: "Laudes", path: "/liturgia/laudes", desc: "Oração da manhã" };
  if (hour >= 9 && hour < 12) return { name: "Hora Média — Tércia", path: "/liturgia/tercia", desc: "Oração das 9h" };
  if (hour >= 12 && hour < 15) return { name: "Hora Média — Sexta", path: "/liturgia/sexta", desc: "Oração do meio-dia" };
  if (hour >= 15 && hour < 18) return { name: "Hora Média — Noa", path: "/liturgia/noa", desc: "Oração das 15h" };
  if (hour >= 18 && hour < 21) return { name: "Vésperas", path: "/liturgia/vesperas", desc: "Oração do entardecer" };
  return { name: "Completas", path: "/liturgia/completas", desc: "Oração da noite" };
}

export default function Home() {
  const greeting = getGreeting();
  const currentHour = getLiturgicalHour();
  const GreetIcon = greeting.icon;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 pb-24 lg:pb-8 lg:py-12">
      {/* Greeting */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-2 mb-1">
          <GreetIcon className="w-5 h-5 text-mercy-gold" />
          <h1 className="font-cinzel text-2xl font-bold text-foreground">{greeting.text}</h1>
        </div>
        <p className="text-sm text-muted-foreground font-inter pl-7">{greeting.sub}</p>
      </motion.div>

      {/* Daily Verse */}
      <div className="mb-8">
        <DailyVerse
          verse="Ó sangue e água que jorraste do Coração de Jesus como fonte de misericórdia para nós, eu confio em Vós."
          reference="Diário de Santa Faustina, 187"
        />
      </div>

      {/* Current Prayer */}
      <PrayerSection title="Oração do Momento" subtitle={currentHour.desc} icon={Clock}>
        <PrayerCard
          title={currentHour.name}
          description="Rezar agora com a comunidade"
          icon={BookOpen}
          to={currentHour.path}
          accent="gold"
        />
      </PrayerSection>

      {/* Liturgia das Horas */}
      <PrayerSection title="Liturgia das Horas" subtitle="Ofício Divino" icon={BookOpen}>
        <div className="grid grid-cols-2 gap-3">
          <PrayerCard title="Laudes" description="Oração da manhã" icon={Sun} to="/liturgia/laudes" accent="gold" />
          <PrayerCard title="Tércia" description="Hora Média" icon={Clock} to="/liturgia/tercia" accent="blue" />
          <PrayerCard title="Sexta" description="Hora Média" icon={Clock} to="/liturgia/sexta" accent="blue" />
          <PrayerCard title="Noa" description="Hora Média" icon={Clock} to="/liturgia/noa" accent="blue" />
          <PrayerCard title="Vésperas" description="Oração do entardecer" icon={Sunset} to="/liturgia/vesperas" accent="rose" />
          <PrayerCard title="Completas" description="Oração da noite" icon={Moon} to="/liturgia/completas" accent="red" />
        </div>
      </PrayerSection>

      {/* Orações do Instituto */}
      <PrayerSection title="Orações do Instituto" subtitle="Divina Misericórdia" icon={Heart}>
        <PrayerCard title="Terço da Misericórdia" description="Oração do Terço da Divina Misericórdia" icon={Cross} to="/oracoes/terco" accent="red" />
        <PrayerCard title="Novena da Misericórdia" description="Nove dias de oração" icon={Star} to="/oracoes/novena" accent="rose" />
        <PrayerCard title="Orações do Convento" description="Orações diárias da comunidade" icon={Church} to="/oracoes/convento" accent="blue" />
      </PrayerSection>
    </div>
  );
}