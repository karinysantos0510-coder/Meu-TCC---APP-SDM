import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Volume2, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PrayerText from "../../components/prayer/PrayerText";

const liturgiaContent = {
  laudes: {
    title: "Laudes — Oração da Manhã",
    intro: "Deus, vinde em meu auxílio.",
    response: "Senhor, socorrei-me sem demora.",
    sections: [
      {
        title: "Hino",
        content: `Ó Cristo, luz do novo dia,
que brilhas sobre a criação,
concede-nos a tua graça
e a chama viva da oração.

Senhor da luz e da verdade,
que dissipas toda escuridão,
ilumina nossos caminhos
com teu amor e compaixão.`
      },
      {
        title: "Salmo 62(63) — A sede de Deus",
        antiphon: "Na sombra das vossas asas eu exulto.",
        content: `Sois vós, ó Deus, o meu Deus!
Desde a aurora vos procuro;
a minha alma tem sede de vós,
minha carne vos deseja com ardor,
como terra seca, sedenta, sem água.

Assim vos contemplei no santuário,
vendo o vosso poder e a vossa glória.
Vosso amor vale mais do que a vida;
por isso, os meus lábios vos louvam.

Quero assim vos bendizer pela vida
e em vosso nome levantar minhas mãos.
Minha alma se farta como de um banquete,
e minha boca vos louva com alegria.`,
        gloria: true
      },
      {
        title: "Cântico — Daniel 3, 57-88.56",
        antiphon: "Louvai ao Senhor, todas as suas criaturas.",
        content: `Todas as obras do Senhor, bendizei o Senhor,
louvai-o e exaltai-o para sempre!
Anjos do Senhor, bendizei o Senhor,
céus, bendizei o Senhor!

Águas que estais sobre o firmamento, bendizei o Senhor,
exércitos do Senhor, bendizei o Senhor!
Sol e lua, bendizei o Senhor,
estrelas do céu, bendizei o Senhor!`,
        gloria: true
      },
      {
        title: "Salmo 149 — Canto de vitória",
        antiphon: "A Igreja exulta em seu Criador.",
        content: `Cantai ao Senhor um canto novo,
seu louvor na assembleia dos fiéis!
Alegre-se Israel em quem o fez,
os filhos de Sião no seu Senhor!

Louvem o seu nome com danças,
ao som do tambor e da cítara!
Pois o Senhor se agrada do seu povo,
coroa os humildes com a sua vitória.`,
        gloria: true
      },
      {
        title: "Leitura Breve — Rm 13,11b-12",
        content: `É chegada a hora de despertar do sono, pois agora a nossa salvação está mais perto do que quando abraçamos a fé. A noite vai adiantada e o dia está próximo. Deixemos, pois, as obras das trevas e vistamos as armas da luz.`
      },
      {
        title: "Responsório Breve",
        content: `℣. Cristo, Filho do Deus vivo, tende piedade de nós.
℟. Cristo, Filho do Deus vivo, tende piedade de nós.
℣. Vós que estais sentado à direita do Pai.
℟. Tende piedade de nós.
℣. Glória ao Pai e ao Filho e ao Espírito Santo.
℟. Cristo, Filho do Deus vivo, tende piedade de nós.`
      },
      {
        title: "Cântico de Zacarias — Lc 1, 68-79",
        antiphon: "Bendito seja o Senhor, Deus de Israel.",
        content: `Bendito seja o Senhor, Deus de Israel,
porque visitou e redimiu o seu povo.
Suscitou-nos um poderoso Salvador
na casa de Davi, seu servo,

como havia prometido
desde tempos antigos,
pela boca dos seus santos profetas:
para nos salvar dos nossos inimigos
e da mão de todos os que nos odeiam.

Para usar de misericórdia
com os nossos pais
e lembrar-se da sua santa aliança,

do juramento que fez
a Abraão, nosso pai,
de nos conceder que, livres do medo,
arrancados da mão dos inimigos,
o sirvamos em santidade e justiça,
na sua presença, todos os nossos dias.`,
        gloria: true
      },
      {
        title: "Preces",
        content: `Cristo é o sol que nunca se põe, iluminando toda a nossa vida. Invoquemo-lo com fé:

℣. Senhor, iluminai a nossa vida.
℟. Senhor, iluminai a nossa vida.

Criador da luz, nós vos agradecemos pelo dom deste novo dia.
℟. Senhor, iluminai a nossa vida.

Que o vosso Espírito Santo nos guie em tudo o que fizermos hoje.
℟. Senhor, iluminai a nossa vida.

Dai-nos a graça de ver o vosso rosto em todos os irmãos.
℟. Senhor, iluminai a nossa vida.

Senhor, que a misericórdia do vosso Coração nos acompanhe neste dia.
℟. Senhor, iluminai a nossa vida.`
      },
      {
        title: "Pai Nosso",
        content: `Pai nosso que estais nos céus, 
santificado seja o vosso nome, 
venha a nós o vosso reino, 
seja feita a vossa vontade 
assim na terra como no céu. 

O pão nosso de cada dia nos dai hoje, 
perdoai-nos as nossas ofensas 
assim como nós perdoamos 
a quem nos tem ofendido, 
e não nos deixeis cair em tentação, 
mas livrai-nos do mal. Amém.`
      },
      {
        title: "Oração Final",
        content: `Senhor, Deus todo-poderoso, que nos fizestes chegar ao começo deste dia, protegei-nos hoje com o vosso poder, para que não caiamos em nenhum pecado, mas que todas as nossas palavras, pensamentos e ações se encaminhem para cumprir a vossa santa vontade. Por Nosso Senhor Jesus Cristo, vosso Filho, que convosco vive e reina, na unidade do Espírito Santo, Deus, por todos os séculos dos séculos. Amém.`
      }
    ]
  },
  tercia: {
    title: "Tércia — Hora Média",
    intro: "Deus, vinde em meu auxílio.",
    response: "Senhor, socorrei-me sem demora.",
    sections: [
      {
        title: "Hino",
        content: `Agora, hora de Tércia,
o Espírito desceu em fogo,
enchendo de luz e de graça
os Apóstolos do Senhor.

Vinde, Espírito Criador,
enchei de graça os corações,
inflame em nós o vosso amor
e acendei vossas consolações.`
      },
      {
        title: "Salmo 118(119), 25-32",
        antiphon: "Instruí-me, Senhor, no caminho dos vossos preceitos.",
        content: `Minha alma se apega ao pó da terra;
segundo a vossa palavra, fazei-me viver.
Expus os meus caminhos e me escutastes;
instruí-me nos vossos preceitos.

Fazei-me compreender o caminho dos vossos preceitos,
e meditarei as vossas maravilhas.
Minha alma chora de tristeza;
segundo a vossa palavra, levantai-me.`,
        gloria: true
      },
      {
        title: "Leitura Breve",
        content: `Nós, porém, cheios de confiança na misericórdia de Deus, esperamos firmemente que o Senhor nos conceda a graça da perseverança final e a glória do seu Reino.`
      },
      {
        title: "Oração",
        content: `Deus todo-poderoso e eterno, nesta hora em que o Espírito Santo desceu sobre os Apóstolos, derramai sobre nós os dons do mesmo Espírito, para que possamos caminhar segundo a vossa vontade. Por Cristo, nosso Senhor. Amém.`
      }
    ]
  },
  sexta: {
    title: "Sexta — Hora Média",
    intro: "Deus, vinde em meu auxílio.",
    response: "Senhor, socorrei-me sem demora.",
    sections: [
      {
        title: "Hino",
        content: `Ó Deus de poder infinito,
que rege os tempos e as horas,
concedei ao meio-dia
a paz e a força da oração.

Extinguí o fogo das iras,
tirai do coração o calor do pecado,
dai ao corpo saúde
e a verdadeira paz ao espírito.`
      },
      {
        title: "Salmo 118(119), 81-88",
        antiphon: "Ó Senhor, a vossa palavra é para sempre estável nos céus.",
        content: `A minha alma desfalece, ansiando pela vossa salvação;
na vossa palavra ponho a esperança.
Meus olhos se cansam, esperando a vossa promessa;
quando é que me haveis de consolar?

Embora eu seja como um odre exposto ao fumo,
não me esqueço dos vossos preceitos.
Quantos serão os dias do vosso servo?
Quando julgareis os que me perseguem?`,
        gloria: true
      },
      {
        title: "Leitura Breve",
        content: `Ele mesmo suportou os nossos sofrimentos e carregou as nossas dores. Nós o tínhamos como leproso, ferido por Deus e abatido. Mas ele foi trespassado por nossas faltas, triturado pelos nossos pecados. (Is 53, 4-5)`
      },
      {
        title: "Oração",
        content: `Deus todo-poderoso, que ao meio-dia chamastes o Apóstolo Pedro à revelação do Evangelho, conservai-nos na vossa graça e conduzi-nos à luz plena da verdade. Por Cristo, nosso Senhor. Amém.`
      }
    ]
  },
  noa: {
    title: "Noa — Hora da Misericórdia",
    intro: "Deus, vinde em meu auxílio.",
    response: "Senhor, socorrei-me sem demora.",
    sections: [
      {
        title: "Hino",
        content: `Ó Deus, força imutável,
que distribuís os tempos,
e dais a cada hora do dia
a sua luz e o seu fulgor.

Apagai a tarde deste mundo
para que não caiamos em pecado;
e que a morte nos seja porta
para a luz eterna do céu.`
      },
      {
        title: "Salmo 125(126) — Deus, nossa alegria",
        antiphon: "Os que semeiam em lágrimas, colherão entre cantos de alegria.",
        content: `Quando o Senhor reconduziu os cativos de Sião,
parecíamos estar sonhando.
Nossa boca encheu-se de riso,
nossos lábios, de canções.

Entre os pagãos se dizia:
«O Senhor fez grandes coisas por eles!»
Sim, grandes coisas fez o Senhor por nós,
por isso estamos alegres.`,
        gloria: true
      },
      {
        title: "Leitura Breve — Hora da Misericórdia",
        content: `Às três horas implora a Minha misericórdia, especialmente para os pecadores, e, nem que seja por um breve momento, mergulha na Minha Paixão, especialmente no Meu abandono na hora da agonia. É esta a hora da grande misericórdia para o mundo inteiro. (Diário de Santa Faustina, 1320)`
      },
      {
        title: "Oração",
        content: `Jesus Misericordioso, que às três horas da tarde entregastes o Vosso Espírito ao Pai e nos abristeis a fonte inesgotável da Misericórdia, fazei-nos mergulhar na contemplação da Vossa Paixão e concedei-nos as graças que imploramos com plena confiança na Vossa bondade infinita. Por Cristo, nosso Senhor. Amém.`
      }
    ]
  },
  vesperas: {
    title: "Vésperas — Oração do Entardecer",
    intro: "Deus, vinde em meu auxílio.",
    response: "Senhor, socorrei-me sem demora.",
    sections: [
      {
        title: "Hino",
        content: `Ó luz serena da santa Glória
do Pai celeste, imortal,
do santo e feliz Jesus Cristo,
chegando ao pôr do sol.

Ao ver a luz da tarde,
cantamos ao Pai e ao Filho
e ao Espírito Santo de Deus.
Sois digno em todo tempo
de vozes santas, ó Filho de Deus,
que dais a vida.`
      },
      {
        title: "Salmo 140(141) — Oração da tarde",
        antiphon: "Suba a minha oração como incenso na vossa presença.",
        content: `Senhor, eu vos invoco, vinde depressa!
Escutai a minha voz quando eu vos invoco!
Suba a minha oração como incenso na vossa presença,
minhas mãos erguidas, como a oferta da tarde.

Senhor, ponde uma guarda na minha boca,
vigiai a porta dos meus lábios.
Não deixeis o meu coração pender para o mal,
nem cometer ações ímpias.`,
        gloria: true
      },
      {
        title: "Cântico de Maria — Lc 1, 46-55",
        antiphon: "A minha alma engrandece o Senhor.",
        content: `A minha alma engrandece o Senhor,
e o meu espírito exulta em Deus, meu Salvador,
porque olhou para a humildade da sua serva.
Desde agora todas as gerações me chamarão bem-aventurada,

porque o Poderoso fez grandes coisas por mim:
Santo é o seu nome!
A sua misericórdia se estende de geração em geração
sobre os que o temem.

Manifestou a força do seu braço
e dispersou os orgulhosos.
Derrubou os poderosos dos seus tronos
e exaltou os humildes.

Encheu de bens os famintos
e despediu os ricos de mãos vazias.
Acolheu Israel, seu servo,
lembrando-se da sua misericórdia,

conforme prometera a nossos pais,
a Abraão e à sua descendência, para sempre.`,
        gloria: true
      },
      {
        title: "Preces",
        content: `Ao pôr do sol, elevemos as nossas preces ao Senhor misericordioso:

℣. Senhor, tende piedade de nós.
℟. Senhor, tende piedade de nós.

Dai a vossa paz ao mundo e a todos os povos.
℟. Senhor, tende piedade de nós.

Abençoai a nossa comunidade e todos os que estão unidos em oração.
℟. Senhor, tende piedade de nós.

Concedei aos que sofrem a consolação da vossa misericórdia.
℟. Senhor, tende piedade de nós.

Acolhei os nossos irmãos falecidos na vossa luz eterna.
℟. Senhor, tende piedade de nós.`
      },
      {
        title: "Pai Nosso",
        content: `Pai nosso que estais nos céus, 
santificado seja o vosso nome, 
venha a nós o vosso reino, 
seja feita a vossa vontade 
assim na terra como no céu. 

O pão nosso de cada dia nos dai hoje, 
perdoai-nos as nossas ofensas 
assim como nós perdoamos 
a quem nos tem ofendido, 
e não nos deixeis cair em tentação, 
mas livrai-nos do mal. Amém.`
      },
      {
        title: "Oração Final",
        content: `Iluminai, Senhor, a nossa noite e concedei-nos um repouso tranquilo; e fazei que amanhã nos levantemos em vosso nome, para vos servirmos com alegria. Por Nosso Senhor Jesus Cristo. Amém.`
      }
    ]
  },
  completas: {
    title: "Completas — Oração da Noite",
    intro: "Deus, vinde em meu auxílio.",
    response: "Senhor, socorrei-me sem demora.",
    sections: [
      {
        title: "Exame de Consciência",
        content: `Irmãos e irmãs, examinemos a nossa consciência e peçamos perdão a Deus pelas nossas faltas.

Eu confesso a Deus todo-poderoso e a vós, irmãos, que pequei muitas vezes por pensamentos e palavras, atos e omissões, por minha culpa, minha culpa, minha tão grande culpa. E peço à Virgem Maria, aos anjos e santos e a vós, irmãos, que rogueis por mim a Deus, nosso Senhor.`
      },
      {
        title: "Hino",
        content: `Antes que a noite venha,
a vós, Criador de tudo,
pedimos que, em vossa clemência,
sejais nossa guarda e proteção.

Afastai os maus sonhos
e as fantasias da noite;
reprimí o nosso inimigo
para que não macule os nossos corpos.`
      },
      {
        title: "Salmo 90(91) — Proteção divina",
        antiphon: "Tende piedade de mim, Senhor, e ouvi a minha oração.",
        content: `Vós que habitais na proteção do Altíssimo,
que morais à sombra do Onipotente,
dizei ao Senhor: «Meu refúgio
e minha fortaleza, meu Deus, em quem confio.»

Ele vos livra do laço do caçador
e da peste perniciosa.
Ele vos cobre com as suas asas
e debaixo delas encontrais refúgio.

Não temereis o terror noturno,
nem a seta que voa de dia,
nem a peste que caminha nas trevas,
nem o flagelo que devasta ao meio-dia.`,
        gloria: true
      },
      {
        title: "Leitura Breve — Ap 22, 4-5",
        content: `Verão a face do Senhor e trarão o seu nome gravado na fronte. Já não haverá noite; não precisarão de luz de lâmpada nem da luz do sol, porque o Senhor Deus os iluminará e eles reinarão pelos séculos dos séculos.`
      },
      {
        title: "Cântico de Simeão — Lc 2, 29-32",
        antiphon: "Salvai-nos, Senhor, quando estamos acordados, protegei-nos quando dormimos; para que vigiemos com Cristo e descansemos em paz.",
        content: `Agora, Senhor, segundo a vossa palavra,
deixai o vosso servo ir em paz;
porque os meus olhos viram a vossa salvação,
que preparastes diante de todos os povos:

luz para iluminar as nações
e glória de Israel, vosso povo.`,
        gloria: true
      },
      {
        title: "Oração Final",
        content: `Visitai, Senhor, esta casa e afastai dela todas as ciladas do inimigo; os vossos santos anjos habitem conosco e nos guardem em paz; e a vossa bênção esteja sempre sobre nós. Por Cristo, nosso Senhor. Amém.`
      },
      {
        title: "Antífona Mariana",
        content: `Salve, Rainha, Mãe de Misericórdia,
vida, doçura, esperança nossa, salve!
A vós bradamos, os degredados filhos de Eva.
A vós suspiramos, gemendo e chorando
neste vale de lágrimas.

Eia, pois, Advogada nossa,
esses vossos olhos misericordiosos a nós volvei.
E depois deste desterro
mostrai-nos Jesus, bendito fruto do vosso ventre.

Ó clemente, ó piedosa,
ó doce sempre Virgem Maria.

℣. Rogai por nós, Santa Mãe de Deus.
℟. Para que sejamos dignos das promessas de Cristo. Amém.`
      }
    ]
  }
};

