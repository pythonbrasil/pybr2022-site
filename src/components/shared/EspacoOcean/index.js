import React from "react";

import "./style.scss";
import TitleChip from "@components/shared/TitleChip";
import Ocean1 from "@images/espaco-ocean/ocean1.jpg";
import Ocean2 from "@images/espaco-ocean/ocean2.jpg";
import Ocean3 from "@images/espaco-ocean/ocean3.jpg";
import Ocean4 from "@images/espaco-ocean/ocean4.jpg";
import Ocean5 from "@images/espaco-ocean/ocean5.jpg";
import Ocean6 from "@images/espaco-ocean/ocean6.jpg";
import Ocean7 from "@images/espaco-ocean/ocean7.jpg";
import Ocean8 from "@images/espaco-ocean/ocean8.jpg";

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
    dots: true,
    infinite: true,
    autoplay: true,

}

const EspacoOcean = ({ text }) => {
    return (
      <section id="section-espaco-ocean" className="content-section">
          <div className="container">
              <div className="row section-keynotes__title">
                  <TitleChip>{text.HOME.ESPCACOOCEAN.TITLE}</TitleChip>
                  <p>
                      {text.HOME.ESPCACOOCEAN.DESCRIPTION}
                      <br />
                      <br />
                      <a href="https://goo.gl/maps/CoZQgWi4kVfjLaUo8">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                               className="bi bi-map" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/>
                          </svg>
                          <span> Av. Darcy Vargas, 1200 - Parque Dez de Novembro</span>
                      </a>
                  </p>
              </div>
              <br />
              <br />
              <Slider {...settings} className="overflow-hidden">
                  <img src={Ocean1} alt="Ocean" />
                  <img src={Ocean2} alt="Ocean" />
                  <img src={Ocean3} alt="Ocean" />
                  <img src={Ocean4} alt="Ocean" />
                  <img src={Ocean5} alt="Ocean" />
                  <img src={Ocean6} alt="Ocean" />
                  <img src={Ocean7} alt="Ocean" />
                  <img src={Ocean8} alt="Ocean" />
              </Slider>
          </div>
      </section>
    );
};

export default EspacoOcean;
