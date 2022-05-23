import React from "react";

import "./style.scss";

const IconTitle = ({ title, icon }) => (
  <div className="icon-title">
    <h4 className="icon-title__mobile">#PYTHONBRASIL2022</h4>
    <h2>{title}</h2>
    <h4 className="icon-title__desktop">#PYTHONBRASIL2022</h4>
    <img src={icon} alt={title} />
  </div>
);

export default IconTitle;
