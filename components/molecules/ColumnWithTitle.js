import React from "react";

const ColumnWithTitle = (props) => {
  const title = props.title;
  const lign = props.lign;
  const updateClass = props.updateClass || "";
  return (
    <div className={updateClass}>
      <h2 className="font-sm font-bold text-clear">{title}</h2>
      <ul className="mt-3">
        {lign.map((item, index) => (
          <li key={index} className="text-clear text-xs mt-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColumnWithTitle;
