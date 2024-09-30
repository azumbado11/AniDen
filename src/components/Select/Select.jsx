import React from "react";
import "./Select.css";
import { useSelect } from "./Select.hooks";

const Select = ({ type, options }) => {
  const { selectRef, handleChange } = useSelect();

  return (
    <div className="select__container">
      <select
        className="select__container"
        ref={selectRef}
        onChange={handleChange}
        name={type}
      >
        <option value="">Filter by {type}</option>
        {options.map((option) => {
          return (
            <option value={option.filter} key={option.filter}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
