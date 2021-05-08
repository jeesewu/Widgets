import React from "react";

const Accordion = ({ items }) => {
  const renderedItems = items.map((item) => {
    return (
      <div>
        <div>
          <span>▶</span>
          {item.title}
        </div>
        <p>{item.content}</p>
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

export default Accordion;
