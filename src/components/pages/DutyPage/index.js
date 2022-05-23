import React from "react";

import BookIcon from "@images/duty/book.svg";
import BackgroundImage from "@images/duty/background.svg";

import Footer from "@components/shared/Footer";
import IconTitle from "@components/shared/IconTitle";

import "./style.scss";

const DutyPage = ({ text }) => {
  return (
    <div id="duty">
      <main>
        <img className="background" src={BackgroundImage} alt="Imagem de fundo" />
        <div className="container">
          <div className="row">
            <div className="heading col-12 col-sm-9">
              <IconTitle title={text.CDC.LANDING.TITLE} icon={BookIcon} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-9">
              <p>
                O evento Python Brasil é um ambiente amistoso, de boa
                convivência, inclusivo e livre de intimidação, onde todas as
                pessoas são bem-vindas e a civilidade é exigida.
              </p>
              <p>
                Com esta finalidade, a organização do evento conta com uma
                Equipe de Resposta que atua para garantir um ambiente com essas
                qualidades.
              </p>

              <p> Por isso: </p>

              <ul>
                <li>
                  Não é tolerado nenhum tipo de assédio, discriminação
                  inapropriada ou humilhação pública;
                </li>
                <li>Não é tolerado o descumprimento das leis brasileiras;</li>
                <li>
                  Toda pessoa presente no evento, independente do seu papel,
                  está sujeita a estas regras.
                </li>
              </ul>

              <p>Desta forma, entendemos que:</p>

              <ul>
                <li>
                  Assédio é a ação de insistir, perseguir ou coagir outra pessoa
                  a um comportamento involuntário.
                </li>
                <li>
                  Discriminação inapropriada é o ato de separar, injuriar ou
                  humilhar alguém promovendo sua exclusão por atributo
                  particular da mesma.
                </li>
                <li>
                  Humilhação pública é o ato de submeter, rebaixar,
                  ridicularizar ou promover o vexame de outro publicamente.
                </li>
              </ul>

              <p>
                O público alvo do evento também inclui crianças e adolescentes,
                por isso buscamos manter um ambiente apropriado para todas as
                faixas etárias. Sendo assim, linguagem e imagens sexualizadas
                não são adequados para palestras e ações promocionais de
                patrocinadores.
              </p>

              <p>
                {" "}
                Se você se sentiu assediado, discriminado indevidamente ou
                humilhado, ou presenciou alguma destas atitudes, por favor entre
                em contato com a Equipe de Resposta.{" "}
              </p>

              <p>
                {" "}
                Havendo um relato de violação destes princípios, a Equipe de
                Resposta realizará a devida análise e, quando necessário, tomará
                as ações para impedir a reincidência. Estas ações podem, mas não
                se restringem nem implicam em ir desde uma conversa em busca da
                retratação até um convite a se retirar do evento por tempo
                indeterminado.{" "}
              </p>

              <span className="last-update">
                Última atualização: 29 de Março de 2022
              </span>
            </div>
          </div>
        </div>
      </main>
      <Footer text={text} />
    </div>
  );
};

export default DutyPage;
