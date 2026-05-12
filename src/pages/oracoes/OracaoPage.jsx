import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import PrayerText from "../../components/prayer/PrayerText";

const oracoes = {
  // ── EXISTENTES ────────────────────────────────────────────────────
  "terco": {
    title: "Terço da Divina Misericórdia",
    sections: [
      { title: "Sinal da Cruz", content: "Em nome do Pai, e do Filho, e do Espírito Santo. Amém." },
      { title: "Oração Inicial", content: `Expirastes, Jesus, mas a fonte de vida jorrou para as almas e o oceano de misericórdia abriu-se para o mundo inteiro. Ó Fonte de Vida, insondável Misericórdia Divina, abarcai o mundo inteiro e derramai-vos sobre nós.\n\nÓ Sangue e Água que jorrastes do Coração de Jesus como fonte de Misericórdia para nós, eu confio em Vós! (3x)` },
      { title: "Pai Nosso", content: "Pai nosso que estais nos céus, santificado seja o vosso nome, venha a nós o vosso reino, seja feita a vossa vontade assim na terra como no céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém." },
      { title: "Ave Maria", content: "Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora da nossa morte. Amém." },
      { title: "Creio", content: "Creio em Deus Pai todo-poderoso, Criador do Céu e da terra; e em Jesus Cristo, seu único Filho, nosso Senhor; que foi concebido pelo poder do Espírito Santo, nasceu da Virgem Maria; padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos Céus, está sentado à direita de Deus Pai todo-poderoso, de onde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo, na Santa Igreja Católica, na comunhão dos Santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. Amém." },
      { title: "Nas contas grandes (1x)", rubric: "Nas contas do Pai Nosso, reze:", content: "Eterno Pai, eu Vos ofereço o Corpo e Sangue, Alma e Divindade de Vosso diletíssimo Filho, Nosso Senhor Jesus Cristo, em expiação dos nossos pecados e do mundo inteiro." },
      { title: "Nas contas pequenas (10x)", rubric: "Nas contas da Ave Maria, reze:", content: "Pela Sua dolorosa Paixão, tende misericórdia de nós e do mundo inteiro." },
      { title: "Ao final (3x)", content: "Deus Santo, Deus Forte, Deus Imortal, tende piedade de nós e do mundo inteiro." },
      { title: "Oração Final", content: "Ó Deus Eterno, em quem a misericórdia é infinita e inesgotável o tesouro de compaixão, olhai benigno para nós e aumentai em nós a Vossa misericórdia, para que nos momentos difíceis não nos desesperemos nem nos deixemos abater, mas com grande confiança nos submetamos à Vossa Santa Vontade, que é o próprio Amor e a própria Misericórdia. Amém." }
    ]
  },
  "novena": {
    title: "Novena da Divina Misericórdia",
    sections: [
      { title: "Introdução", content: `Jesus pediu a Santa Faustina que fizesse uma novena antes da Festa da Misericórdia. A novena começa na Sexta-feira Santa. Jesus prometeu: "Por meio desta novena, concederei toda espécie de graças às almas."` },
      { title: "Primeiro Dia — Toda a humanidade", rubric: "Intenção: Pela humanidade inteira, especialmente pelos pecadores", content: `"Hoje, trazei-Me toda a humanidade, especialmente todos os pecadores, e mergulhai-os no oceano da Minha misericórdia."\n\nMisericordiosíssimo Jesus, cuja natureza é ter compaixão de nós e perdoar-nos, não olheis para os nossos pecados, mas para a confiança que depositamos na Vossa infinita bondade e acolhei-nos na morada do Vosso Coração Compassivo.\n\nEterno Pai, olhai com olhos misericordiosos para toda a humanidade e, pela Sua dolorosa Paixão, mostrai-nos a Vossa misericórdia. Amém.` },
      { title: "Segundo Dia — Sacerdotes e religiosos", rubric: "Intenção: Pelas almas dos sacerdotes e religiosos", content: `"Hoje, trazei-Me as almas dos sacerdotes e religiosos e mergulhai-as na Minha insondável misericórdia."\n\nMisericordiosíssimo Jesus, de quem procede tudo o que é bom, aumentai a Vossa graça em nós, para que pratiquemos obras de misericórdia dignas.\n\nEterno Pai, olhai com olhos misericordiosos para os eleitos da Vossa vinha e enchei-os da força da Vossa bênção. Amém.` },
      { title: "Terceiro Dia — Cristãos devotos e fiéis", rubric: "Intenção: Por todas as almas cristãs devotas e fiéis", content: `"Hoje, trazei-Me todas as almas devotas e fiéis e mergulhai-as no oceano da Minha misericórdia."\n\nMisericordiosíssimo Jesus, que a todos concedeis abundantemente as Vossas graças, acolhei-nos na morada do Vosso Coração Compassivo e não nos deixeis sair dele por toda a eternidade. Amém.` },
      { title: "Reze o Terço da Misericórdia após cada dia", content: "Após cada dia da novena, reze o Terço da Divina Misericórdia." }
    ]
  },
  "hora-misericordia": {
    title: "Hora da Misericórdia",
    sections: [
      { title: "Oração das 15h", rubric: "Reze todos os dias às 15 horas", content: `"Às três horas, implora a Minha misericórdia, especialmente para os pecadores, e, nem que seja por um breve momento, mergulha na Minha Paixão, especialmente no Meu abandono na hora da agonia." (Diário, 1320)` },
      { title: "Oração", content: `Ó Jesus, Vós mesmo vos encarregastes da proteção do mundo inteiro naquela hora. A Vossa agonia no Horto, o Vosso suor de Sangue, as blasfêmias e insultos sofridos, as quedas sob a Cruz, o dilaceramento das Vossas Santas Carnes, tudo isto é pela nossa Salvação.\n\nMisericordioso Salvador, por amor das almas frias e pecadoras, não recuais diante de tão terríveis tormentos. O Vosso Sangue redentor cobre a terra inteira.\n\nJesus, nesta hora, Vós tudo podeis dar, a quem vos pede. Eu vos peço as graças da Vossa inesgotável misericórdia.` },
      { title: "Jaculatória", content: `Ó Sangue e Água que jorrastes do Coração de Jesus como fonte de Misericórdia para nós, eu confio em Vós! (3x)\n\nJesus, eu confio em Vós!` }
    ]
  },

  // ── ORAÇÕES DA MANHÃ ─────────────────────────────────────────────
  "oracoes-manha": {
    title: "Orações da Manhã",
    sections: [
      { title: "Abertura", content: "Que o poder da Vossa Misericórdia, Senhor,\nSeja glorificado no mundo todo,\nQue a sua honra nunca cesse!\nAnuncia com ardor, alma minha,\na misericórdia divina. (D. 1298)" },
      { title: "Ato de Adoração", content: "Meu Deus, eu Vos adoro e Vos amo com todo o meu coração. Agradeço-Vos por me terdes criado, feito cristão e conservado a vida nesta noite. Ofereço-Vos as ações deste dia: fazei que sejam todas segundo a vossa santa Vontade e para a vossa maior glória. Preservai-me do pecado e de todo o mal. A vossa graça esteja sempre comigo e com todos os que me são caros. Amém." },
      { title: "Ato de Fé", content: "Meu Deus, porque sois infalível verdade, creio firmemente em tudo o que revelastes e que a santa Igreja nos ensina. Expressamente creio em Vós, único e verdadeiro Deus, em Três Pessoas iguais e distintas: Pai, Filho e Espírito Santo. E creio em Jesus Cristo, Filho de Deus, que encarnou e morreu por nós, o qual dará a cada um, segundo os méritos, o prêmio ou o castigo eterno. Conforme a esta fé eu quero viver e morrer. Senhor, aumentai a minha fé." },
      { title: "Ato de Esperança", content: "Meu Deus, espero da vossa bondade, pelas vossas promessas e pelos méritos de Jesus Cristo, Nosso Salvador, a vida eterna e as graças necessárias para merecê-la com as boas obras que eu devo e quero fazer. Senhor, que eu possa contemplar-Vos por toda a eternidade." },
      { title: "Ato de Caridade", content: "Meu Deus, porque sois a infinita bondade e a nossa felicidade eterna, eu Vos amo de todo o meu coração sobre todas as coisas, e, por vosso amor, amo também o meu próximo como a mim mesmo e perdoo as ofensas recebidas. Senhor, fazei que eu Vos ame cada vez mais." },
      { title: "Para pedir a Fidelidade ao Carisma", content: `Ó Santíssima Trindade, quantas vezes o meu peito respirar, quantas vezes o meu coração bater, quantas vezes o meu sangue pulsar em mim, outras tantas mil vezes desejo adorar Vossa misericórdia.\n\nDesejo transformar-me todo em Vossa misericórdia, para tornar-me o Vosso reflexo vivo, ó meu Senhor!\n\nAjudai-me, Senhor, para que os meus olhos sejam misericordiosos, de modo que eu jamais suspeite nem julgue as pessoas pela aparência externa.\nAjudai-me, Senhor, para que os meus ouvidos sejam misericordiosos, de modo que eu esteja atento às necessidades dos meus irmãos.\nAjudai-me, Senhor, para que a minha língua seja misericordiosa, de modo que eu nunca fale mal dos meus irmãos.\nAjudai-me, Senhor, para que as minhas mãos sejam misericordiosas e transbordantes de boas obras.\nAjudai-me, Senhor, para que os meus pés levem sem descanso ajuda aos meus irmãos.\nAjudai-me, Senhor, para que o meu coração seja misericordioso e se torne sensível a todos os sofrimentos do próximo.\n\nÓ meu Jesus, transformai-me em Vós, porque Vós tudo podeis. Amém. (D. 163)` },
      { title: "Oferecimento do Dia", content: `Senhor, fazei que eu seja todos os dias um instrumento válido nas Vossas mãos.\nHoje o meu dia será todo uma verdadeira união convosco, praticando a paciência e a caridade para com todos.\nTodos os meus sofrimentos eu Vo-los ofereço pela Igreja e pelos sacerdotes e pelas almas consagradas.\nQuero que hoje o meu dia seja todo um cântico de louvor a Deus, fazendo a Sua santa vontade.\nEm todas as circunstâncias repetirei: seja feita a vontade de Deus. Amém.` },
      { title: "Oração a Nossa Senhora", content: "A minha alma será perfumada de céu, se for tocada por Vós, ó Maria. Afastai para longe de mim todos os apegos ao pecado, todos os resíduos de mal que fermentam no fundo da minha alma.\nFazei-me respirar uma atmosfera de pureza, de bondade e de virtude.\nE fazei que todo o meu dia se cumpra segundo os desejos do vosso puríssimo Coração. Amém." },
      { title: "Consagração ao Coração Imaculado (Sábados)", content: "Ó Maria, minha Mãe amabilíssima, eu o vosso filho ofereço-me hoje a Vós, e consagro para sempre ao Vosso Imaculado Coração toda a minha vida, o meu corpo com todas as suas misérias, a minha alma com todas as suas fraquezas, o meu coração com todos os seus afetos e desejos, todas as minhas orações, fadigas, amores, sofrimentos e lutas, e em modo especial a minha morte.\n\nÓ minha Mãe, tudo isto uno para sempre e irrevogavelmente ao Vosso amor, às Vossas lágrimas, aos Vossos sofrimentos!\n\nMinha Mãe dulcíssima, lembrai-Vos deste vosso filho e não me abandonardes enquanto eu não estiver convosco na glória. Amém." },
      { title: "Aos Corações de Jesus e Maria", content: `Pai nosso, Ave Maria, Glória.\n\nDoce Coração do meu Jesus,\nR. Fazei que eu Vos ame cada vez mais.\n\nDoce Coração de Maria,\nR. Sede a minha salvação.` },
      { title: "Invocação aos Santos Protetores", content: `Pai nosso, Ave Maria, Glória.\n\nSão José — Rogai por nós!\nSão Miguel Arcanjo — Rogai por nós!\nSão Francisco de Assis — Rogai por nós!\nSão Bento de Nursia — Rogai por nós!\nSão Charbel Makhlouf — Rogai por nós!\nSão Pio de Pietralcina — Rogai por nós!\nSão João Paulo II — Rogai por nós!\nSanta Faustina Kowalska — Rogai por nós!\nSanta Rita de Cássia — Rogai por nós!\nSanta Teresa de Calcutá — Rogai por nós!\nBem-aventurado Miguel Sopocko — Rogai por nós!\nServa de Deus Lúcia de Jesus — Rogai por nós!` },
      { title: "Oração a São José (Quartas-feiras)", content: "A vós, São José, recorremos em nossa tribulação e, depois de ter implorado o auxílio de vossa santíssima esposa, cheios de confiança solicitamos também o vosso patrocínio. Por esse laço sagrado de caridade que vos uniu à Virgem Imaculada, Mãe de Deus, e pelo amor paternal que tivestes ao Menino Jesus, ardentemente suplicamos que lanceis um olhar benigno sobre a herança que Jesus Cristo conquistou com Seu sangue.\n\nProtegei, ó guarda providente da divina família, a raça eleita de Jesus Cristo. Afastai para longe de nós a peste do erro e do vício. Assisti-nos na luta contra o poder das trevas.\n\nAmparai a cada um de nós com o vosso constante patrocínio, a fim de que possamos viver virtuosamente, morrer piedosamente e obter no céu a eterna bem-aventurança. Amém." },
      { title: "Pela Igreja e pelos Sacerdotes", content: "Ó meu Jesus, peço-Vos por toda a Igreja, concedei-lhe o amor e a luz do Espírito Santo, dai força às palavras dos sacerdotes para que os corações endurecidos se enterneçam e voltem a Vós, Senhor.\n\nSenhor, dai-nos santos sacerdotes! Sustentai-os Vós mesmo na santidade!\n\nÓ Divino e Sumo Sacerdote, que o poder da Vossa misericórdia os acompanhe em toda parte e os defenda das armadilhas do demônio.\n\nQue o poder da Vossa misericórdia, Senhor, destrua e aniquile tudo aquilo que possa obscurecer a santidade do sacerdote, porque Vós tudo podeis. Amém. (D.1052)" },
      { title: "Por toda a Humanidade", content: "Ó Deus de grande misericórdia, bondade infinita, eis que hoje a Humanidade toda clama do abismo da sua miséria à Vossa misericórdia.\n\nÓ Deus clemente, não rejeiteis a oração dos exilados desta Terra.\n\nQue o poder da Vossa misericórdia nos defenda dos ataques dos inimigos da nossa salvação, para que aguardemos com confiança a Vossa vinda última.\n\nEsperamos alcançar tudo o que Jesus nos prometeu, apesar de toda a nossa miséria, porque Jesus é a nossa Confiança; pelo Seu Coração misericordioso, como por uma porta aberta, entraremos no Céu. Amém. (D. 1570)" },
      { title: "Oração pelas Vocações para o Movimento", content: "Virgem Santíssima, Mãe de Misericórdia, nós vossos filhos, devotos do vosso Coração Imaculado, confiamos ao Vosso Coração Materno todo o nosso Movimento; tornai-o forte e defendei-o dos ataques do mundo inimigo. E para que se difunda a devoção à Divina Misericórdia e ao Vosso Imaculado Coração, dai-nos tantas vocações, santas vocações que por meio de Vós levem Jesus ao mundo. Amém.\n\nAve Maria." }
    ]
  },

  // ── ORAÇÕES DA TARDE ─────────────────────────────────────────────
  "oracoes-tarde": {
    title: "Orações da Tarde",
    sections: [
      { title: "Ato de Consagração a Maria (S. Faustina)", content: "Maria, minha Mãe e Senhora, entrego-Vos a minha alma e o meu corpo, a minha vida e a minha morte e tudo o que vier depois dela.\nDeposito tudo em Vossas mãos, ó minha Mãe.\nCobri a minha alma com o Vosso manto virginal e concedei-me a graça da pureza do coração, da alma e do corpo.\nDefendei-me com Vosso poder de todos os inimigos.\nÓ lindo Lírio, Vós sois para mim o espelho, ó minha Mãe! (D. 79)" },
      { title: "São Miguel Arcanjo", content: "São Miguel Arcanjo, defendei-nos neste combate; sede a nossa guarda contra a maldade e ciladas do demônio. Instante e humildemente vos pedimos que Deus sobre ele impere, e vós, Príncipe da milícia celeste, com esse poder divino precipitai no inferno a Satanás e aos outros espíritos malignos, que vagueiam pelo mundo para perdição das almas. Amém." },
      { title: "Pelas Vocações Religiosas e Sacerdotais", content: "Ó Mãe de Misericórdia e todos os nossos Santos Protetores, enviai-nos numerosas e santas vocações religiosas e sacerdotais, para que se irradie por todo o mundo a devoção e o culto à Divina Misericórdia e ao Coração Imaculado de Maria.\n\nTornai os corações dos jovens abertos e disponíveis aos apelos da chamada divina, para que respondam generosamente ao suave convite de Jesus: \"Vem e segue-me\".\n\nDai-lhes a virtude da fortaleza e a coragem para renunciarem à carne, ao mundo e ao demônio, para seguirem ao Divino Mestre mais de perto. Amém." }
    ]
  },

  // ── ORAÇÕES DA NOITE ─────────────────────────────────────────────
  "oracoes-noite": {
    title: "Orações da Noite",
    sections: [
      { title: "Exame de Consciência", rubric: "Fazei um exame de consciência geral sobre todos pensamentos, palavras e ações do dia.", content: "" },
      { title: "Ato de Contrição", content: "Meu Deus, porque sois infinitamente bom e Vos amo de todo o meu coração, pesa-me de Vos ter ofendido, e, com o auxílio da Vossa divina graça, proponho firmemente emendar-me e nunca mais Vos tornar a ofender; peço e espero o perdão das minhas culpas pela Vossa infinita misericórdia. Amém." },
      { title: "Ato de Contrição alternativo", content: "Ó meu Jesus crucificado, eis o Vosso mísero servo aos vossos pés. Eu me arrependo de tantas infidelidades e renovo o propósito de Vos amar. Na chaga do Vosso Coração bendito coloco o meu coração, cheio de fraquezas; perdoai todas as suas faltas e inflamai-o com o Vosso santo amor.\n\nTornai, Ó bom Jesus, todo o meu ser numa coisa só convosco. Fazei que eu Vos seja um fiel servo na terra. E depois deixai que o Vosso servo venha a contemplar-Vos no Céu. Amém." },
      { title: "Oração de Encerramento do Dia", content: "Meu Deus, eu Vos adoro e Vos amo com todo o meu coração. Agradeço-Vos por me terdes criado, feito cristão e conservado neste dia. Perdoai o mal que hoje cometi e se fiz algum bem, aceitai-o. Guardai-me no repouso, livrai-me de todo o perigo. A vossa graça esteja sempre comigo e com todos os que me são caros. Amém.\n\n(Pai Nosso, Ave Maria, Glória)" },
      { title: "Jesus, José e Maria", content: `Jesus, José e Maria,\nR. Dou-vos meu coração e a alma minha.\n\nJesus, José e Maria,\nR. Assisti-me na última agonia.\n\nJesus, José e Maria,\nR. Expire em paz com vós a alma minha.` },
      { title: "Memorare — Lembrai-Vos", content: "Lembrai-Vos, ó piíssima Virgem Maria, que nunca se ouviu dizer que algum daqueles que tenha recorrido à Vossa proteção, implorado a Vossa assistência e reclamado o Vosso socorro, fosse por Vós desamparado.\nAnimado eu, pois, com igual confiança, a Vós, ó Virgem entre todas singular, como a Mãe recorro.\nNão desprezeis as minhas súplicas, ó Mãe do Filho de Deus Humanado, mas dignai-Vos de as ouvir propícia e de me alcançar o que Vos rogo. Amém." },
      { title: "Oração por uma morte feliz", content: "Ó meu Jesus, que os últimos dias do exílio sejam inteiramente conforme a Vossa santíssima vontade.\nUno os meus sofrimentos, amarguras e a própria agonia com a Vossa santa Paixão e ofereço-me pelo Mundo inteiro, pedindo a abundância da misericórdia de Deus para as almas. Confio firmemente e submeto-me inteiramente à santa vontade, que é a própria Misericórdia. (D. 1574)\n\nÓ Sangue e Água que jorrastes do Coração de Jesus como fonte de insondável misericórdia para mim, na hora da minha morte, ó Jesus agonizante, refém da misericórdia, aplacai a ira de Deus na hora da minha morte. Amém. (D. 813)" },
      { title: "Orações Opcionais antes de Dormir", content: "Todas as palpitações do meu coração desta noite, os movimentos e os respiros, tudo é vosso como ato de amor e tudo ofereço a Vós, ó Mãe, como uma contínua coroa.\nDando o meu coração a Vós, ó minha Mãe, e pousando os meus lábios sobre as chagas do meu Jesus crucificado, com Vós repouso e me adormento.\n\nSanto Anjo do Senhor, meu zeloso guardador, pois a ti me confiou a piedade divina, hoje e sempre me governa, rege, guarda e ilumina. Amém.\n\nDai-lhes, Senhor, o eterno descanso, entre os esplendores da luz perpétua. Descansem em paz. Amém." }
    ]
  },

  // ── ORAÇÕES PARA VÁRIAS CIRCUNSTÂNCIAS ──────────────────────────
  "visita-sacramento": {
    title: "Na Visita ao Santíssimo Sacramento",
    sections: [
      { title: "Entrada", content: "Graças e louvores se deem a todo momento,\nAo Santíssimo e Diviníssimo Sacramento.\n\nGlória ao Pai." },
      { title: "Meu Deus, eu creio", content: "Meu Deus, eu creio, adoro, espero e amo-Vos. Peço-Vos perdão para os que não creem, não adoram, não esperam e não Vos amam." },
      { title: "Santíssima Trindade", content: "Santíssima Trindade, Pai, Filho e Espírito Santo, adoro-Vos profundamente e ofereço-Vos o Preciosíssimo Corpo, Sangue, Alma e Divindade de Jesus Cristo, presente em todos os Sacrários da terra em reparação dos ultrajes, sacrilégios e indiferenças com que Ele mesmo é ofendido. E pelos méritos infinitos do seu Sacratíssimo Coração e do Coração Imaculado de Maria peço-Vos a conversão dos pobres pecadores." },
      { title: "Comunhão Espiritual", content: "Meu Jesus, creio que estais presente no Santíssimo Sacramento. Amo-Vos sobre todas as coisas e desejo-Vos na minha alma. Já que agora não Vos posso receber sacramentalmente, vinde ao menos espiritualmente ao meu coração... (uma breve pausa).\n\nComo já vindo, abraço-Vos e uno-me todo a Vós. Não permitais que venha a separar-me de Vós." },
      { title: "Diante do Santíssimo", content: "Senhor meu Jesus Cristo, que pelo amor que tendes para com os homens, ficais aqui noite e dia neste Sacramento, todo cheio de piedade e de amor, esperando, chamando e acolhendo todos aqueles que vêm para visitar-Vos; eu creio que estais presente no Sacramento do Altar, adoro-Vos do abismo do meu nada e agradeço-Vos por todas as graças que me destes.\n\nMeu Jesus, eu amo-Vos com todo o coração, arrependome das muitas vezes que dei desgosto à Vossa bondade infinita. Proponho, com a Vossa graça, nunca mais Vos ofender daqui em diante. Recomendo-Vos as almas do Purgatório, especialmente as mais devotas do Santíssimo Sacramento e de Maria Santíssima. Amém. (Santo Afonso)" },
      { title: "No Fim da Visita", content: "Santíssima Virgem Imaculada, Maria, minha Mãe, a Vós que sois a Mãe do meu Senhor, a Rainha do Mundo, a advogada, a esperança, o refúgio dos pecadores recorro hoje eu, que sou o mais miserável de todos.\n\nEu vos amo, Senhora amabilíssima, e pelo amor que vos tenho, prometo servir-vos sempre. Em Vós depois de Jesus, ponho todas as minhas esperanças, toda minha salvação.\n\nMinha Mãe, pelo amor que tendes a Deus vos rogo que me ajudeis sempre, mormente no último instante de minha vida. Não me desampareis enquanto não me virdes salvo no céu, a bendizer-vos e a cantar as vossas misericórdias por toda a eternidade. Assim espero, assim seja. (Santo Afonso)" }
    ]
  },
  "apos-missa": {
    title: "Após a Santa Missa",
    sections: [
      { title: "Oração Pós-Missa", content: "Conservarei a minha alma em paz com Deus e rezarei pela paz no mundo.\nNas minhas aflições nunca procurarei o conforto do mundo, mas diante de Jesus Sacramentado, no silêncio e na oração.\nQuero abandonar-me no Coração de Jesus como um menino que repousa no coração da mãe. Pedirei a graça de morrer amando Deus com todas as minhas forças, repetindo frequentemente na minha vida a afirmação de amor com a qual eu quero morrer: \"Meus Deus, eu Vos amo\"." },
      { title: "Louvor final (3x)", content: "Graças e louvores se deem a todo momento,\nAo Santíssimo e Diviníssimo Sacramento." }
    ]
  },
  "refeicoes": {
    title: "Orações para as Refeições",
    sections: [
      { title: "Antes da Refeição", content: "Senhor, dai a vossa santa bênção a nós e ao alimento que agora tomaremos, para manter-nos no vosso santo serviço, e tornai-nos atentos também a quem não tem.\n\nBendita seja a Santa e Imaculada Conceição da bem-aventurada Virgem Maria, Mãe de Deus." },
      { title: "Agradecimento depois da Refeição", content: "Senhor, nós vos agradecemos pelo alimento que nos destes, dai-nos a graça de podermos servir-nos dele sempre para o bem.\n\nBendita seja a Santa e Imaculada Conceição da bem-aventurada Virgem Maria, Mãe de Deus." }
    ]
  },
  "saindo-chegando": {
    title: "Saindo e Chegando em Casa",
    sections: [
      { title: "Saindo de Casa", content: "À vossa proteção recorremos, Santa Mãe de Deus. Não desprezeis as nossas súplicas em nossas necessidades, mas livrai-nos de todos os perigos, ó Virgem gloriosa e bendita.\n\nSanto Anjo do Senhor, meu zeloso guardador, se a ti me confiou a piedade divina, sempre me rege, me guarde, me governe e me ilumine. Amém.\n\nDai-lhes, Senhor, o eterno descanso. Entre os esplendores da luz perpétua, descanse em paz. Amém.\n\nV. Jesus, José e Maria,\nR. Acompanhai-nos por toda via. (3x)" },
      { title: "Chegando em Casa", content: "Nós Vos agradecemos, Senhor, pela ajuda que nos destes, acompanhai-nos sempre com a vossa graça." }
    ]
  },
  "vinde-espirito": {
    title: "Vinde, Espírito Criador",
    sections: [
      { title: "Antes da Meditação", rubric: "Rezar todos os dias antes da meditação", content: `Ó vinde, Espírito Criador,\nas nossas almas visitai\ne enchei os nossos corações\ncom vossos dons celestiais.\n\nVós sois chamado o Intercessor\ndo Deus excelso o dom sem parar,\na fonte viva, o fogo, o amor,\na unção divina e salutar.\n\nSois doador dos sete dons,\ne sois poder na mão do Pai,\npor ele prometido a nós,\npor nós seus feitos proclamai.\n\nA nossa mente iluminai,\nos corações enchei de amor,\nnossa fraqueza encorajai,\nqual força eterna e protetor.\n\nNosso inimigo repeli,\ne concedei-nos vossa paz;\nse pela graça nos guiais,\no mal deixamos para trás.\n\nAo Pai e o Filho Salvador\npor vós possamos conhecer.\nQue procedeis do seu amor\nfazei-nos sempre firmes crer.` },
      { title: "Versículo e Oração", content: "Enviai, Senhor, o Vosso Espírito e tudo será criado.\nE renovareis a face da terra.\n\nOremos: Ó Deus, que instruístes os corações dos Vossos fiéis com a luz do Espírito Santo, fazei que apreciemos retamente todas as coisas segundo este mesmo Espírito e gozemos sempre de Sua consolação. Por Cristo, Nosso Senhor. Amém." }
    ]
  },

  // ── TERÇOS / DEVOÇÕES ────────────────────────────────────────────
  "terco-mariano": {
    title: "Terço Mariano",
    sections: [
      { title: "Abertura", content: `V. O nosso auxílio está no nome do Senhor.\nR. Que fez o céu e a terra.\n\nGlória ao Pai.\n\n"Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno. Levai as almas todas para o Céu, principalmente as que mais precisarem."` },
      { title: "Mistérios Gozosos — Segunda e Sábado", content: "1. A Anunciação do Anjo Gabriel a Nossa Senhora\n2. A Visitação da V. Maria a sua prima S. Isabel\n3. O Nascimento do menino Jesus na gruta de Belém\n4. A Apresentação do menino Jesus no templo\n5. A perda e o encontro de Jesus no templo entre os doutores" },
      { title: "Mistérios Luminosos — Quinta-feira", content: "1. Jesus é batizado no rio Jordão\n2. Jesus revela-se nas Bodas de Caná\n3. Jesus anuncia o Reino de Deus com o convite à conversão\n4. A Transfiguração de Jesus no Monte Tabor\n5. Jesus institui a Eucaristia" },
      { title: "Mistérios Dolorosos — Terça e Sexta-feira", content: "1. A Agonia de Jesus no Horto das Oliveiras\n2. A flagelação de Jesus\n3. A coroação de espinhos\n4. A subida de Jesus ao Monte Calvário\n5. A Crucifixão e morte do Senhor" },
      { title: "Mistérios Gloriosos — Quarta e Domingo", content: "1. A Ressurreição de Jesus\n2. A Ascensão de Jesus ao Céu\n3. A Descida do Espírito Santo\n4. A Assunção de Nossa Senhora ao Céu\n5. A Coroação de N. Senhora como Rainha do Céu e da Terra" },
      { title: "Salve Rainha", content: "Salve, Rainha, Mãe de Misericórdia,\nvida, doçura, esperança nossa, salve!\nA vós bradamos, os degredados filhos de Eva.\nA vós suspiramos, gemendo e chorando\nneste vale de lágrimas.\n\nEia, pois, Advogada nossa,\nesse vosso olhos misericordiosos a nós volvei.\nE depois deste desterro\nmostrai-nos Jesus, bendito fruto do vosso ventre.\n\nÓ clemente, ó piedosa, ó doce sempre Virgem Maria." },
      { title: "Pelas intenções do Movimento", content: "Pelos Servos da Divina Misericórdia: Ave Maria\nMãe de misericórdia e Mãe de amor — R. Renovai o coração de todos como Jesus quer.\n\nPelas Servas da Mãe Divina Misericórdia: Ave Maria\nMãe de misericórdia e Mãe de amor — R. Renovai o coração de todos como Jesus quer.\n\nPelos Filhos(as) da Divina Misericórdia: Ave Maria\nMãe de misericórdia e Mãe de amor — R. Renovai o coração de todos como Jesus quer.\n\nImaculado Coração de Maria, rogai por nós.\nSantos Jacinta e Francisco Marto, rogai por nós.\nServa de Deus Lúcia de Jesus e do Coração Imaculado, rogai por nós." }
    ]
  },
  "terco-providencia": {
    title: "Terço da Divina Providência",
    sections: [
      { title: "Início", content: "CREDO" },
      { title: "Nas contas grandes", content: "Mãe da Divina Providência,\nR. Providenciai!" },
      { title: "Nas contas pequenas", content: "Deus provê, Deus proverá,\nR. Sua misericórdia não faltará!" },
      { title: "Oração Final", content: "Vinde Maria, chegou o momento. Valei-nos agora e em todo o tormento. Mãe da Providência, prestai-nos auxílio no sofrimento da terra e no exílio. Mostrai que sois Mãe de Amor e de Bondade, agora que é grande a necessidade. Amém.\n\nSão José, Rogai por nós!\nSanta Teresa de Calcutá, Rogai por nós!" }
    ]
  },
  "cinco-sabados": {
    title: "Os Cinco Primeiros Sábados do Mês",
    sections: [
      { title: "Sobre a devoção", content: `Esta devoção foi indicada pela Virgem Santíssima, que apareceu com o Menino Jesus a Irmã Lúcia, e tem o objetivo de reparar as ofensas feitas ao Coração Imaculado de Maria.\n\n"Olha, minha filha, o meu Coração cercado de espinhos que os homens ingratos, a todos os momentos me cravam, com blasfêmias e ingratidões. Tu, ao menos, vê de me consolar e diz que todos aqueles que durante cinco meses, ao primeiro sábado se confessarem, recebendo a Sagrada Comunhão, rezarem um Terço e me fizerem quinze minutos de companhia, meditando nos quinze mistérios do Rosário, com o fim de me desagravar, eu prometo assisti-los na hora da morte com todas as graças necessárias para a salvação dessas almas." (N. Senhora a Irmã Lúcia, 10 de dezembro de 1925)` },
      { title: "Por que cinco sábados?", content: "São cinco as espécies de ofensas e blasfêmias contra o Coração Imaculado de Maria:\n1. As blasfêmias contra a Imaculada Conceição\n2. Contra a sua Virgindade\n3. Contra a Maternidade Divina\n4. O ultraje dos que infundem no coração das crianças a indiferença contra esta Mãe Imaculada\n5. A ofensa dos que a ultrajam diretamente nas suas santas imagens" },
      { title: "Condições Requeridas", content: "1. Confissão com intenção reparadora — a confissão pode ser feita vários dias antes ou depois do primeiro sábado.\n2. Comunhão reparadora\n3. Recitação do Terço meditando os mistérios — a meditação de quinze minutos pode fazer-se sobre um ou mais mistérios." }
    ]
  },

  // ── NOVENA DE FÁTIMA ─────────────────────────────────────────────
  "novena-fatima": {
    title: "Novena a Nossa Senhora de Fátima",
    sections: [
      { title: "1º Dia", content: "Ó Virgem Santíssima, para dar ao nosso sofrido século um sinal dos vossos ternos cuidados maternos, vos agradastes escolher os fracos para confundir os fortes, aparecendo a três pastorinhos do ignorado lugarejo de Fátima.\n\nÓ Mãe boa, fazei-nos compreender e saborear a Palavra de Jesus: \"Se não vos tornardes como crianças, não entrareis no Reino dos Céus\".\n\nAve Maria... Nossa Senhora de Fátima, rogai por nós." },
      { title: "2º Dia", content: "Ó Virgem Santíssima, levada pelo amor da humanidade, viestes para nos exortar a fazer penitência dos nossos pecados e a mudar de vida para conseguir a felicidade eterna do Céu.\n\nÓ Mãe boa, nós vos agradecemos por tanta maternal solicitude e vos pedimos para que nos tenhais estreitos ao vosso Coração.\n\nAve Maria... Nossa Senhora de Fátima, rogai por nós." },
      { title: "3º Dia", content: "Ó Virgem Santíssima, vós assegurastes a salvação eterna aos pequenos confidentes e o vosso Imaculado Coração seria o refúgio e o caminho que os teria conduzido a Deus.\n\nÓ Mãe boa, concedei também a nós a mesma graça, para que, refugiados no Vosso Imaculado Coração, possamos consolá-lo com o nosso amor e a nossa fidelidade.\n\nAve Maria... Nossa Senhora de Fátima, rogai por nós." },
      { title: "4º Dia", content: "Ó Virgem Santíssima, em Fátima nos revelastes como os castigos temporais são bem pouca coisa diante do tremendo castigo da perdição eterna.\n\nÓ Mãe boa, dai-nos o santo temor de Deus e ajudai-nos a aceitar, com o coração humilde e contrito, os castigos temporais, para evitar as penas eternas.\n\nAve Maria... Nossa Senhora de Fátima, rogai por nós." },
      { title: "5º Dia", content: "Ó Virgem Santíssima, nós acolhemos o vosso apelo, oferecendo os nossos pequenos sacrifícios e as cruzes quotidianas em espírito de reparação e repetindo: \"Ó Jesus é por vosso amor, pela conversão dos pecadores e em reparação às ofensas feitas ao Imaculado Coração de Maria\".\n\nAve Maria... Nossa Senhora de Fátima, rogai por nós." },
      { title: "6º Dia", content: "Ó Virgem Santíssima, com as vossas aparições em Fátima, vos alegrastes de encorajar a nossa frágil fé. Ajudai-nos para que a nossa mente esteja sempre submetida às verdades reveladas por Deus, de tal modo que possamos merecer o elogio de Jesus: \"Bem aventurados os que creem sem nunca ter visto\".\n\nAve Maria... Nossa Senhora de Fátima, rogai por nós." },
      { title: "7º Dia", content: "Ó Virgem Santíssima, na última aparição vos revelastes como Nossa Senhora do Rosário. Tornai-nos dóceis ao vosso convite, dai-nos a graça de uma verdadeira conversão, inspirai-nos amor e filial compromisso pela recitação do santo Terço.\n\nSalve Rainha... Nossa Senhora de Fátima, rogai por nós." }
    ]
  },

  // ── CONSAGRAÇÕES ─────────────────────────────────────────────────
  "consagracao-familia": {
    title: "Consagração ao Coração Imaculado de Maria",
    sections: [
      { title: "Consagração da Família da Divina Misericórdia", content: `"Hoje esta comunidade da Família da Divina Misericórdia, prostrados diante da Vossa Imagem devota para responder a Vossa mensagem de salvação, consagra-se ao Vosso Imaculado Coração.\n\nConfiamos a Vós o nosso Movimento, porque Vós sois o refúgio onde cada um de nós, e a nossa comunidade, encontrará a paz e a salvação.\n\nNós nos consagramos porque Vós sois o caminho que nos conduzirá ao encontro com Deus e com seu Filho Jesus Cristo.\n\nNós nos empenhamos em viver o nosso carisma da Divina Misericórdia e a mensagem de Fátima na oração, na penitência e em modo particular vivendo a Eucaristia.\n\nNós Vos pedimos o dom de perseverança. Toda a nossa vida e as nossas obras de apostolado estão nas Vossas mãos. Fazei-nos santos e levai-nos todos ao Paraíso. Amém."` }
    ]
  },
  "consagracao-fatima": {
    title: "Consagração à Virgem de Fátima",
    sections: [
      { title: "Consagração", content: "Ó Virgem de Fátima, Mãe de misericórdia, Rainha do Céu e da terra, refúgio dos pecadores, eu me consagro ao vosso Imaculado Coração. Consagro-Vos o meu coração, a minha alma, a minha família, todas as minhas coisas.\n\nE para que esta consagração seja verdadeiramente eficaz e duradoura, renovo hoje as promessas do meu Batismo e da minha Crisma, empenhando-me a viver como bom cristão, fiel a Deus, à Igreja, ao Papa. Quero recitar o rosário, participar da Eucaristia, dar importância ao primeiro sábado do mês e trabalhar para a conversão dos pecadores.\n\nPrometo-Vos ainda, ó Virgem santíssima, zelar o vosso culto bendito para apressar o advento do Reino de Jesus no mundo. Amém." }
    ]
  },
  "consagracao-mae-deus": {
    title: "Consagração à Mãe de Deus",
    sections: [
      { title: "Consagração (Irmã Lúcia)", content: "Virgem Mãe de Deus e nossa Mãe, consagro-me inteiramente ao Vosso Coração Imaculado, com tudo o que sou e possuo.\n\nTomai-me sob a vossa maternal proteção, defendei-me dos perigos, ajudai-me a vencer as tentações que me solicitam para o mal e a conservar a pureza do meu corpo e da minha alma. O vosso Coração Imaculado seja o meu refúgio e o caminho que me conduz a Deus.\n\nConcedei-me a graça de rezar e de sacrificar-me por amor de Jesus, pela conversão dos pecadores e em reparação dos pecados cometidos contra o vosso Imaculado Coração.\n\nPor meio de Vós e em união ao vosso Divino Filho quero viver para a glória da Santíssima Trindade, na qual eu creio, espero, a qual adoro e amo. Amém.\n\nIrmã Lúcia" },
      { title: "Para pedir uma graça", content: "Mãe de misericórdia e Mãe de Amor\nPeço esta graça ao vosso Coração." }
    ]
  },

  // ── LADAINHAS ────────────────────────────────────────────────────
  "ladainha-nossa-senhora": {
    title: "Ladainha de Nossa Senhora",
    sections: [
      { title: "Exceto quarta e sexta-feira", content: "Senhor, tende piedade de nós.\nCristo, tende piedade de nós.\nSenhor, tende piedade de nós.\nCristo, ouvi-nos.\nCristo, atendei-nos." },
      { title: "Invocações a Maria", content: `Santa Maria — rogai por nós.\nSanta Mãe de Deus — rogai por nós.\nSanta Virgem das virgens — rogai por nós.\nMãe de Cristo — rogai por nós.\nMãe da Igreja — rogai por nós.\nMãe da Divina graça — rogai por nós.\nMãe puríssima — rogai por nós.\nMãe castíssima — rogai por nós.\nMãe imaculada — rogai por nós.\nMãe sempre virgem — rogai por nós.\nMãe amável — rogai por nós.\nMãe admirável — rogai por nós.\nMãe do bom conselho — rogai por nós.\nMãe do Criador — rogai por nós.\nMãe do Salvador — rogai por nós.\nMãe de Misericórdia — rogai por nós.\nVirgem prudentíssima — rogai por nós.\nVirgem venerável — rogai por nós.\nVirgem louvável — rogai por nós.\nVirgem poderosa — rogai por nós.\nVirgem clemente — rogai por nós.\nVirgem fiel — rogai por nós.\nEspelho de justiça — rogai por nós.\nSede da sabedoria — rogai por nós.\nCausa da nossa alegria — rogai por nós.\nRosa mística — rogai por nós.\nTorre de Davi — rogai por nós.\nTorre de marfim — rogai por nós.\nCasa de ouro — rogai por nós.\nArca da aliança — rogai por nós.\nPorta do Céu — rogai por nós.\nEstrela da manhã — rogai por nós.\nSaúde dos enfermos — rogai por nós.\nRefúgio dos pecadores — rogai por nós.\nConsoladora dos aflitos — rogai por nós.\nAuxílio dos Cristãos — rogai por nós.\nRainha dos Anjos — rogai por nós.\nRainha dos Patriarcas — rogai por nós.\nRainha dos Profetas — rogai por nós.\nRainha dos Mártires — rogai por nós.\nRainha dos Confessores — rogai por nós.\nRainha das Virgens — rogai por nós.\nRainha de todos os santos — rogai por nós.\nRainha concebida sem pecado original — rogai por nós.\nRainha assunta ao Céu — rogai por nós.\nRainha do Santíssimo Rosário — rogai por nós.\nRainha da família — rogai por nós.\nRainha da paz — rogai por nós.` },
      { title: "Encerramento", content: "Cordeiro de Deus, que tirais o pecado do mundo, Perdoai-nos, Senhor.\nCordeiro de Deus, que tirais o pecado do mundo, Ouvi-nos, Senhor.\nCordeiro de Deus, que tirais o pecado do mundo, Tende piedade de nós.\n\nRogai por nós Santa Mãe de Deus,\nPara que sejamos dignos das promessas de Cristo.\n\nOremos: Concedei, Senhor, aos vossos servos a perfeita saúde da alma e do corpo; e, por intercessão da Virgem Maria, livrai-nos das tristezas deste mundo e dai-nos as alegrias do Céu. Por Nosso Senhor Jesus Cristo, Vosso Filho, na unidade do Espírito Santo. Amém." }
    ]
  },
  "ladainha-sagrado-coracao": {
    title: "Ladainha do Sagrado Coração de Jesus",
    sections: [
      { title: "Todas as sextas-feiras", content: "Senhor, tende piedade de nós.\nCristo, tende piedade de nós.\nSenhor, tende piedade de nós.\nCristo, ouvi-nos.\nCristo, atendei-nos." },
      { title: "Invocações", content: `Coração de Jesus, Filho do Pai Eterno — tende piedade de nós.\nCoração de Jesus, formado pelo Espírito Santo no seio de Virgem Maria — tende piedade de nós.\nCoração de Jesus, unido substancialmente ao Verbo de Deus — tende piedade de nós.\nCoração de Jesus, majestade infinita — tende piedade de nós.\nCoração de Jesus, templo santo de Deus — tende piedade de nós.\nCoração de Jesus, tabernáculo do Altíssimo — tende piedade de nós.\nCoração de Jesus, casa de Deus e porta do Céu — tende piedade de nós.\nCoração de Jesus, fornalha ardente de caridade — tende piedade de nós.\nCoração de Jesus, fonte de justiça e de amor — tende piedade de nós.\nCoração de Jesus, cheio de bondade e de amor — tende piedade de nós.\nCoração de Jesus, abismo de todas as virtudes — tende piedade de nós.\nCoração de Jesus, digníssimo de todo o louvor — tende piedade de nós.\nCoração de Jesus, Rei e centro de todos os corações — tende piedade de nós.\nCoração de Jesus, paciente e de muita misericórdia — tende piedade de nós.\nCoração de Jesus, rico para com todos os que Vos invocam — tende piedade de nós.\nCoração de Jesus, fonte de vida e santidade — tende piedade de nós.\nCoração de Jesus, obediente até à morte — tende piedade de nós.\nCoração de Jesus, traspassado pela lança — tende piedade de nós.\nCoração de Jesus, fonte de toda consolação — tende piedade de nós.\nCoração de Jesus, nossa vida e ressurreição — tende piedade de nós.\nCoração de Jesus, nossa paz e reconciliação — tende piedade de nós.\nCoração de Jesus, salvação dos que em Vós esperam — tende piedade de nós.\nCoração de Jesus, esperança dos que morrem no vosso amor — tende piedade de nós.\nCoração de Jesus, delícia de todos os Santos — tende piedade de nós.` },
      { title: "Encerramento", content: "Cordeiro de Deus, que tirais o pecado do mundo, Perdoai-nos, Senhor.\nCordeiro de Deus, que tirais o pecado do mundo, Ouvi-nos, Senhor.\nCordeiro de Deus, que tirais o pecado do mundo, Tende piedade de nós.\n\nJesus, manso e humilde de coração,\nFazei o nosso coração semelhante ao Vosso.\n\nOremos: Deus de bondade, que no Coração do vosso Filho, ferido pelos nossos pecados, nos abristes os tesouros infinitos do vosso amor, fazei que, prestando-Lhe a homenagem fervorosa da nossa piedade, cumpramos também o dever de uma digna reparação. Amém." }
    ]
  },
  "ladainha-sao-jose": {
    title: "Ladainha de São José",
    sections: [
      { title: "Todas as quartas-feiras", content: "Senhor, tende piedade de nós.\nCristo, tende piedade de nós.\nSenhor, tende piedade de nós.\nCristo, ouvi-nos.\nCristo, atendei-nos." },
      { title: "Invocações", content: `Santa Maria — rogai por nós.\nSão José — rogai por nós.\nIlustre descendente de Davi — rogai por nós.\nLuz dos Patriarcas — rogai por nós.\nCastíssimo guarda da Virgem — rogai por nós.\nPai nutrício do Filho de Deus — rogai por nós.\nZeloso defensor de Jesus — rogai por nós.\nChefe da Sagrada Família — rogai por nós.\nJosé justíssimo — rogai por nós.\nJosé castíssimo — rogai por nós.\nJosé prudentíssimo — rogai por nós.\nJosé fortíssimo — rogai por nós.\nJosé obedientíssimo — rogai por nós.\nJosé fidelíssimo — rogai por nós.\nEspelho de paciência — rogai por nós.\nAmante da pobreza — rogai por nós.\nModelo dos trabalhadores — rogai por nós.\nGlória da vida de família — rogai por nós.\nConsolação dos infelizes — rogai por nós.\nSustentáculo das famílias — rogai por nós.\nEsperança dos enfermos — rogai por nós.\nPadroeiro dos moribundos — rogai por nós.\nTerror dos demônios — rogai por nós.\nProtetor da Santa Igreja — rogai por nós.` },
      { title: "Encerramento", content: "Cordeiro de Deus, que tirais o pecado do mundo, Perdoai-nos, Senhor.\nCordeiro de Deus, que tirais o pecado do mundo, Ouvi-nos, Senhor.\nCordeiro de Deus, que tirais o pecado do mundo, Tende piedade de nós.\n\nEstabeleceu-o Senhor da sua casa.\nE príncipe de todos os seus bens.\n\nOremos: Senhor, que nos renovastes com o vosso dom, fazei que vivamos em santidade e justiça, auxiliados pelo exemplo e intercessão de São José, o homem justo e obediente. Por Nosso Senhor Jesus Cristo. Amém." }
    ]
  },

  // ── ORAÇÕES LATIM ────────────────────────────────────────────────
  "oracoes-latim": {
    title: "Orações em Latim",
    sections: [
      { title: "Pater Noster", content: "Pater noster, qui es in caelis, sanctificetur nomen tuum; adveniat regnum tuum; fiat voluntas tua, sicut in caelo et in terra.\nPanem nostrum cotidianum da nobis hodie; et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris; et ne nos inducas in tentationem; sed libera nos a malo. Amen." },
      { title: "Ave Maria", content: "Ave Maria, gratia plena, Dominus tecum; benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus. Sancta Maria, Mater Dei, ora pro nobis peccatoribus nunc et in hora mortis nostrae. Amen." },
      { title: "Gloria Patri", content: "Gloria Patri et Filio et Spiritui Sancto. Sicut erat in principio, et nunc et semper, et in saecula saeculorum. Amen." },
      { title: "Salve Regina", content: "Salve Regina, mater misericordiae; vita, dulcedo et spes nostra, salve. Ad te clamamus, exules filii Evae. Ad te suspiramus, gementes et flentes in hac lacrimarum valle. Eia ergo, advocata nostra, illos tuos misericordes oculos ad nos converte. Et Iesum, benedictum fructum ventris tui, nobis post hoc exsilium ostende. O clemens, o pia, o dulcis Virgo Maria." },
      { title: "Angele Dei", content: "Angele Dei, qui custos es mei, me, tibi commíssum pietáte supérna, illúmina, custódi, rege et gubérna. Amen." },
      { title: "Requiem Aeternam", content: "Requiem aeternam dona eis, Domine, et lux perpetua luceat eis. Requiescant in pace. Amen." },
      { title: "Veni Creator Spiritus", content: "Veni, creator Spiritus,\nmentes tuorum visita,\nimple superna gratia,\nquae tu creasti, pectora.\n\nQui diceris Paraclitus,\naltissimi donum Dei,\nfons vivus, ignis, caritas,\net spiritalis unctio.\n\nAccende lumen sensibus,\nInfunde amorem cordibus,\ninfirma nostri corporis\nvirtute firmans perpeti.\n\nHostem repellas longius\npacemque dones protinus:\nductore sic te praevio\nvitemus omne noxium.\n\nPer te sciamus da Patrem\nnoscamus atque Filium,\nte utriusque Spiritum\ncredamus omni tempore. Amen.\n\nEmitte spiritum tuum et creabuntur\nEt renovabis faciem terrae.\n\nOremus: Deus, qui corda fidelium Sancti Spiritus illustratione docuisti: da nobis in eodem Spiritu recta sapere, et de eius semper consolatione gaudere. Per Christum Dominum nostrum. Amen." }
    ]
  },

  // ── EXISTENTES CONVENTO / SEMINÁRIO ─────────────────────────────
  "manha-convento": {
    title: "Oração da Manhã do Convento",
    sections: [
      { title: "Oferecimento do Dia", content: "Senhor Jesus Cristo, Rei da Misericórdia, ao começar este novo dia, ofereço-Vos todos os meus pensamentos, palavras e obras. Que tudo o que eu fizer hoje seja para a Vossa maior glória e para a salvação das almas.\n\nVirgem Maria, Mãe da Divina Misericórdia, cobri-me com o Vosso manto protetor e guiai os meus passos ao longo deste dia." },
      { title: "Consagração à Divina Misericórdia", content: "Ó Misericordiosíssimo Jesus,\na Vós entrego todo o meu ser:\no meu corpo, a minha alma, as minhas forças.\nSede o Senhor absoluto de toda a minha vida.\n\nDirigi os meus sentidos,\ngovernai a minha vontade,\niluminai a minha inteligência,\ninflamai o meu coração com o fogo do Vosso amor.\n\nQue este dia seja vivido inteiramente\nsegundo a Vossa santa vontade. Amém." }
    ]
  },
  "angelus": {
    title: "Angelus",
    sections: [
      { title: "Oração do Angelus", content: `O Anjo do Senhor anunciou a Maria.\nR. E Ela concebeu do Espírito Santo.\n\nAve Maria...\n\nEis a Serva do Senhor.\nR. Faça-se em mim segundo a vossa palavra.\n\nAve Maria...\n\nE o Verbo se fez Carne.\nR. E habitou entre nós.\n\nAve Maria...\n\nRogai por nós, Santa Mãe de Deus.\nPara que sejamos dignos das promessas de Cristo.\n\nOremos: Infundi, Senhor, a vossa graça em nossas almas, para que nós, que pela Anunciação do Anjo conhecemos a Encarnação de Jesus Cristo, vosso Filho, pela sua Paixão e Morte na cruz sejamos conduzidos à glória da ressurreição. Pelo mesmo Cristo Nosso Senhor. Amém.\n\nGlória ao Pai (3X)` }
    ]
  },
  "regina-coeli": {
    title: "Regina Coeli — Tempo Pascal",
    sections: [
      { title: "Antífona Mariana Pascal", content: "Rainha do Céu, alegrai-Vos, Aleluia!\nPorque Aquele que merecestes trazer em Vosso seio, Aleluia!\nRessuscitou, como disse, Aleluia!\nRogai por nós a Deus, Aleluia!\n\nAlegrai-Vos e exultai, Ó Virgem Maria, Aleluia!\nPorque o Senhor ressuscitou verdadeiramente, Aleluia!\n\nOremos: Ó Deus, que Vos dignastes alegrar o mundo com a Ressurreição de Vosso Filho, nosso Senhor Jesus Cristo, concedei-nos que por intercessão de Sua Mãe, a Virgem Maria, alcancemos os gozos da vida eterna. Por Cristo nosso Senhor. Amém.\n\nGlória ao Pai (3X)" }
    ]
  },
  "noite-convento": {
    title: "Oração da Noite do Convento",
    sections: [
      { title: "Exame de Consciência", content: "Senhor, na Vossa presença, examino a minha consciência ao fim deste dia.\n\nOnde encontrei a Vossa misericórdia hoje?\nOnde fui instrumento da Vossa misericórdia para os outros?\nOnde falhei em corresponder ao Vosso amor?\n\nPeço-Vos perdão, Senhor, por todas as minhas faltas de hoje. Confio na Vossa misericórdia infinita." },
      { title: "Oração de Entrega", content: "Jesus Misericordioso, entrego-Vos este dia que termina, com todas as suas alegrias e provações. Cubro com o Vosso Preciosíssimo Sangue todos os momentos deste dia.\n\nGuardai-nos, Senhor, durante a noite. Que o Vosso anjo da guarda nos proteja e nos conduza a um descanso reparador.\n\nMaria, Mãe da Divina Misericórdia, guardai-nos debaixo do Vosso manto. Amém." }
    ]
  },
  "seminarista": {
    title: "Oração do Seminarista",
    sections: [
      { title: "Oração pelas Vocações", content: "Senhor Jesus Cristo, Sumo e Eterno Sacerdote, guardai os vossos sacerdotes e seminaristas na proteção do Vosso Sagrado Coração.\n\nConservai sem mancha as suas mãos ungidas, que tocam diariamente o Vosso Corpo Santíssimo. Conservai puros os seus lábios, corados com o Vosso Preciosíssimo Sangue.\n\nConservai puros e livres de toda a ligação terrena os seus corações, marcados com o selo sublime do sacerdócio.\n\nQue o Vosso amor os proteja de todo o contágio do mundo. Abençoai os seus trabalhos com frutos abundantes e que as almas a quem servem sejam a sua alegria e a sua consolação aqui na terra e a sua coroa eterna no Céu. Amém." }
    ]
  },
  "consagracao-maria": {
    title: "Consagração a Nossa Senhora da Divina Misericórdia",
    sections: [
      { title: "Consagração", content: "Ó Maria, Mãe da Divina Misericórdia, a Vós eu me consagro inteiramente: o meu corpo, a minha alma, os meus bens e tudo o que sou.\n\nVós que sois a Mãe de Jesus, o Rei da Misericórdia, ensinai-me a ser misericordioso como o vosso Filho. Ajudai-me a confiar sem limites na infinita bondade de Deus.\n\nCobri-me com o Vosso manto de Mãe e apresentai-me ao Vosso Filho Misericordioso. Que eu viva e morra sob a Vossa proteção maternal.\n\nÓ Mãe da Divina Misericórdia, rogai por nós que recorremos a Vós. Amém." },
      { title: "Ladainha a Nossa Senhora", content: "Santa Maria, rogai por nós.\nSanta Mãe de Deus, rogai por nós.\nMãe da Divina Misericórdia, rogai por nós.\nMãe da Igreja, rogai por nós.\nMãe dos sacerdotes, rogai por nós.\nMãe dos consagrados, rogai por nós.\nRainha da Paz, rogai por nós.\nRainha de todos os Santos, rogai por nós.\n\nAmém." }
    ]
  }
};

