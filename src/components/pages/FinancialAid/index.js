import React from "react";
import { Helmet } from "react-helmet";

import BookIcon from "@images/duty/book.svg";
import BackgroundImage from "@images/duty/background.svg";

import DutyContent from "@components/shared/DutyContent";
import Footer from "@components/shared/Footer";
import IconTitle from "@components/shared/IconTitle";

import "./style.scss";

const DutyPage = ({ text }) => {
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
              <IconTitle title={text.FINANCIALAID.LANDING.TITLE} icon={BookIcon} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-9">
              <div className="content">
                <DutyContent text={text.FINANCIALAID.LANDING.INFO}/>
              </div>
              <button type="button" onClick="window.open('https://forms.gle/qPkPYFHCRPG1JnpFA')">
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
