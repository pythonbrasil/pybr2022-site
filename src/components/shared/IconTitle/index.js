import React from 'react'

import './style.scss';

const IconTitle = ({ title, icon }) => (
  <div className="icon-title">
    <img src={icon} alt={title} />
    <h2>{title}</h2>
    <h4>#PYTHONBRASIL2022</h4>
  </div>
)

export default IconTitle