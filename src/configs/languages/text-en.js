import VirusIcon from "@images/home/covid/virus.svg";
import GearIcon from "@images/home/covid/gear.svg";
import BookIcon from "@images/home/covid/book.svg";

export const TEXT_EN = {
  HOME: {
    LANDING: {
      TITLE: 'From 17 to oct 23 2022',
      INFO: 'Registration for Python Brazil 2022 can be done by the button below.',
      BUTTON: 'Event registration here'
    },
    ABOUT: {
      TITLE: "Sobre a Python BR",
      CONTENT: [
        "A Python Brasil 2022 é a maior conferência sobre linguagem de \
        programação Python do Brasil e da América Latina.",
        "Serão 7 dias de imersão onde os participantes poderão \
        contribuir para projetos de software livre, participar de \
        treinamentos e adquirir novos conhecimentos com \
        desenvolvedores renomados da comunidade. A programação está \
        organizada da seguinte forma: Tutoriais (15.10 e 16.10), \
        Palestras e Keynotes(17.10 a 22.10) e Sprints (23.10).",
        "A edição de 2022 está sendo organizada pela comunidade Python \
        de Manaus/AM (PyNorte) com o apoio da APyB (Associação Python \
        Brasil)."
      ]
    },
    KEYNOTES: {
      TITLE: "Keynotes",
    },
    SPONSORING: {
      TITLE: `Why sponsor Python Brasil 2022?`,
      BUTTON: 'See Sponsorship Options and Apply'
    },
    SPONSORINGLOGO: {
      TITLE: "OUR SPONSORS",
    },
    SUPPORTINGLOGO: {
      TITLE: "Supporting",
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
      ABOUT_TEXT: 'PythonBrasil is a non-profit volunteer-driven conference for promoting the open-source Python programming language. It is supported by the Brazilian Python Association (APyB) and by the Python Software Foundation (PSF).'
    }
  },
  CDC: {
    LANDING: {
      TITLE: `Code of Conduct`,
      INFO: [
        {
            type: "paragraph",
            content: "Python Brasil conference is a friendly, inclusive and \
            harassment-free environment where everyone is welcome and where civility is compulsory."},
        {
            type: "paragraph",
            content: "Conference organizers offer a Response Team acting in \
            order to guarantee such an environment."},
        {
            type: "paragraph",
            content: "Therefore:"
        },
        {
            type: "list",
            content: [
                "We will not tolerate harassment, inappropriate discrimination or public humiliation of any kind;",
                "We will not tolerate non-compliance with Brazilian laws;",
                "Regardless of their role every person taking part in the conference is subject to these rules."
            ]
        },
        {
            type: "paragraph",
            content: "Thus we understand:"
        },
        {
            type: "list",
            content: [
                "Harassment is the act of insisting, persecuting or coercing \
                someone into involuntary behavior.",
                "Inappropriate discrimination is the act of pulling apart, \
                insulting or humiliating someone by promoting their exclusion by any particular attribute.",
                "Public humiliation is the act of subjugating, pulling down, \
                ridiculing or publicly promoting the vexation of others."
            ]
        },
        {
            type: "paragraph",
            content: "The target audience of the conference also includes children \
            and adolescents thus we stand for a suitable environment for all age groups. \
            In that sense language and sexualized images are not suitable for lectures and \
            promotional actions by sponsors. If you feel harassed, discriminated or humiliated, \
            or if you witnessed any of these behaviors, please contact the Response Team."
        },
        {
            type: "paragraph",
            content: "In face of any allegation of violation of these principles, the Response \
            Team will examine and consider the case in order to take action to ensure that such \
            events will not happen again. These actions might take the form of a conversation to \
            reconcile the parts, an invitation to leave the event indefinitely or any other form to \
            keep up with the values stated in this Code of Conduct."
        },
    ],
    }
  }
}
