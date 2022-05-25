import React from "react";

import BookIcon from "@images/duty/book.svg";
import BackgroundImage from "@images/duty/background.svg";
// import VirusIcon from "@images/home/covid/book.svg";

import Footer from "@components/shared/Footer";
import IconTitle from "@components/shared/IconTitle";

import "./style.scss";

const GuiaPage = ({ text }) => {
  return (
    <div id="guia">
      <main>
        <div className="guia__adornment">
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
              <IconTitle title={text.GUIA.LANDING.TITLE} icon={BookIcon} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-9">
              <p>
              Como forma de orientar e garantir a segurança dos visitantes na Python Br 22, é de grande importância se atentar as questões sanitárias e de cuidados pessoais durante a estadia na cidade.
              </p>

              <p>O Centro de Convenções Vasco Vasques, local escolhido pela organização do evento, possui grandes corredores e salões onde serão realizadas as atividades principais do evento, além de áreas externas acessíveis que terão seu uso incentivado.
</p>
              <p>Com obrigatoriedade de comprovante de vacinações, estímulo do uso das àreas externas, regras de distanciamento, higienização dos espaços, cuidados com a boa ventilação dos ambientes, uma equipe dedicada ao controle de fluxo de pessoas e kits de higiene acessíveis, colocaremos os cuidados com a saúde das participantes como prioridade.</p>
              
              <br />
              <p><h1>Covid-19</h1></p>
              <p>Além dos cuidados adotados pela organização do evento, a colaboração dos participantes é vital para conter a disseminação do virus, a prevenção é uma das ferramentas mais eficientes para manter a segurança durante o evento:</p>

              <p>1. Use máscaras de proteção facial corretamente, cobrindo nariz e boca;</p>
              
              <p>2. Lave as mãos com água e sabão;</p>
              
              <p>3. Use alcool em gel;</p>
              
              <p>4. Cubra nariz e boca ao espirrar;</p>
              
              <p>5. Isole-se ao apresentar sintomas como: Tosse, febre e dor de garganta;</p>
              
              <br />
              <p><h1>Vacinas:</h1></p>
              
              <ul>
                <li>
                  Covid-19: Como parte do esforço multiplo de acabar com a pandemia da Covid-19, o comprovante de vacinação será obrigatório para acessar as áreas do evento, confira junto a prefeitura de sua cidade se sua próxima dose da vacina está disponível.
                </li>
                <li>
                  Febre Amarela: Seguindo a recomendação da secretaria municipal da saúde de Manaus, pelo fato da região Amazônica ser endêmica para Febre Amarela, o visitante deverá ser vacinado contra esta doença com pelo menos 10 dias de antecedência da viagem.
                </li>
              </ul>
              
              <p>
                Locais de Testagem Gratuita para COVID-19: A Secretaria municipal da saúde de Manaus oferece testagem gratuita em caso de sintomas ou suspeita de contaminação da COVID-19, os locais e horários podem ser conferidos através do portal da SEMSA Manaus: <a href="https://covid19.manaus.am.gov.br/locais-de-testagem-gratuita-para-covid-19/">https://covid19.manaus.am.gov.br/locais-de-testagem-gratuita-para-covid-19/</a>.
	      </p>              
              
              <br />
              <p><h1>Referências:</h1></p>
              
              <p>
                SEMSA Manaus. GUIA DE SAÚDE PARA O TURISTA, 2021. Disponível em: <a href="https://semsa.manaus.am.gov.br/servico_cidadao/guia-de-saude-para-o-turista">https://semsa.manaus.am.gov.br/servico_cidadao/guia-de-saude-para-o-turista/</a> Acesso em: 02 de abril de 2022.
             </p>

             <p>
               Gov.br. Vacinação. Disponível em: <a href="https://www.gov.br/saude/pt-br/vacinacao/">https://www.gov.br/saude/pt-br/vacinacao/</a> Acesso em: Acesso em: 02 de abril de 2022.
             </p>

              <span className="last-update">
                Última atualização: 24 de Maio de 2022
              </span>
            </div>
          </div>
        </div>
      </main>
      <Footer text={text} />
    </div>
  );
};

export default GuiaPage;
