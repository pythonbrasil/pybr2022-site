import React from "react";

import "./style.scss";

const DutyContent = ({ text }) => {
    return (
      <>
        {
            text.map(function(text) {
                if (text.type === "paragraph") {
                    return <p>{text.content}</p>
                }

                if (text.type === "list") {
                    return <ul>{text.content.map((item) => <li>{item} </li>)}</ul>
                }
            })
        }
      </>
    );
  };
  
  export default DutyContent;