import React from "react";

import CalendarIcon from "@images/home/calendar.svg";

import Footer from "@components/shared/Footer";

import "./style.scss";

const CodigoDeConduta = ({ text }) => {

  return (
    <div id="home">
      <section id="section-landing-page">
        <div className="container">
          <div className="row">
            <div className="call-to-action col-12 col-sm-6">
              <img src={CalendarIcon} alt="Ícone de calendário" />
              <h2>{text.CDC.LANDING.TITLE}</h2>
              <h4>#pybr2022</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-8 col-sm-8 ">
              <p className="text-size-cdc">
                O evento Python Brasil é um ambiente amistoso, de boa
                convivência, inclusivo e livre de intimidação, onde todas as
                pessoas são bem-vindas e a civilidade é exigida.{" "}
              </p>
              <p className="text-size-cdc">
                Com esta finalidade, a organização do evento conta com uma
                Equipe de Resposta que atua para garantir um ambiente com essas
                qualidades.
              </p>

              <p className="text-size-cdc"> Por isso: </p>

              <ul>
                <li className="list-style-cdc">
                  Não é tolerado nenhum tipo de assédio, discriminação
                  inapropriada ou humilhação pública;
                </li>
                <li className="list-style-cdc">
                  Não é tolerado o descumprimento das leis brasileiras;
                </li>
                <li className="list-style-cdc">
                  Toda pessoa presente no evento, independente do seu papel,
                  está sujeita a estas regras.
                </li>
              </ul>

              <p className="text-size-cdc">
                O público alvo do evento também inclui crianças e adolescentes,
                por isso buscamos manter um ambiente apropriado para todas as
                faixas etárias. Sendo assim, linguagem e imagens sexualizadas
                não são adequados para palestras e ações promocionais de
                patrocinadores.
              </p>

              <p className="text-size-cdc">
                {" "}
                Se você se sentiu assediado, discriminado indevidamente ou
                humilhado, ou presenciou alguma destas atitudes, por favor entre
                em contato com a Equipe de Resposta.{" "}
              </p>

              <p className="text-size-cdc">
                {" "}
                Havendo um relato de violação destes princípios, a Equipe de
                Resposta realizará a devida análise e, quando necessário, tomará
                as ações para impedir a reincidência. Estas ações podem, mas não
                se restringem nem implicam em ir desde uma conversa em busca da
                retratação até um convite a se retirar do evento por tempo
                indeterminado.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer text={text} />
    </div>
  );
};

export default CodigoDeConduta;
