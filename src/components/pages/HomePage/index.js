import React, { useState } from "react";
import { Link } from "gatsby"
import TitleChip from "@components/shared/TitleChip";
import LandingBackground from "@images/home/bg_landing_page.svg"
import SponsoringBackground from "@images/home/bg_cta.svg"
import GirlImage from "@images/home/girl.svg"
import CalendarIcon from "@images/home/calendar.svg"
import LogoImage from "@images/logo.svg"

import VirusIcon from "@images/home/covid/virus.svg";
import GearIcon from "@images/home/covid/gear.svg";
import BookIcon from "@images/home/covid/book.svg";

import InstagramIcon from "@images/home/footer/instagram.svg";
import LinkedinIcon from "@images/home/footer/linkedin.svg";
import FacebookIcon from "@images/home/footer/facebook.svg";
import TwitterIcon from "@images/home/footer/twitter.svg";
import YoutubeIcon from "@images/home/footer/youtube.svg";

import PDFLink from "../../../static/pdf/patrocinio_python_brasil.pdf"

import "./style.scss";

const emptyFaqItem = {
  question: '',
  response: ''
}

const HomePage = ({ text }) => {
  const [faqItem, setFaqItem] = useState(emptyFaqItem);

  const socialPlatforms = [
    { name: 'Instagram', icon: InstagramIcon, href: '' },
    { name: 'Facebook', icon: FacebookIcon, href: '' },
    { name: 'Linkedin', icon: LinkedinIcon, href: '' },
    { name: 'Twitter', icon: TwitterIcon, href: '' },
    { name: 'Youtube', icon: YoutubeIcon, href: '' },
  ]
  const faqItems = [
    {
      question: "What is a Payment Gateway?",
      response: ''
    },
    {
      question: "Do I need to pay to Instapay even when there is no transaction going on in my business?",
      response: 'No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!'
    },
    {
      question: "What platforms does ACME payment gateway support?",
      response: 'No, you do not need to pay Instapay where there is no transaction'
    },
    {
      question: "Does ACME provide international payments support?",
      response: ''
    },
    {
      question: "Is there any setup fee or annual maintainance fee that I need to pay regularly?",
      response: ''
    },
  ]
  const covidCards = [
    {
      title: "Vacine-se!",
      description: "Acesse site do Conecte SUS e procure uma unidade básica de saúde para atualizar seu cartão de vacina.",
      icon: VirusIcon,
    },
    {
      title: "Temperatura",
      description: "Manaus é uma cidade úmida, logo durante o mês de Outubro a Temperatura vai em torno de 30° a 38°. Venham com roupas leves!",
      icon: GearIcon,
    },
    {
      title: "Código de Conduta",
      description: "Fique atento ao código de conduta pois nosso objetivo é criar um ambiente seguro para todas as pessoas",
      icon: BookIcon,
    }
  ]

  const handleOnFaqQuestionClick = (item) => {
    setFaqItem(faqItem.question === item.question ? emptyFaqItem : item)
  }

  return (
    <div id="home">
      <section id="section-landing-page">
        <div className="container">
          <div className="row">
            <div className="call-to-action col-12 col-sm-6">
              <img src={CalendarIcon} alt="Ícone de calendário" />
              <h2>{text.LANDING_PAGE_TITLE}</h2>
              <h4>#PYTHONBRASIL2022</h4>
              <p>{text.LANDING_PAGE_INFO}</p>
              <button>
              <Link to="https://pretalx.com/python-brasil-2022/cfp">{text.LANDING_PAGE_ACTION_BUTTON}</Link>
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
            <a  href= {PDFLink}>
               {text.LANGING_PAGE_BUTTON_PATROCINIO_TEXT}  </a>
            </button>
          </div>
        </div>
        <img src={SponsoringBackground} className="background" alt="" />
      </section>
      <section id="section-covid">
        <div className="container">
          <TitleChip>Medidas sobre a COVID-19</TitleChip>
          <ul className="row">
            {covidCards.map(card => (
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
            <div className={`left-panel ${faqItem.response ? 'active' : ''}`}>
              <ul>
                {faqItems.map(item => (
                  <li className={faqItem.question === item.question ? 'active' : ''}>
                    <button onClick={() => handleOnFaqQuestionClick(item)}>
                      {item.question}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`right-panel ${faqItem.response ? 'active' : ''}`}>
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
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-3 logo-and-social">
              <img className="footerLogo" src={LogoImage} alt="Logo da Python Brasil 2022" />

              <ul className="social-platforms">
                {socialPlatforms.map(platform => (
                  <li>
                    <a href={platform.href}>
                      <img className="icon" src={platform.icon} alt={platform.name} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-12 col-sm-3">
              <p>PythonBrasil is a non-profit volunteer-driven conference for promoting the open-source Python programming language. It is supported by the Brazilian Python Association (APyB) and by the Python Software Foundation (PSF).</p>
            </div>
            <div className="col-12 col-sm-3">
              <h4>Link rápidos</h4>

              <ul className="links">
                <li><a href="/">Python Brasil 2022</a></li>
                <li><a href="/palestras">Submissão de Palestras</a></li>
                <li><a href="/schedule">Programação</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/duty">Código de Conduta</a></li>
              </ul>
            </div>
            <div className="col-12 col-sm-3">
              <h4>Endereço do Evento</h4>

              <p>Centro de Convenções do Amazonas Vasco Vasques</p>
              <br />

              <p>Av. Constantino Nery, 5001 - Flores, Manaus - AM, 69058-795</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="privacy-policy">
        <div className="container">
          <span>Política de privacidade</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
