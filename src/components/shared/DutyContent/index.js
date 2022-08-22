import React from "react";

import "./style.scss";

const DutyContent = ({ text }) => {
  return (
    <>
      {text.map((text) => {
        const isArray = text.content[0].length > 1;
        const contentKey = (isArray && text.content[0]) || text.content;
        // const content =
        //   text.type === "paragraph" ? (
        //     <p key={contentKey}>{text.content}</p>
        //   ) : (
        //     <ul key={`list-${contentKey}`}>
        //       {text.content.map((item) => (
        //         <li key={`item-${item}`}>{item} </li>
        //       ))}
        //     </ul>
        //   );
        var type_content =  text.type
        var content = ""
        if (type_content === "paragraph") {
          content= (<p key={contentKey}>{text.content}</p>)
        } 
        else if (type_content === "title") {
          content= (<h3 key={contentKey}>{text.content}</h3>)
        }
        else {
          content =
          (<ul key={`list-${contentKey}`}>
              {text.content.map((item) => (
                <li key={`item-${item}`}>{item} </li>
              ))}
            </ul>)
        }
        return content;
      })}
    </>
  );
};

export default DutyContent;
