import React from "react";

import "./style.scss";
import TitleChip from "@components/shared/TitleChip";
import JusBrasilLogo from "@images/sponsoring/jusbrasil.svg";
import Stream from "@images/sponsoring/stream.svg";
import Google from "@images/sponsoring/google.png";
import SupportLogo from "@components/shared/SupportLogo";

const SponsoringLogo = ({ text }) => {
  return (
    <>
      <section id="section-sponsoring-logos">
        <div className="container">
          <div className="row section-sponsoring-logos__title">
            <TitleChip>{text.HOME.SPONSORINGLOGO.TITLE}</TitleChip>
            <h2>prata</h2>
            <a href="https://opensource.google/">
              <img src={Google} alt="Google believes that open source is good for everyone. By being open and freely available, it enables and encourages collaboration and the development of technology."/>
            </a>
            <h2>bronze</h2>
            <a href="https://www.jusbrasil.com.br/">
              <img src={JusBrasilLogo} alt="JusBrasil"/>
            </a>
            <h2>cobre</h2>
            <a href="https://getstream.io/">
              <img src={Stream} alt="Stream"/>
            </a>
          </div>
        </div>
        <SupportLogo/>
      </section>
    </>
  );
};

export default SponsoringLogo;