import React from "react";

import "./style.scss";
import TitleChip from "@components/shared/TitleChip";
import JusBrasilLogo from "@images/sponsoring/jusbrasil.svg";
import Stream from "@images//sponsoring/stream.svg";

const SponsoringLogo = ({ text }) => {
  return (
    <>
      <section id="section-sponsoring-logos">
        <div className="container">
          <div className="row section-sponsoring-logos__title">
            <TitleChip>{text.HOME.SPONSORINGLOGO.TITLE}</TitleChip>
            <h2>bronze</h2>
            <a href="https://www.jusbrasil.com.br/">
              <img src={JusBrasilLogo} alt="JusBrasil" width="400px" height="100px"/>
            </a>
            <h2>cobre</h2>
            <a href="https://getstream.io/">
              <img src={Stream} alt="Stream" width="400px" height="100px"/>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SponsoringLogo;