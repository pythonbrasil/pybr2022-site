import VirusIcon from "@images/home/covid/virus.svg";
import GearIcon from "@images/home/covid/gear.svg";
import BookIcon from "@images/home/covid/book.svg";

export const TEXT_ES = {
  HOME: {
    LANDING: {
      TITLE: `17 al 23 de octubre 2022`,
      INFO: `El registro para Python Brasil 2022 se puede hacer con el botón abajo.`,
      BUTTON: `Regístrese para el evento aquí`,
    },
    ABOUT: {
      TITLE: "Sobre el Python BR",
      CONTENT: [
        "Python Brasil 2022 es una importante conferencia  \
        sobre el lenguaje de programación Python de Brasil y América Latina.",
        "Serán 7 días de inmersión donde los participantes podrán  \
        contribuir en proyectos de software libre, participar en  \
        capacitaciones y adquirir nuevos conocimientos con desarrolladores  \
        de renombre dentro de la comunidad. El programa está organizado  \
        de la siguiente manera: Tutoriales y Sprints (17.10 a 19.10), Lectures &  \
        Keynotes (20.10 a 23.10)",
        "La edición de 2022 está organizada por la comunidad Python de   \
        Manaus/AM con el apoyo de APyB (Asociación Python Brasil)."
      ]
    },
    KEYNOTES: {
      TITLE: "Keynotes",
    },
    SPONSORING: {
      TITLE: `¿Cómo patrocinar el evento?`,
      BUTTON: 'Acceda a nuestros Planes de Patrocinio'
    },
    SPONSORINGLOGO: {
      TITLE: "Patrocinadores",
    },
    SUPPORTINGLOGO: {
      TITLE: "Apoyo",
    },
    COVID: {
      TITLE: "Medidas sobre a COVID-19",
      CONTENT: [
        {
          title: "¡Vacúnate!",
          description:
            "Visita el sitio web de Conect SUS y busque una unidad básica de salud (UBS) para actualizar su tarjeta de vacunas.",
          icon: VirusIcon,
        },
        {
          title: "Temperatura",
          description:
            "Manaus es una ciudad húmeda, por lo que durante el mes de octubre la temperatura ronda los 30° a 38°. ¡Ven con ropa ligera!",
          icon: GearIcon,
        },
        {
          title: "Código de Conducta",
          description:
            "Preste atención al código de conducta ya que nuestro objetivo es crear un entorno seguro para todas las personas.",
          icon: BookIcon,
        },
      ]
    },
    FOOTER: {
      ABOUT_TEXT: 'Python Brasil es una conferencia sin fines de lucro dirigida por voluntarios para promover el lenguaje de programación Python de código abierto. Cuenta con el apoyo de la Asociación Python Brasil (APyB) y la Python Software Foundation (PSF).'
    }
  },
  CDC: {
    LANDING: {
      TITLE: `Código de Conducta`,
      INFO: [
        {
            type: "paragraph",
            content: "El evento Python Brasil es un ambiente amigable, acogedor, \
            inclusivo y libre de intimidaciones, donde todas las personas son \
            bienvenidas y se requiere cortesía."},
        {
            type: "paragraph",
            content: "Para ello, la organización del evento cuenta con un \
            Equipo de Respuesta que trabaja para garantizar un entorno con estas cualidades."},
        {
            type: "paragraph",
            content: "Por eso:"
        },
        {
            type: "list",
            content: [
                "No se tolera el acoso, la discriminación inapropiada o la humillación pública;",
                "No se tolera el incumplimiento de las leyes brasileñas;",
                "Toda persona presente en el evento, independientemente de su función, \
                está sujeta a estas reglas."
            ]
        },
        {
            type: "paragraph",
            content: "De esta forma, entendemos que:"
        },
        {
            type: "list",
            content: [
                "El acoso es la acción de insistir, perseguir o coaccionar a \
                otra persona a un comportamiento involuntario.",
                "La discriminación inapropiada es el acto de separar, injuriar \
                o humillar a alguien promoviendo su exclusión por atributo particular de la misma.",
                "La humillación pública es el acto de someter, rebajar, ridiculizar \
                o promover la vergüenza de otro en público."
            ]
        },
        {
            type: "paragraph",
            content: "El público objetivo del evento también incluye niños y \
            adolescentes, por lo que buscamos mantener un ambiente apropiado para \
            todos los grupos de edad. Como tal, el lenguaje y las imágenes sexualizadas \
            no son adecuados para charlas de patrocinio y actividades promocionales."
        },
        {
            type: "paragraph",
            content: "Si se ha sentido acosado, discriminado o humillado indebidamente, \
            o si ha sido testigo de alguna de estas actitudes, comuníquese con el Equipo de Respuesta"
        },
        {
            type: "paragraph",
            content: "Habiendo un relato de violación de estos principios, el Equipo de \
            Respuesta realizará el debida análisis y, cuando sea necesario, tomará las acciones \
            para impedir la reincidencia. Estas acciones pueden, pero no se restringen ni implican \
            en ir desde una conversación en busca de la retractación hasta una invitación a retirarse \
            del evento por tiempo indeterminado."
        },
    ],
    },
  },
};
