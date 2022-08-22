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
            <div className="col-lg-6 order-0 order-lg-1">
              <div>
                <figure className="testimonial-side-image">
                  <img src={Eduardo} alt="" />
                </figure>
              </div>
            </div>
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

                  <a href="https://www.youtube.com/dunossauro" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                    </svg>
                  </a>

                  <a href="https://twitter.com/dunossauro" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>

                </div>
              </div>
            </div>

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

                  <a href="https://www.linkedin.com/in/leportella" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>

                  <a href="https://twitter.com/leleportella" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>

                </div>
              </div>
            </div>

          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-0 order-lg-1">
              <div>
                <figure className="testimonial-side-image">
                  <img src={Mariatta} alt="" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-0">
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

                  <a href="https://www.linkedin.com/in/mariatta" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>

                  <a href="https://twitter.com/mariatta?t=b2s0LfsxqsgOVUufUgF1Rw&s=09" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Keynotes;
