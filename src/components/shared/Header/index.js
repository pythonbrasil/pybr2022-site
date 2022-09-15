import React, { useState } from "react";
import { Link, useLocation } from "@reach/router";
import LogoImage from "@images/logo.svg";
import LogoMobile from "@images/logo-mobile.svg";
import MenuImage from "@images/menu.svg";
import MenuImageGreen from "@images/menu-green.svg";

import LanguageSwitch from "@components/shared/LanguageSwitch";
import "./style.scss";
import { window } from "browser-monads";

const Header = () => {
  let location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/cdc", label: "Código de Conduta" },
    { href: "#section-keynotes", label: "Keynotes" },
    { href: "#section-agenda", label: "Agenda" },
    { href: "/programa-auxilio-financeiro", label: "Programa de Auxílio Financeiro" },
  ];

  const isHome = location.pathname === "/";

  return (
    <header id="header">
      <div className="header-inner container">
        <div className="logo-container desktop-only">
          <Link to="/">
            <img
              className="logo"
              src={LogoImage}
              alt="Logo da Python Brasil 2022"
            />
          </Link>
        </div>
        <nav className="links desktop-only">
          <ul>
            {links.map(({ href, label }) => (
              <li
                className={href === window.location.pathname ? "active" : ""}
                key={href}
              >
                <Link to={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="languages desktop-only">
          <LanguageSwitch />
        </nav>

        <div className="header__menu-mobile">
          <div className="logo-container">
            <Link to="/">
              <img
                className="logo"
                src={isHome ? LogoMobile : LogoImage}
                alt="Logo da Python Brasil 2022"
              />
            </Link>
          </div>
          <div className="menu">
            <button className="menu__button" onClick={toggleMenu}>
              <img
                className=""
                src={isHome ? MenuImage : MenuImageGreen}
                alt="Logo da Python Brasil 2022"
              />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          className={`links header__menu__modal header__menu__modal--is-open ${
            isHome ? "header__menu__modal--home" : ""
          }`}
          onClick={toggleMenu}
        >
          <ul>
            {links.map(({ href, label }) => (
              <li
                className={href === window.location.pathname ? "active" : ""}
                key={href}
              >
                <Link to={href}>{label}</Link>
              </li>
            ))}
          </ul>
          <nav className="languages">
            <LanguageSwitch />
          </nav>
          <button className="menu__close-button" onClick={toggleMenu}>
            X
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
