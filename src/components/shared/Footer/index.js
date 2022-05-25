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
    { name: "Instagram", icon: InstagramIcon, href: "" },
    { name: "Facebook", icon: FacebookIcon, href: "" },
    { name: "Linkedin", icon: LinkedinIcon, href: "" },
    { name: "Twitter", icon: TwitterIcon, href: "" },
    { name: "Youtube", icon: YoutubeIcon, href: "" },
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
                  <li>
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
                  <a href="/palestras">Submissão de Palestras</a>
                </li>
                <li>
                  <a href="/duty">Código de Conduta</a>
                </li>
                <li>
                  <a href="/guia">Guia de saúde para turistas</a>
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
