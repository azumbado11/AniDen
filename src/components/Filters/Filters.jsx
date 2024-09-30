import React, { use } from "react";
import "./Filters.css";
import { Select } from "../index";
import { Search } from "../index";
import { FiltersContext } from "../../Context/FiltersState";

const Filters = () => {
  const { selectFilters } = use(FiltersContext);
  return (
    <section className="filters__container">
      {selectFilters.map((filter) => {
        return (
          <Select
            type={filter.name}
            options={filter.options}
            key={filter.name}
          />
        );
      })}
      <Search />
    </section>
  );
};

export default Filters;
