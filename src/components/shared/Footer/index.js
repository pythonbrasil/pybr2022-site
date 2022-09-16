import React from "react";

import LogoImage from "@images/logo.svg";
import YoutubeIcon from "@images/home/footer/youtube.svg";
import TwitterIcon from "@images/home/footer/twitter.svg";
import LinkedinIcon from "@images/home/footer/linkedin.svg";
import FacebookIcon from "@images/home/footer/facebook.svg";
import InstagramIcon from "@images/home/footer/instagram.svg";
import LocationIcon from "@images/home/footer/location.svg";

import "./style.scss";

const locationIconStyles = {
  display: "inline-block",
  float: "left",
}

const locationParagraphStyles = {
  marginLeft: "1.5rem",
}

const Footer = ({ text }) => {
  const socialPlatforms = [
    {
      name: "Instagram",
      icon: InstagramIcon,
      href: "https://instagram.com/pythonbrasil",
    },
    {
      name: "Facebook",
      icon: FacebookIcon,
      href: "https://www.facebook.com/pythonbrasil",
    },
    {
      name: "LinkedIn",
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/company/33193243/",
    },
    {
      name: "Twitter",
      icon: TwitterIcon,
      href: "https://twitter.com/pythonbrasil/",
    },
    {
      name: "Youtube",
      icon: YoutubeIcon,
      href: "https://www.youtube.com/c/pythonbrasiloficial",
    },
  ];

  return (
    <>
      <footer>
        <div className="container">
          <div className="footer__body">
            <div className="footer_logo-social">
              <img
                className="footerLogo"
                src={LogoImage}
                alt="Logo da Python Brasil 2022"
              />
              <div>
                <p>{text.HOME.FOOTER.ABOUT_TEXT} </p>
              </div>
              <ul className="social-platforms">
                {socialPlatforms.map((platform) => (
                  <li key={platform.name}>
                    <a href={platform.href}>
                      <img
                        className="icon"
                        src={platform.icon}
                        alt={platform.name}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Link rápidos</h4>

              <ul className="links">
                <li>
                  <a href="/">Python Brasil 2022</a>
                </li>
                <li>
                  <a href="https://pretalx.com/python-brasil-2022/cfp">
                    Submissão de Palestras
                  </a>
                </li>
                <li>
                  <a href="/cdc">Código de Conduta</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-3">
              <h4>Endereço do Evento</h4>
              <a href="https://goo.gl/maps/doWbFrWvkLsopkiE7">
                <img src={LocationIcon} style={locationIconStyles}/>
                <p style={locationParagraphStyles}>Centro de Convenções do Amazonas Vasco Vasques</p>
                <p style={locationParagraphStyles}>Av. Constantino Nery, 5001 - Flores, Manaus - AM, 69058-795</p>
              </a>
              <br />
              <a href="https://goo.gl/maps/CoZQgWi4kVfjLaUo8">
                <img src={LocationIcon} style={locationIconStyles}/>
                <p style={locationParagraphStyles}>
                  Samsung OCEAN Manaus
                </p>
                <p style={locationParagraphStyles}>
                  Av. Darcy Vargas, 1200 - Parque Dez de Novembro, Manaus - AM, 69055-035
                </p>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
