import { Cross, Heart, Church, Star, Flame, BookOpen, Sun, Moon, Coffee, Globe, Shield, Music } from "lucide-react";
import { motion } from "framer-motion";
import PrayerCard from "../../components/prayer/PrayerCard";
import PrayerSection from "../../components/prayer/PrayerSection";

export default function OracoesIndex() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 pb-24 lg:pb-8 lg:py-12">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-cinzel text-2xl font-bold text-foreground mb-1">Orações</h1>
        <p className="text-sm text-muted-foreground font-inter mb-8">
          Família da Divina Misericórdia
        </p>
      </motion.div>

      {/* Divina Misericórdia */}
      <PrayerSection title="Divina Misericórdia" subtitle="Orações principais" icon={Heart}>
        <PrayerCard title="Terço da Misericórdia" description="O terço revelado por Jesus a Santa Faustina" icon={Cross} to="/oracoes/terco" accent="red" />
        <PrayerCard title="Novena da Misericórdia" description="Nove dias de oração" icon={Star} to="/oracoes/novena" accent="rose" />
        <PrayerCard title="Hora da Misericórdia" description="Oração das 15h" icon={Flame} to="/oracoes/hora-misericordia" accent="gold" />
        <PrayerCard title="Cinco Primeiros Sábados" description="Devoção ao Coração Imaculado de Maria" icon={Star} to="/oracoes/cinco-sabados" accent="rose" />
      </PrayerSection>

      {/* Orações do Dia */}
      <PrayerSection title="Orações do Dia" subtitle="Rotina diária de oração" icon={Sun}>
        <PrayerCard title="Orações da Manhã" description="Ato de Adoração, Fé, Esperança, Caridade e Fidelidade ao Carisma" icon={Sun} to="/oracoes/oracoes-manha" accent="gold" />
        <PrayerCard title="Angelus" description="Saudação à Virgem Maria (6h, 12h, 18h)" icon={Star} to="/oracoes/angelus" accent="blue" />
        <PrayerCard title="Regina Caeli" description="Tempo Pascal — em lugar do Angelus" icon={Star} to="/oracoes/regina-coeli" accent="blue" />
        <PrayerCard title="Orações da Tarde" description="Consagração a Maria e São Miguel Arcanjo" icon={BookOpen} to="/oracoes/oracoes-tarde" accent="rose" />
        <PrayerCard title="Orações da Noite" description="Exame de consciência, contrição e entrega" icon={Moon} to="/oracoes/oracoes-noite" accent="red" />
      </PrayerSection>

      {/* Sacramento */}
      <PrayerSection title="Eucaristia e Sacramento" subtitle="Orações eucarísticas" icon={Church}>
        <PrayerCard title="Visita ao Santíssimo" description="Comunhão espiritual e adoração" icon={Church} to="/oracoes/visita-sacramento" accent="gold" />
        <PrayerCard title="Após a Santa Missa" description="Ação de graças pós-missa" icon={Church} to="/oracoes/apos-missa" accent="blue" />
      </PrayerSection>

      {/* Terços e Devoções */}
      <PrayerSection title="Terços e Devoções" subtitle="Orações marianas e especiais" icon={Cross}>
        <PrayerCard title="Terço Mariano" description="Com os quatro grupos de mistérios" icon={Cross} to="/oracoes/terco-mariano" accent="blue" />
        <PrayerCard title="Terço da Divina Providência" description="Confiança na Providência de Deus" icon={Heart} to="/oracoes/terco-providencia" accent="gold" />
        <PrayerCard title="Novena a N. S. de Fátima" description="Sete dias de oração a Nossa Senhora" icon={Star} to="/oracoes/novena-fatima" accent="rose" />
      </PrayerSection>

      {/* Ladainhas */}
      <PrayerSection title="Ladainhas" subtitle="Segundo o dia da semana" icon={Music}>
        <PrayerCard title="Ladainha de Nossa Senhora" description="Exceto quarta e sexta-feira" icon={Star} to="/oracoes/ladainha-nossa-senhora" accent="blue" />
        <PrayerCard title="Ladainha do S. Coração de Jesus" description="Todas as sextas-feiras" icon={Heart} to="/oracoes/ladainha-sagrado-coracao" accent="red" />
        <PrayerCard title="Ladainha de São José" description="Todas as quartas-feiras" icon={Shield} to="/oracoes/ladainha-sao-jose" accent="gold" />
      </PrayerSection>

      {/* Consagrações */}
      <PrayerSection title="Consagrações" subtitle="Entrega total a Deus e a Maria" icon={Heart}>
        <PrayerCard title="Consagração da Família DM" description="Consagração comunitária ao Coração Imaculado" icon={Heart} to="/oracoes/consagracao-familia" accent="rose" />
        <PrayerCard title="Consagração à Virgem de Fátima" description="Consagração pessoal ao Imaculado Coração" icon={Star} to="/oracoes/consagracao-fatima" accent="blue" />
        <PrayerCard title="Consagração à Mãe de Deus" description="Oração de Irmã Lúcia" icon={Star} to="/oracoes/consagracao-mae-deus" accent="gold" />
        <PrayerCard title="Consagração a Nossa Senhora DM" description="Mãe da Divina Misericórdia" icon={Star} to="/oracoes/consagracao-maria" accent="rose" />
      </PrayerSection>

      {/* Para várias circunstâncias */}
      <PrayerSection title="Várias Circunstâncias" subtitle="Para cada momento do dia" icon={BookOpen}>
        <PrayerCard title="Vinde, Espírito Criador" description="Antes da meditação diária" icon={Flame} to="/oracoes/vinde-espirito" accent="gold" />
        <PrayerCard title="Orações para as Refeições" description="Bênção antes e agradecimento depois" icon={Coffee} to="/oracoes/refeicoes" accent="blue" />
        <PrayerCard title="Saindo e Chegando em Casa" description="Proteção no caminho" icon={Globe} to="/oracoes/saindo-chegando" accent="rose" />
      </PrayerSection>

      {/* Orações em Latim */}
      <PrayerSection title="Orações em Latim" subtitle="Língua da tradição da Igreja" icon={BookOpen}>
        <PrayerCard title="Orações em Latim" description="Pater Noster, Ave Maria, Salve Regina, Veni Creator…" icon={BookOpen} to="/oracoes/oracoes-latim" accent="gold" />
      </PrayerSection>

      {/* Convento / Seminário */}
      <PrayerSection title="Convento e Seminário" subtitle="Vida consagrada" icon={Church}>
        <PrayerCard title="Oração da Manhã do Convento" description="Consagração matinal da comunidade" icon={Sun} to="/oracoes/manha-convento" accent="gold" />
        <PrayerCard title="Oração da Noite do Convento" description="Exame e entrega do dia ao Senhor" icon={Moon} to="/oracoes/noite-convento" accent="red" />
        <PrayerCard title="Oração do Seminarista" description="Pelas vocações e pela perseverança" icon={Heart} to="/oracoes/seminarista" accent="blue" />
      </PrayerSection>
    </div>
  );
}