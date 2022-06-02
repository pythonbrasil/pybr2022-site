import React from "react";

import LogoImage from "@images/logo.svg";
import YoutubeIcon from "@images/home/footer/youtube.svg";
import TwitterIcon from "@images/home/footer/twitter.svg";
import LinkedinIcon from "@images/home/footer/linkedin.svg";
import FacebookIcon from "@images/home/footer/facebook.svg";
import InstagramIcon from "@images/home/footer/instagram.svg";

import "./style.scss";

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
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