export default function OracaoPage() {
  const { oracao } = useParams();
  const content = oracoes[oracao];

  if (!content) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <p className="text-muted-foreground">Oração não encontrada.</p>
        <Link to="/oracoes" className="text-primary text-sm mt-2 inline-block">← Voltar</Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 pb-24 lg:pb-8 lg:py-12">
      <div className="flex items-center gap-3 mb-6">
        <Link to="/oracoes" className="p-2 rounded-lg hover:bg-muted transition-colors">
          <ArrowLeft className="w-4 h-4 text-muted-foreground" />
        </Link>
        <h1 className="font-cinzel text-xl font-bold text-foreground">{content.title}</h1>
      </div>

      <div className="space-y-8">
        {content.sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
          >
            <PrayerText type="subtitle" className="mb-3">{section.title}</PrayerText>
            {section.rubric && (
              <PrayerText type="rubric" className="mb-2">{section.rubric}</PrayerText>
            )}
            {section.content && section.content.split('\n\n').map((paragraph, pi) => (
              <PrayerText key={pi} type="verse" className="mb-3 whitespace-pre-line">
                {paragraph}
              </PrayerText>
            ))}
            <div className="mt-6 border-b border-border/30" />
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <PrayerText type="rubric">Fim da oração</PrayerText>
        <p className="mt-2 text-xs text-muted-foreground font-inter">
          "Jesus, eu confio em Vós"
        </p>
      </div>
    </div>
  );
}