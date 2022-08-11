import React from "react";

import "./style.scss";
import TitleChip from "@components/shared/TitleChip";
import JusBrasilLogo from "@images/sponsoring/jusbrasil.svg";
import Stream from "@images/sponsoring/stream.svg";
import Google from "@images/sponsoring/google.png";
import Vinta from "@images/sponsoring/vinta.png";
import Luizalabs from "@images/sponsoring/luizalabs.png";
import Globo from "@images/sponsoring/globo.png";
import INDT from "@images/sponsoring/indt.png";
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
            <a href="https://vempraglobo.g.globo/#pt-BR/sites/CX_4001">
              <img src={Globo} alt="Globo"/>
            </a>
            <h2>cobre</h2>
            <a href="https://getstream.io/try-for-free/?utm_source=PythonBrasil&utm_medium=Whole_Event_L&utm_content=Developer&utm_campaign=PythonBrasil_Oct2022">
              <img src={Stream} alt="Stream"/>
            </a>
            <a href="https://carreiras.magazineluiza.com.br/times/Luizalabs/vagas">
              <img src={Luizalabs} alt="Luizalabs"/>
            </a>
            <a href="https://www.vinta.com.br/careers/">
              <img src={Vinta} alt="Vinta"/>
            </a>
            <h2>cupuaçu</h2>
            <a href="https://www.indt.org.br/">
              <img src={INDT} alt="INDT"/>
            </a>
          </div>
        </div>
        <SupportLogo text={text}/>
      </section>
    </>
  );
};

export default SponsoringLogo;
