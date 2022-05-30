import React from "react";

import BookIcon from "@images/duty/book.svg";
import BackgroundImage from "@images/duty/background.svg";

import DutyContent from "@components/shared/DutyContent";

import Footer from "@components/shared/Footer";
import IconTitle from "@components/shared/IconTitle";

import "./style.scss";

const DutyPage = ({ text }) => {
  return (
    <div id="duty">
      <main>
        <div className="duty__adornment">
          <img
            className="background"
            src={BackgroundImage}
            // Descrever adereços é uma má prática para acessibilidade. 
            // https://www.ufrgs.br/acessibilidadedigital/atributo-alt/ 
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="heading col-12 col-sm-9">
              <IconTitle title={text.CDC.LANDING.TITLE} icon={BookIcon} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-9">
              <div className="content">
                <DutyContent text={text.CDC.LANDING.INFO}/>
              </div>
              <span className="last-update">
                Última atualização: 29 de Março de 2022
              </span>
            </div>
          </div>
        </div>
      </main>
      <Footer text={text} />
    </div>
  );
};

export default DutyPage;
