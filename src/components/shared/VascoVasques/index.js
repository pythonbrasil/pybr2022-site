import React from "react";

import "./style.scss";
import TitleChip from "@components/shared/TitleChip";
import Slider from "react-slick";
import VascoVasques1 from "@images/vasco-vasques/vasco_vasques.jpg";


const VascoVasques = ({ text }) => {
    return (
      <section id="section-vasco-vasques" className="content-section">
          <div className="container">
              <div className="row section-keynotes__title">
                  <TitleChip>{text.HOME.VASCOVASQUES.TITLE}</TitleChip>
                  <p>
                      {text.HOME.VASCOVASQUES.DESCRIPTION}
                      <br />
                      <br />
                      <a href="https://goo.gl/maps/doWbFrWvkLsopkiE7">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                               className="bi bi-map" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/>
                          </svg>
                          <span> Av. Constantino Nery, 5001 - Flores</span>
                      </a>
                  </p>
              </div>
              <br />
              <br />
              <Slider className="overflow-hidden">
                  <img src={VascoVasques1} alt="Vasco Vasques" />
              </Slider>
          </div>
      </section>
    );
};

export default VascoVasques;
