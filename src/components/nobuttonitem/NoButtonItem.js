import React from "react";

const NoButtonItem = ({ title, completed }) => {
  return (
    <li className={completed ? "completed" : ""}>
      <div className="view">
        <label>{title}</label>
      </div>
    </li>
  );
};

export default NoButtonItem;
