import { Calendar, Star, ChevronLeft, ChevronRight, Circle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const liturgicalDates = [
  { month: 0, day: 1, name: "Santa Maria, Mãe de Deus", type: "solemnity" },
  { month: 0, day: 6, name: "Epifania do Senhor", type: "solemnity" },
  { month: 1, day: 2, name: "Apresentação do Senhor", type: "feast" },
  { month: 1, day: 22, name: "Cátedra de São Pedro", type: "feast" },
  { month: 2, day: 19, name: "São José, Esposo de Maria", type: "solemnity" },
  { month: 2, day: 25, name: "Anunciação do Senhor", type: "solemnity" },
  { month: 3, day: 28, name: "Domingo da Divina Misericórdia", type: "mercy" },
  { month: 4, day: 1, name: "São José Operário", type: "memorial" },
  { month: 4, day: 13, name: "Nossa Senhora de Fátima", type: "memorial" },
  { month: 4, day: 31, name: "Visitação de Nossa Senhora", type: "feast" },
  { month: 5, day: 24, name: "Sagrado Coração de Jesus", type: "solemnity" },
  { month: 5, day: 29, name: "São Pedro e São Paulo", type: "solemnity" },
  { month: 7, day: 6, name: "Transfiguração do Senhor", type: "feast" },
  { month: 7, day: 15, name: "Assunção de Nossa Senhora", type: "solemnity" },
  { month: 8, day: 8, name: "Natividade de Nossa Senhora", type: "feast" },
  { month: 9, day: 5, name: "Santa Faustina Kowalska", type: "mercy" },
  { month: 9, day: 7, name: "Nossa Senhora do Rosário", type: "memorial" },
  { month: 10, day: 1, name: "Todos os Santos", type: "solemnity" },
  { month: 10, day: 2, name: "Fiéis Defuntos", type: "memorial" },
  { month: 10, day: 21, name: "Apresentação de Nossa Senhora", type: "memorial" },
  { month: 10, day: 22, name: "Cristo Rei", type: "solemnity" },
  { month: 11, day: 8, name: "Imaculada Conceição", type: "solemnity" },
  { month: 11, day: 25, name: "Natal do Senhor", type: "solemnity" },
];

const typeLabels = {
  solemnity: { label: "Solenidade", color: "bg-mercy-gold text-white" },
  feast: { label: "Festa", color: "bg-primary text-white" },
  memorial: { label: "Memória", color: "bg-muted text-foreground" },
  mercy: { label: "Misericórdia", color: "bg-mercy-red text-white" },
};

const monthNames = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

export default function Calendario() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  
  const monthEvents = liturgicalDates.filter(d => d.month === currentMonth);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const hasEvent = (day) => monthEvents.find(e => e.day === day);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 pb-24 lg:pb-8 lg:py-12">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-cinzel text-2xl font-bold text-foreground mb-1">Calendário Litúrgico</h1>
        <p className="text-sm text-muted-foreground font-inter mb-8">
          Festas e celebrações da Igreja
        </p>
      </motion.div>

      {/* Calendar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-card rounded-2xl border border-border p-5 mb-8"
      >
        <div className="flex items-center justify-between mb-5">
          <Button variant="ghost" size="icon" onClick={prevMonth} className="h-8 w-8">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <h2 className="font-cinzel text-base font-semibold">
            {monthNames[currentMonth]} {currentYear}
          </h2>
          <Button variant="ghost" size="icon" onClick={nextMonth} className="h-8 w-8">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map(d => (
            <div key={d} className="text-center text-[10px] font-inter font-medium text-muted-foreground py-1">
              {d}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
            const event = hasEvent(day);
            
            return (
              <div
                key={day}
                className={`relative aspect-square flex items-center justify-center rounded-lg text-xs font-inter transition-colors
                  ${isToday ? "bg-primary text-primary-foreground font-bold" : "hover:bg-muted"}
                  ${event && !isToday ? "font-medium" : ""}
                `}
              >
                {day}
                {event && (
                  <Circle className={`absolute bottom-0.5 w-1.5 h-1.5 fill-current ${
                    event.type === "mercy" ? "text-mercy-red" : 
                    event.type === "solemnity" ? "text-mercy-gold" : 
                    "text-primary"
                  }`} />
                )}
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Events for this month */}
      {monthEvents.length > 0 && (
        <div>
          <h3 className="font-cinzel text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <Star className="w-4 h-4 text-mercy-gold" />
            Celebrações em {monthNames[currentMonth]}
          </h3>
          <div className="space-y-2">
            {monthEvents.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-muted flex flex-col items-center justify-center shrink-0">
                  <span className="text-[10px] font-inter text-muted-foreground">{monthNames[event.month].slice(0, 3)}</span>
                  <span className="text-sm font-inter font-bold text-foreground">{event.day}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-inter font-medium text-foreground truncate">{event.name}</p>
                  <span className={`inline-block text-[10px] px-2 py-0.5 rounded-full mt-1 ${typeLabels[event.type].color}`}>
                    {typeLabels[event.type].label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}