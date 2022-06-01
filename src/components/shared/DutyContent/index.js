import React from "react";

import "./style.scss";

const DutyContent = ({ text }) => {
  return (
    <>
      {text.map((text) => {
        const content =
          text.type === "paragraph" ? (
            <p>{text.content}</p>
          ) : (
            <ul>
              {text.content.map((item) => (
                <li key={item}>{item} </li>
              ))}
            </ul>
          );
        return content;
      })}
    </>
  );
};

export default DutyContent;
