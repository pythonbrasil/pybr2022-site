import React from "react";
import { Helmet } from "react-helmet";

import TitleChip from "@components/shared/TitleChip";
import Footer from "@components/shared/Footer";
import IconTitle from "@components/shared/IconTitle";
import LandingBackground from "@images/home/bg_landing_page.svg";
import SponsoringBackground from "@images/home/bg_cta.svg";
import GirlImage from "@images/home/girl.svg";
import CalendarIcon from "@images/home/calendar.svg";
import SponsoringLogo from "@components/shared/SponsoringLogo";
import Keynotes from "@components/shared/Keynotes";

import "./style.scss";

const HomePage = ({ text, file }) => {

  const redirectToSponsor = () =>
    window.location.replace("https://www.eventbrite.com/e/python-brasil-2022-registration-356802725557");

  const faqItems = [
    {
      question: "O evento será presencial ou on-line?",
      response: "Em 2022 teremos a primeira Python Brasil em formato híbrido, iremos transmitir online e ao vivo todas as palestras, keynotes, mesas redondas e palestras relâmpago.",
    },
    {
      question: "Preciso estar vacinado para participar presencialmente do evento?",
      response: "Sim! A apresentação do comprovante de vacina será necessário para a participação do evento.",
    },
    {
      question: "Onde e quando será realizado o Python Brasil 2022?",
      response: "O evento irá ocorrer presencialmente em Manaus, no Centro de Convênções Vasco Vasques nas datas entre 17 à 23 de Outubro 2022.",
    },
    {
      question: "Quais as medidas de segurança sanitária adotadas pelo evento?",
      response: "A obrigatoriedade de comprovante de vacinações, regras de distanciamento, higienização dos espaços, cuidados com a boa ventilação dos ambientes, uma equipe dedicada ao controle de fluxo de pessoas e kits de higiene acessíveis, colocaremos os cuidados com a saúde das participantes como prioridade.",
    },
    {
      question: "Até quando posso enviar minha apresentação para Python Brasil 2022?",
      response: "Você pode submeter sua palestra até 03/07/22",
    },
    {
      question: "O que é Python Brasil 2022?",
      response: "Python Brasil é o maior evento sobre a linguagem de programação Python da América Latina. É suportado por diversos eventos locais e regionais, culminando em um encontro nacional e tinerante.",
    },
    {
      question: "Qual a programação do evento?",
      response: "A programação do evento estará disponível a partir de 15/07/22 no site e nas redes sociais.",
    },
    {
      question: "O evento é apenas em português?",
      response: "O evento contará com tradução simultânea espanhol-português e intérpretes de Libras em palestras, keynotes e mesas redondas.",
    },
    {
      question: "O que é Job Fair?",
      response: "Job Fair é uma feira de empregos, onde as empresas mostram como e onde elas atuam, além de conversar sobre vagas e o que esperam de quem submete.",
    },
    {
      question: "Como participar do Job Fair?",
      response: "Basta olhar o horário da empresa que você deseja participar e entrar no canal de voz Job Fair",
    },
    {
      question: "O Job Fair fica gravado?",
      response: "Não, acontece ao vivo pelo Discord. Caso não consiga participar em um dia, olhe o horário dos dias seguintes.",
    },
  ];

  return (
    <div id="home">
      <Helmet title="Python Brasil 2022" />

      <section id="section-landing-page">
        <div className="container">
          <div className="row desktop-only">
            <div className="call-to-action col-12 col-sm-6">
              <IconTitle
                icon={CalendarIcon}
                title={text.HOME.LANDING.TITLE}
                isHome
              />
              <p>{text.HOME.LANDING.INFO}</p>
              <button type="button" onClick={redirectToSponsor}>
                {text.HOME.LANDING.BUTTON}
              </button>
            </div>
          </div>

          <div className="section-landing-page__content tablet-only">
            <IconTitle
              icon={CalendarIcon}
              title={text.HOME.LANDING.TITLE}
              isHome
            />
            <p>{text.HOME.LANDING.INFO}</p>
            <button onClick={redirectToSponsor}>
              {text.HOME.LANDING.BUTTON}
            </button>
          </div>
        </div>
        <img
          src={LandingBackground}
          className="desktop-only background"
          alt=""
        />
      </section>
      <section id="section-info">
        <div className="container">
          <div className="row section-info__content">
            <div className="tablet-only section-info__title">
              <TitleChip>{text.HOME.ABOUT.TITLE}</TitleChip>
            </div>
            <div className="col-6 image-column desktop-only">
              <img src={GirlImage} alt="" />
            </div>
            <div className="col-6 section-info__about">
              <div className="desktop-only">
                <TitleChip>{text.HOME.ABOUT.TITLE}</TitleChip>
              </div>
              <div className="info">
                <img
                  src={GirlImage}
                  alt=""
                  className="section-info__image tablet-only"
                />
                {text.HOME.ABOUT.CONTENT.map((item) => (
                  <p key={item}>{item} </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Keynotes text={text} />

      <section id="section-sponsoring">
        <div className="container">
          <div className="row section-sponsoring__title">
            <TitleChip>{text.HOME.SPONSORING.TITLE}</TitleChip>
          </div>
          <button>
            <a className="link-sponsor" href={file}>
              {text.HOME.SPONSORING.BUTTON}
            </a>
          </button>
        </div>
        <img src={SponsoringBackground} className="background" alt="" />
      </section>

      <SponsoringLogo text={text} />

      <section id="section-covid">
        <div className="container">
          <TitleChip>{text.HOME.COVID.TITLE}</TitleChip>
          <ul className="row">
            {text.HOME.COVID.CONTENT.map((card) => (
              <li className="col-12 col-sm-4 col-md-4" key={card.title}>
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
            <div className="col-12">
              <TitleChip>FAQ</TitleChip>
            </div>
          </div>
          <div className="row">
            <ul>
              {faqItems.map((item) => (
                <li key={item.question}>
                  <details className="expander">
                    <summary className="summary">{item.question}</summary>
                    <div className="content">{item.response}</div>
                  </details>
                  <hr />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer text={text} />
    </div>
  );
};

export default HomePage;
