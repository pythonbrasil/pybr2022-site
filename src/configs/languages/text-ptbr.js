import VirusIcon from "@images/home/covid/virus.svg";
import GearIcon from "@images/home/covid/gear.svg";
import BookIcon from "@images/home/covid/book.svg";

export const TEXT_PTBR = {
  HOME: {
    LANDING: {
      TITLE: `17 a 23 de Outubro 2022`,
      INFO: `A submissão de palestras para o Python Brasil 2022 pode ser feita pelo botão abaixo.`,
      BUTTON: `Submeta sua palestra aqui`,
    },
    ABOUT: {
      TITLE: "Sobre a Python BR",
      CONTENT: [
        "A Python Brasil 2022 é a maior conferência sobre linguagem de \
        programação Python do Brasil e da América Latina.",
        "Serão 6 dias de imersão onde os participantes poderão \
        contribuir para projetos de software livre, participar de \
        treinamentos e adquirir novos conhecimentos com \
        desenvolvedores renomados da comunidade.A programação está organizada da seguinte forma: Tutoriais e Sṕrints (17.10 a 19.10), \
        e Palestras e Keynotes(20.10 a 23.10).",
        "A edição de 2022 está sendo organizada pela comunidade Python \
        de Manaus/AM com o apoio da APyB (Associação Python \
        Brasil)."
      ]
    },
    SPONSORING: {
      TITLE: "Saiba como patrocinar o evento",
      BUTTON: `Veja nosso plano de patrocínio`,
    },
    COVID: {
      TITLE: "Medidas sobre a COVID-19",
      CONTENT: [
        {
          title: "Vacine-se!",
          description:
            "Acesse site do Conecte SUS e procure uma unidade básica de saúde para atualizar seu cartão de vacina.",
          icon: VirusIcon,
        },
        {
          title: "Temperatura",
          description:
            "Manaus é uma cidade úmida, logo durante o mês de Outubro a Temperatura vai em torno de 30° a 38°. Venham com roupas leves!",
          icon: GearIcon,
        },
        {
          title: "Código de Conduta",
          description:
            "Fique atento ao código de conduta pois nosso objetivo é criar um ambiente seguro para todas as pessoas",
          icon: BookIcon,
        },
      ]
    },
    FOOTER: {
      ABOUT_TEXT: `Python Brasil é uma conferência sem fins lucrativos dirigida por voluntários para promover a linguagem de programação Python de código aberto. É apoiado pela Associação Python Brasil (APyB).`,
    },
  },
  CDC: {
    LANDING: {
      TITLE: `Código de Conduta`,
      INFO: [
        {
            type: "paragraph",
            content: "O evento Python Brasil é um ambiente amistoso, de boa \
        convivência, inclusivo e livre de intimidação, onde todas as \
        pessoas são bem-vindas e a civilidade é exigida."},
        {
            type: "paragraph",
            content: "Com esta finalidade, a organização do evento conta com uma \
        Equipe de Resposta que atua para garantir um ambiente com essas \
        qualidades."},
        {
            type: "paragraph",
            content: "Por isso:"
        },
        {
            type: "list",
            content: [
                "Não é tolerado nenhum tipo de assédio, discriminação \
                inapropriada ou humilhação pública;",
                "Não é tolerado o descumprimento das leis brasileiras;",
                "Toda pessoa presente no evento, independente do seu papel, \
                está sujeita a estas regras."
            ]
        },
        {
            type: "paragraph",
            content: "Desta forma, entendemos que:"
        },
        {
            type: "list",
            content: [
                "Assédio é a ação de insistir, perseguir ou coagir outra pessoa \
                a um comportamento involuntário.;",
                "Discriminação inapropriada é o ato de separar, injuriar ou \
                humilhar alguém promovendo sua exclusão por atributo \
                particular da mesma.",
                "Humilhação pública é o ato de submeter, rebaixar, \
                ridicularizar ou promover o vexame de outro publicamente."
            ]
        },
        {
            type: "paragraph",
            content: "O público alvo do evento também inclui crianças e adolescentes, \
            por isso buscamos manter um ambiente apropriado para todas as \
            faixas etárias. Sendo assim, linguagem e imagens sexualizadas \
            não são adequados para palestras e ações promocionais de \
            patrocinadores."
        },
        {
            type: "paragraph",
            content: "Se você se sentiu assediado, discriminado indevidamente ou \
            humilhado, ou presenciou alguma destas atitudes, por favor entre \
            em contato com a Equipe de Resposta."
        },
        {
            type: "paragraph",
            content: "Havendo um relato de violação destes princípios, a Equipe de \
            Resposta realizará a devida análise e, quando necessário, tomará \
            as ações para impedir a reincidência. Estas ações podem, mas não \
            se restringem nem implicam em ir desde uma conversa em busca da \
            retratação até um convite a se retirar do evento por tempo \
            indeterminado."
        },
    ],
    },
  },
};
