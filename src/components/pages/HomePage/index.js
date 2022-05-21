import React, { useState } from "react";

import TitleChip from "@components/shared/TitleChip";
import Footer from "@components/shared/Footer";
import LandingBackground from "@images/home/bg_landing_page.svg";
import SponsoringBackground from "@images/home/bg_cta.svg";
import GirlImage from "@images/home/girl.svg";
import CalendarIcon from "@images/home/calendar.svg";

import VirusIcon from "@images/home/covid/virus.svg";
import GearIcon from "@images/home/covid/gear.svg";
import BookIcon from "@images/home/covid/book.svg";

import "./style.scss";

const emptyFaqItem = {
  question: "",
  response: "",
};

const HomePage = ({ text, file }) => {
  const [faqItem, setFaqItem] = useState(emptyFaqItem);

  const faqItems = [
    {
      question: "Evento será presencial ou on-line?",
      response:
        "Em 2022 teremos a primeira Python Brasil em formato híbrido, iremos transmitir online e ao vivo todas as palestras, keynotes, mesas redondas e palestras relâmpago.",
    },
    {
      question:
        "Preciso estar vacinado para participar presencialmente do evento?",
      response:
        "Sim! A apresentação do comprovante de vacina será necessário para a participação do evento.",
    },
  ];
  const covidCards = [
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
  ];

  const handleOnFaqQuestionClick = (item) => {
    setFaqItem(faqItem.question === item.question ? emptyFaqItem : item);
  };

  return (
    <div id="home">
      <section id="section-landing-page">
        <div className="container">
          <div className="row">
            <div className="call-to-action col-12 col-sm-6">
              <img src={CalendarIcon} alt="Ícone de calendário" />
              <h2>{text.HOME.LANDING.TITLE}</h2>
              <h4>#pybr2022</h4>
              <p>{text.HOME.LANDING.INFO}</p>
              <button>
                <a
                  className="link-sponsor"
                  href="https://pretalx.com/python-brasil-2022/cfp"
                >
                  {text.HOME.LANDING.BUTTON}
                </a>
              </button>
            </div>
          </div>
        </div>
        <img src={LandingBackground} className="background" alt="" />
      </section>
      <section id="section-info">
        <div className="container">
          <div className="row">
            <div className="col-6 image-column">
              <img src={GirlImage} alt="" />
            </div>
            <div className="col-6">
              <TitleChip>Sobre a Python BR</TitleChip>
              <div className="info">
                <p>
                  A Python Brasil 2022 é a maior conferência sobre linguagem de
                  programação Python do Brasil e da América Latina.
                </p>
                <p>
                  Serão 6 dias de imersão onde os participantes poderão
                  contribuir para projetos de software livre, participar de
                  treinamentos e adquirir novos conhecimentos com
                  desenvolvedores renomados da comunidade. A programação está
                  organizada da seguinte forma: Tutoriais (15.10 e 16.10),
                  Palestras e Keynotes(17.10 a 22.10) e Sprints (23.10).
                </p>
                <p>
                  A edição de 2022 está sendo organizada pela comunidade Python
                  de Manaus/AM (PyNorte) com o apoio da APyB (Associação Python
                  Brasil).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-sponsoring">
        <div className="container">
          <div className="row">
            <TitleChip>Saiba como patrocinar o evento</TitleChip>
            <button>
              <a className="link-sponsor" href={file}>
                {text.HOME.SPONSORING.BUTTON}
              </a>
            </button>
          </div>
        </div>
        <img src={SponsoringBackground} className="background" alt="" />
      </section>
      <section id="section-covid">
        <div className="container">
          <TitleChip>Medidas sobre a COVID-19</TitleChip>
          <ul className="row">
            {covidCards.map((card) => (
              <li className="col-12 col-sm-4 col-md-4">
                <div className="card">
                  <img src={card.icon} alt={card.title} />
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="section-faq">
        <div className="container">
          <div className="row">
            <TitleChip>FAQ</TitleChip>
          </div>
          <div className="row">
            <div className={`left-panel ${faqItem.response ? "active" : ""}`}>
              <ul>
                {faqItems.map((item) => (
                  <li
                    className={
                      faqItem.question === item.question ? "active" : ""
                    }
                  >
                    <button onClick={() => handleOnFaqQuestionClick(item)}>
                      {item.question}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`right-panel ${faqItem.response ? "active" : ""}`}>
              {faqItem.response && (
                <div className="right-panel-inner">
                  <h3>{faqItem.question}</h3>
                  <p>{faqItem.response}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer text={text} />
    </div>
  );
};

export default HomePage;
