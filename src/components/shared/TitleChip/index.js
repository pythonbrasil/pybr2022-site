import React from 'react'
import './style.scss';

const TitleChip = ({ children }) => {
  return (
    <h3 className="chip-title">{children}</h3>
  )
}

export default TitleChip