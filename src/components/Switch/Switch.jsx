import React from "react";
import "./Switch.css";
import { useSwitch } from "./Switch.hooks";

const Switch = () => {
  const { media, handleCheckbox } = useSwitch();
  return (
    <article className="switch__container">
      <label className="switch">
        <input type="checkbox" name="switch" onChange={handleCheckbox} />
        <span className="slider"></span>
      </label>
      <span>{media}</span>
    </article>
  );
};

export default Switch;
