import React from "react";
import { Helmet } from "react-helmet";

import BackgroundImage from "@images/duty/background.svg";

import DutyContent from "@components/shared/DutyContent";
import Footer from "@components/shared/Footer";
import IconTitle from "@components/shared/IconTitle";
import BookIcon from "@images/duty/book.svg";

import "./style.scss";

const FinancialAid = ({ text }) => {
  const redirectToLink = () =>
  window.location.replace("https://drive.google.com/file/d/1wIaDsg95uf55Z7y1bUVyes3vgJPrAT1J/view");

  return (
    <div id="duty">
      <Helmet title={`Python Brasil 2022 | ${text.FINANCIALAID.LANDING.TITLE}`} />
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
              <IconTitle title={text.FINANCIALAID.LANDING.TITLE} icon={BookIcon}/>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-9">
              <div className="content">
                <DutyContent text={text.FINANCIALAID.LANDING.INFO}/>
              </div>
              <button type="button" onClick={redirectToLink}>
                {text.FINANCIALAID.LANDING.BUTTON}
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer text={text} />
    </div>
  );
};

export default FinancialAid;
