import React from "react";

import "./style.scss";
import TitleChip from "@components/shared/TitleChip";
import HTSHotel from "@images/sponsoring/htshotel.jpg";

const HotelSection = ({ text }) => {
  return (
    <>
      <section id="section-hotel">
        <div className="container">
          <div className="row section-hotel">
            <TitleChip>Onde ficar</TitleChip>
            <h2>Hoteis com desconto exclusivos para participantes da PyBr22</h2>

            <div className="section-hotel__content">
              <a href="https://www.manaushoteis.tur.br/">
                <img src={HTSHotel} alt="manaus hoteis logo" />
              </a>
              <div className="section-hotel__button-wrapper">
                <a
                  className="section-hotel__button"
                  href="https://drive.google.com/file/d/1q7856GSLVbcEt8IcJZWnID6K2D4z4g-G/view"
                >
                  SAIBA MAIS
                </a>
              </div>

              <div className="hotel-grid">
                <div className="hotel__wrapper">
                  <h3>Hotel Adrianópolis All Suítes (4 estrelas)</h3>

                  <div className="table-wrapper">
                    <table>
                      <tr>
                        <th colSpan={1}></th>
                        <th colSpan="4" className="hotel__tarifa">
                          Tarifa com desconto
                        </th>
                      </tr>

                      {/* tipo de tarifa                  */}
                      <tr>
                        <td className="hotel__tarifa__room"></td>
                        <td colSpan={2} className="hotel__tarifa__type">
                          SGL
                        </td>
                        <td colSpan={2} className="hotel__tarifa__type">
                          DBL
                        </td>
                      </tr>

                      {/*  tipo de quarto */}

                      <tr>
                        <td className="hotel__tarifa__room__name">Suíte</td>
                        <td colSpan={2} className="hotel__tarifa__price">
                          R$ 314,00
                        </td>
                        <td colSpan={2} className="hotel__tarifa__price">
                          R$ 344,00
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>

                {/* hotel */}
                <div className="hotel__wrapper">
                  <h3>Hotel Millennium (4 estrelas)</h3>
                  <div className="table-wrapper">
                    <table>
                      <tr>
                        <th colSpan={1}></th>
                        <th colSpan="4" className="hotel__tarifa">
                          Tarifa com desconto
                        </th>
                      </tr>

                      {/* tipo de tarifa                  */}
                      <tr>
                        <td className="hotel__tarifa__room"></td>
                        <td colSpan={2} className="hotel__tarifa__type">
                          SGL
                        </td>
                        <td colSpan={2} className="hotel__tarifa__type">
                          DBL
                        </td>
                      </tr>

                      {/*  tipo de quarto */}

                      <tr>
                        <td className="hotel__tarifa__room__name">Luxo</td>
                        <td colSpan={2} className="hotel__tarifa__price">
                          R$ 260,00
                        </td>
                        <td colSpan={2} className="hotel__tarifa__price">
                          R$ 290,00
                        </td>
                      </tr>

                      {/*  tipo de quarto */}

                      <tr>
                        <td className="hotel__tarifa__room__name">Premium</td>
                        <td colSpan={2} className="hotel__tarifa__price">
                          R$ 290,00
                        </td>
                        <td colSpan={2} className="hotel__tarifa__price">
                          R$ 320,00
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>

                {/* hotel */}
                <div className="hotel__wrapper">
                  <h3>Hotel Saint Paul (3 estrelas)</h3>
                  <div className="table-wrapper">
                    <table>
                      <tr>
                        <th colSpan={1}></th>
                        <th colSpan="5" className="hotel__tarifa">
                          Tarifa com desconto
                        </th>
                      </tr>

                      {/* tipo de tarifa                  */}
                      <tr>
                        <td className="hotel__tarifa__room"></td>
                        <td colSpan={2} className="hotel__tarifa__type">
                          SGL
                        </td>
                        <td colSpan={2} className="hotel__tarifa__type">
                          DBL
                        </td>
                        <td className="hotel__tarifa__room">TPL</td>
                      </tr>

                      {/*  tipo de quarto */}

                      <tr>
                        <td className="hotel__tarifa__room__name">Standard</td>
                        <td colSpan={2} className="hotel__tarifa__price">
                          R$ 179,00
                        </td>
                        <td colSpan={2} className="hotel__tarifa__price">
                          R$ 209,00
                        </td>
                        <td colSpan={2} className="hotel__tarifa__price">
                          R$ 269,00
                        </td>
                      </tr>

                      {/*  tipo de quarto */}

                      <tr>
                        <td className="hotel__tarifa__room__name">
                          Vista Teatro{" "}
                        </td>
                        <td colSpan={2} className="hotel__tarifa__price">
                          R$ 209,00
                        </td>
                        <td colSpan={2} className="hotel__tarifa__price">
                          R$ 239,00
                        </td>
                        <td colSpan={2} className="hotel__tarifa__price">
                          -
                        </td>
                      </tr>

                      {/*  tipo de quarto */}

                      <tr>
                        <td className="hotel__tarifa__room__name">Suíte</td>
                        <td colSpan={2} className="hotel__tarifa__price">
                          R$ 239,00
                        </td>
                        <td colSpan={2} className="hotel__tarifa__price">
                          R$ 269,00
                        </td>
                        <td colSpan={2} className="hotel__tarifa__price">
                          -
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>

                {/* hotel */}
                <div className="hotel__wrapper">
                  <h3>Hotel Express Vieiralves (2 estrelas)</h3>
                  <div className="table-wrapper">
                    <table>
                      <tr>
                        <th colSpan={1}></th>
                        <th colSpan="5" className="hotel__tarifa">
                          Tarifa com desconto
                        </th>
                      </tr>

                      {/* tipo de tarifa                  */}
                      <tr>
                        <td className="hotel__tarifa__room"></td>
                        <td colSpan={2} className="hotel__tarifa__type">
                          SGL
                        </td>
                        <td colSpan={2} className="hotel__tarifa__type">
                          DBL
                        </td>
                        <td className="hotel__tarifa__room">TPL</td>
                      </tr>

                      {/*  tipo de quarto */}

                      <tr>
                        <td className="hotel__tarifa__room__name">Standard</td>
                        <td colSpan={2} className="hotel__tarifa__price">
                          R$ 161,00
                        </td>
                        <td colSpan={2} className="hotel__tarifa__price">
                          R$ 171,00
                        </td>
                        <td colSpan={2} className="hotel__tarifa__price">
                          R$ 201,00
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelSection;
