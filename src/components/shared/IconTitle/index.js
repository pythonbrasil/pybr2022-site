import React from "react";

import "./style.scss";
import CalendarIconWhite from "@images/home/calendar-white.svg";
const IconTitle = ({ title, icon, isHome }) => {
  const homeClasses = isHome ? "icon-title--white" : "";
  const HomeIcons = (
    <>
      <img src={CalendarIconWhite} alt={title} />
      <img src={icon} alt={title} className="desktop-only" />
    </>
  );

  return (
    <div className={`icon-title ${homeClasses}`}>
      <h4 className={`icon-title__mobile ${homeClasses}`}>#PYTHONBRASIL2022</h4>
      <h2 className={homeClasses}>{title}</h2>
      <h4 className="icon-title__desktop">#PYTHONBRASIL2022</h4>
      {isHome ? HomeIcons : <img src={icon} alt={title} />}
    </div>
  );
};

export default IconTitle;
