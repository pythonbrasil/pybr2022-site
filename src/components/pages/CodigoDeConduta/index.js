import React, { useState } from "react";

import CalendarIcon from "@images/home/calendar.svg"
import LogoImage from "@images/logo.svg"
import InstagramIcon from "@images/home/footer/instagram.svg";
import LinkedinIcon from "@images/home/footer/linkedin.svg";
import FacebookIcon from "@images/home/footer/facebook.svg";
import TwitterIcon from "@images/home/footer/twitter.svg";
import YoutubeIcon from "@images/home/footer/youtube.svg";

import "./style.scss";

const CodigoDeConduta = ({ text }) => {

  const socialPlatforms = [
    { name: 'Instagram', icon: InstagramIcon, href: '' },
    { name: 'Facebook', icon: FacebookIcon, href: '' },
    { name: 'Linkedin', icon: LinkedinIcon, href: '' },
    { name: 'Twitter', icon: TwitterIcon, href: '' },
    { name: 'Youtube', icon: YoutubeIcon, href: '' },
  ]  

  return (
    <div id="home">
      <section id="section-code-conduct">
        <div className="container">
          <div className="row">
            <div className="call-to-action col-12 col-sm-6">
                <img src={CalendarIcon} alt="Ícone de calendário" />
                <h2>{text.LANDING_PAGE_TITLE_CDC}</h2>
                <h4>#pybr2022</h4>
            </div>
        </div>
        <div className="row">
          <div className="col-8 col-sm-8 ">
            <p className="text-size-cdc">O evento Python Brasil é um ambiente amistoso, de boa convivência, inclusivo e livre de intimidação, onde todas as pessoas são bem-vindas e a civilidade é exigida. </p>
            
            <p className="text-size-cdc">
            Com esta finalidade, a organização do evento conta com uma Equipe de Resposta que atua para garantir um ambiente com essas qualidades.
            </p>

            <p className="text-size-cdc"> Por isso: </p>

            <ul>
              <li className="list-style-cdc">Não é tolerado nenhum tipo de assédio, discriminação inapropriada ou humilhação pública;</li>
              <li className="list-style-cdc">Não é tolerado o descumprimento das leis brasileiras;</li>
              <li className="list-style-cdc">Toda pessoa presente no evento, independente do seu papel, está sujeita a estas regras.</li>
            </ul>

            <p className="text-size-cdc">O público alvo do evento também inclui crianças e adolescentes, por isso buscamos manter um ambiente apropriado para todas as faixas etárias. Sendo assim, linguagem e imagens sexualizadas não são adequados para palestras e ações promocionais de patrocinadores.</p>

            <p className="text-size-cdc"> Se você se sentiu assediado, discriminado indevidamente ou humilhado, ou presenciou alguma destas atitudes, por favor entre em contato com a Equipe de Resposta. </p>

            <p className="text-size-cdc"> Havendo um relato de violação destes princípios, a Equipe de Resposta realizará a devida análise e, quando necessário, tomará as ações para impedir a reincidência. Estas ações podem, mas não se restringem nem implicam em ir desde uma conversa em busca da retratação até um convite a se retirar do evento por tempo indeterminado. </p>

          </div>
        </div>
      </div>
    </section>

    <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-3 logo-and-social">
              <img className="footerLogo" src={LogoImage} alt="Logo da Python Brasil 2022" />

              <ul className="social-platforms">
                {socialPlatforms.map(platform => (
                  <li>
                    <a href={platform.href}>
                      <img className="icon" src={platform.icon} alt={platform.name} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-12 col-sm-3">
                <p>{text.LANDING_TEXT_RODAPE} </p>
            </div>
            <div className="col-12 col-sm-3">
              <h4>Link rápidos</h4>

              <ul className="links">
                <li><a href="/">Python Brasil 2022</a></li>
                <li><a href="/palestras">Submissão de Palestras</a></li>
                <li><a href="/schedule">Programação</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/duty">Código de Conduta</a></li>
              </ul>
            </div>
            <div className="col-12 col-sm-3">
              <h4>Endereço do Evento</h4>

              <p>Centro de Convenções do Amazonas Vasco Vasques</p>
              <br />

              <p>Av. Constantino Nery, 5001 - Flores, Manaus - AM, 69058-795</p>
            </div>
          </div>
        </div>
      </footer>
  </div>

  
  )
}

export default CodigoDeConduta