export default function LiturgiaHora() {
  const { hora } = useParams();
  const content = liturgiaContent[hora];

  if (!content) {
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
          <h1 className="font-cinzel text-xl font-bold text-foreground">{content.title}</h1>
        </div>
      </div>

      {/* Opening */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8 p-5 rounded-xl bg-gradient-to-br from-primary/5 to-mercy-gold-light border border-primary/10 text-center"
      >
        <PrayerText type="rubric">℣. Versículo</PrayerText>
        <PrayerText type="body" className="mt-2 font-medium">{content.intro}</PrayerText>
        <PrayerText type="rubric" className="mt-3">℟. Resposta</PrayerText>
        <PrayerText type="response" className="mt-1">{content.response}</PrayerText>
        <div className="mt-3 pt-3 border-t border-primary/10">
          <PrayerText type="gloria">Glória ao Pai e ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.</PrayerText>
        </div>
      </motion.div>

      {/* Sections */}
      <div className="space-y-8">
        {content.sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            <PrayerText type="subtitle" className="mb-3">{section.title}</PrayerText>
            
            {section.antiphon && (
              <div className="mb-3">
                <PrayerText type="rubric">Antífona:</PrayerText>
                <PrayerText type="antiphon" className="mt-1">{section.antiphon}</PrayerText>
              </div>
            )}

            <div className="pl-1">
              {section.content.split('\n\n').map((paragraph, pi) => (
                <PrayerText key={pi} type="verse" className="mb-3">
                  {paragraph}
                </PrayerText>
              ))}
            </div>

            {section.gloria && (
              <div className="mt-3 pt-3 border-t border-border/50">
                <PrayerText type="gloria">
                  Glória ao Pai e ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.
                </PrayerText>
              </div>
            )}

            {section.antiphon && (
              <div className="mt-3">
                <PrayerText type="rubric">Antífona:</PrayerText>
                <PrayerText type="antiphon" className="mt-1">{section.antiphon}</PrayerText>
              </div>
            )}

            <div className="mt-6 border-b border-border/30" />
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-10 text-center">
        <PrayerText type="rubric">Fim da oração</PrayerText>
        <p className="mt-2 text-xs text-muted-foreground font-inter">
          "Jesus, eu confio em Vós" — Santa Faustina
        </p>
      </div>
    </div>
  );
}