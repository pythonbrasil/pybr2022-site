import React from "react";

import "./style.scss";
import TitleChip from "@components/shared/TitleChip";
import GenLtc from "@images/supporting/gen-ltc.png";
import Novatec from "@images/supporting/novatec.svg";
import Ocean from "@images/supporting/ocean.png";
import Psf from "@images/supporting/psf.svg";
import SebraeLab from "@images/supporting/sebraelab.png";


const SupportLogo = ({ text }) => {
  return (
    <>
      <section id="section-supportlogo-logos">
        <div className="container">
          <div className="row section-sponsoring-logos__title">
            <TitleChip>{text.HOME.SUPPORTINGLOGO.TITLE}</TitleChip>
            <h2></h2>
            <a href="https://www.python.org/psf/">
              <img src={Psf} alt="Python Software Foundation"/>
            </a>

            <div></div>

            <a href="https://www.grupogen.com.br/exatas/computac-o">
              <img src={GenLtc} alt="Encontre os melhores livros, e-books e cursos científicos, técnicos e profissionais das editoras Método, Forense, Guanabara Koogan, Roca, Santos, Atlas e LTC."/>
            </a>

            <a href="https://www.novatec.com.br/ ">
              <img src={Novatec} alt="A Novatec Editora é especializada em livros de informática, marketing digital, negócios, finanças e investimentos."/>
            </a>

            <a href="https://www.oceanbrasil.com/">
              <img src={Ocean} alt="O Ocean é o programa de capacitação e inovação tecnológica da Samsung, em parceria com universidades brasileiras de referência."/>
            </a>

            <a href="https://bit.ly/sebraelabam">
              <img src={SebraeLab} alt="O Sebraelab faz parte do SEBRAE. É um espaço de estímulo à criatividade, à inovação, ao consumo de informações, à geração de novos conhecimentos, ao aprendizado contínuo e às múltiplas conexões nos negócios."/>
            </a>

          </div>
        </div>
      </section>
    </>
  );
};

export default SupportLogo;
