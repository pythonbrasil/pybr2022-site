import React from "react";
import Header from "@components/shared/Header";
import { Router } from "@reach/router";
import GeneralContext from "@configs/context";
import DutyPage from "@components/pages/DutyPage";
import FinancialAid from "@components/pages/FinancialAid";
import {
  LANGUAGES_TEXTS,
  LANGUAGES_SPONSORING_FILES,
} from "@configs/languages";
import HomePage from "@components/pages/HomePage";

import "@vendor/bootstrap-grid.min.css";
import "@sass/_global.scss";

const LazyComponent = ({ Component, ...props }) => (
  <React.Suspense fallback={"<p>Loading...</p>"}>
    <Component {...props} />
  </React.Suspense>
);

const IndexPage = () => (
  <GeneralContext.Consumer>
    {({ state }) => (
      <div id="app">
        <Header />
        <Router>
          <HomePage
            path="/"
            text={LANGUAGES_TEXTS[state.languageId]}
            file={LANGUAGES_SPONSORING_FILES[state.languageId]}
          />
          <LazyComponent
            path="/cdc"
            text={LANGUAGES_TEXTS[state.languageId]}
            Component={DutyPage}
          />
          <LazyComponent
            path="/programa-auxilio-financeiro"
            text={LANGUAGES_TEXTS["pt-br"]}
            Component={FinancialAid}
          />

          {/* <LazyComponent Component={About} path="about-us" />*/}
        </Router>
      </div>
    )}
  </GeneralContext.Consumer>
);

export default IndexPage;
