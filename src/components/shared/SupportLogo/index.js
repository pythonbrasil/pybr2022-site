import React from "react";

import "./style.scss";
import TitleChip from "@components/shared/TitleChip";
import Packt from "@images/sponsoring/packt.svg";

const SupportLogo = ({ text }) => {
  return (
    <>
      <section id="section-sponsoring-logos">
        <div className="container">
          <div className="row section-sponsoring-logos__title">
            <TitleChip>{text.HOME.SUPPORTINGLOGO.TITLE}</TitleChip>
            <h2></h2>
            <a href="https://www.packt.com/">
              <img src={Packt} alt="Packt"/>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportLogo;
