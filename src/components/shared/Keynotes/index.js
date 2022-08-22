import React from "react";

import "./style.scss";

import TitleChip from "@components/shared/TitleChip";
import Eduardo from "@images/keynotes/eduardo.png";
import Leticia from "@images/keynotes/leticia.png";
import Mariatta from "@images/keynotes/mariatta.png";

const Keynotes = ({ text }) => {
  return (
      <section id="section-keynotes" className="content-section">
        <div className="container">
          <div className="row section-keynotes__title">
            <TitleChip>{text.HOME.KEYNOTES.TITLE}</TitleChip>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <div>
                <figure className="testimonial-side-image">
                  <img src={Leticia} alt="" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <div className="testimonial">
                  <h2>Leticia Portella</h2>
                  <p>Oceanógrafa de formação, Letícia mudou de sua formação para uma carreira em
                    Engenharia de Software e hoje trabalha na Stripe, em Dublin.
                    Desde a mudança, ela se dedica a ajudar pessoas a aprender.
                    Há 5 anos ela é co-fundadora e uma das anfitriãs do Pizza de Dados,
                    primeiro e mais amado podcast sobre ciência de dados do Brasil.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 order-1 order-lg-0">
              <div>
                <div className="testimonial">
                  <h2>Eduardo Mendes</h2>
                  <p>
                    Live coder, e-mendigo, degustador profissional de pizzas. Host da live de Python
                    há 5 anos, onde tenta democratizar o aprendizado de programação com piadas ruins
                    e litros de refrigerante. Criador de conteúdo em tempo integral e músico nas
                    horas vagas. Melhor jogador de Marvel vs Capcom da sua casa,
                    embora não exista um claro consenso sobre isso ainda.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-0 order-lg-1">
              <div>
                <figure className="testimonial-side-image">
                  <img src={Eduardo} alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <div>
                <figure className="testimonial-side-image">
                  <img src={Mariatta} alt="" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <div className="testimonial">
                  <h2>Mariatta</h2>
                  <p>
                    Mariatta is a Senior Developer Programs Engineer at Google.
                    Through her role in the Google Cloud Native Database SDK team,
                    she helps improve developer experience through developer engagement
                    and open source tools. She is a long-time open source contributor
                    and is one of the Python core developers. For her contributions in Python,
                    she received the Python Community Service Award in 2018.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Keynotes;
