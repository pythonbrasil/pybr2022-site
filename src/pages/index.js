import React from "react"
import Header from "@components/shared/Header";
import { Router } from '@reach/router';
import GeneralContext from "@configs/context";
import ProgramacaoPage from "@components/pages/ProgramacaoPage";
import { LANGUAGES_TEXTS } from "@configs/languages";
import HomePage from "@components/pages/HomePage";

import '@vendor/bootstrap-grid.min.css'
import '@sass/_global.scss';

const LazyComponent = ({ Component, ...props }) => (
  <React.Suspense fallback={'<p>Loading...</p>'}>
    <Component {...props} />
  </React.Suspense>
);

const IndexPage = () => (
  <GeneralContext.Consumer>
    {({ state }) => (
      <div id="app">
        <Header />
        <Router>
          <HomePage path="/" text={LANGUAGES_TEXTS[state.languageId]} />
          <LazyComponent Component={ProgramacaoPage} path="/programacao" />
          {/* <LazyComponent Component={About} path="about-us" /> */}
        </Router>
      </div>
    )}
  </GeneralContext.Consumer>
);

export default IndexPage;
