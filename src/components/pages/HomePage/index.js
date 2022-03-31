import React from "react";
import TitleChip from "@components/shared/TitleChip";
import "./style.scss";

const HomePage = ({ text }) => {
  return (
    <div id="home">
      <section id="section-landing-page">
        <div className="container">
          <div className="row">
            <div className="call-to-action col-12 col-sm-6">
              <h2>{text.LANDING_PAGE_TITLE}</h2>
              <h4>#PYTHONBRASIL2022</h4>
              <p>{text.LANDING_PAGE_INFO}</p>
              <button>{text.LANDING_PAGE_ACTION_BUTTON}</button>
            </div>
          </div>
        </div>
      </section>
      <section id="section-info">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src="#" alt="" />
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
            <button>Ver o plano de patrocínio</button>
          </div>
        </div>
      </section>
      <section id="section-covid">
        <div className="container">
          <TitleChip>Medidas sobre a COVID-19</TitleChip>
          <ul className="row">
            <li className="col-12 col-sm-6 col-md-4">
              <div className="card">
                <img src="#" alt="Vacine-se!" />
                <h5>Vacine-se!</h5>
                <p>Acesse site do Conecte SUS e procure uma unidade básica de saúde para atualizar seu cartão de vacina.</p>
              </div>
            </li>
            <li>
              {" "}
              <img src="" alt="" />
              <h5>Temperatura</h5>
              <p>Manaus é uma cidade úmida, logo durante o mês de Outubro a Temperatura vai em torno de 30° a 38°. Venham com roupas leves!</p>
            </li>
            <li>
              {" "}
              <img src="" alt="" />
              <h5></h5>
              <p></p>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <TitleChip>FAQ</TitleChip>
            <div></div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
          </div>
          <div className="row">
            <span>Política de privacidade</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
