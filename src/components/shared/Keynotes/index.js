import React from "react";

import "./style.scss";
import TitleChip from "@components/shared/TitleChip";
import EduardoMendes from "@images/keynotes/eduardo_mendes.jpg";
import LeticiaPortella from "@images/keynotes/leticia_portella.jpg";

const Keynotes = ({ text }) => {
  return (
    <section id="section-keynotes">
      <div className="container">
        <div className="row section-keynotes__title">
          <TitleChip>{text.HOME.KEYNOTES.TITLE}</TitleChip>
          <ul className="row">
            <li className="col-6">
              <div className="card">
                <img src={LeticiaPortella} alt="" />
                <h2>Letícia</h2>
                <p>Oceanógrafa de formação, Letícia mudou de sua formação para uma carreira em Engenharia de Software e hoje trabalha na Stripe, em Dublin. Desde a mudança, ela se dedica a ajudar pessoas a aprender. Há 5 anos ela é co-fundadora e uma das anfitriãs do Pizza de Dados, primeiro e mais amado podcast sobre ciência de dados do Brasil. Ela também é professora da plataforma do LinkedIn Learning onde seus cursos têm ajudado milhares de alunos. Sua contribuição mais longa acontece através do seu blog, onde por anos ela tem compartilhado sua experiência na carreira, falado sobre temas técnicos e tornando conceitos mais fáceis de serem compreendidos.</p>
              </div>
            </li>
            <li className="col-6">
              <div className="card">
                <img src={EduardoMendes} alt="" />
                <h2>dunossauro</h2>
                <p>Live coder, e-mendigo, degustador profissional de pizzas. Host da live de Python há 5 anos, onde tenta democratizar o aprendizado de programação com piadas ruins e litros de refrigerante. Criador de conteúdo em tempo integral e músico nas horas vagas. Melhor jogador de Marvel vs Capcom da sua casa, embora não exista um claro consenso sobre isso ainda.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Keynotes;
