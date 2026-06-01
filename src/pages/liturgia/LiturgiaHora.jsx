import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import LiturgiaHoraContent from "../../components/liturgy/LiturgiaHoraContent";

const HORA_TITLES = {
  laudes: "Laudes — Oração da Manhã",
  tercia: "Tércia — Hora Média",
  sexta: "Sexta — Hora Média",
  noa: "Noa — Hora da Misericórdia",
  vesperas: "Vésperas — Oração do Entardecer",
  completas: "Completas — Oração da Noite",
};

export default function LiturgiaHora() {
  const { hora } = useParams();
  const title = HORA_TITLES[hora];

  if (!title) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <p className="text-muted-foreground">Hora litúrgica não encontrada.</p>
        <Link to="/liturgia" className="text-primary text-sm mt-2 inline-block">← Voltar</Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 pb-24 lg:pb-8 lg:py-12">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Link to="/liturgia" className="p-2 rounded-lg hover:bg-muted transition-colors">
          <ArrowLeft className="w-4 h-4 text-muted-foreground" />
        </Link>
        <div className="flex-1">
          <h1 className="font-cinzel text-xl font-bold text-foreground">{title}</h1>
        </div>
      </div>

      {/* Conteúdo dinâmico do dia — Paulus */}
      <LiturgiaHoraContent hora={hora} />
    </div>
  );
}