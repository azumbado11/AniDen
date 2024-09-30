import { use, useRef } from "react";
import { FiltersContext } from "../../Context/FiltersState";

export const useSelect = () => {
  /* update filters function */
  const { setFilters } = use(FiltersContext);

  /* ref to store the selected value */
  const selectRef = useRef(null);

  /* function that handles each filter selected value */
  const handleChange = (e) => {
    if (e.target.name === "type") {
      setFilters((prev) => ({ ...prev, type: selectRef.current.value }));
    }
    if (e.target.name === "status") {
      setFilters((prev) => ({ ...prev, status: selectRef.current.value }));
    }
    if (e.target.name === "genre") {
      setFilters((prev) => ({ ...prev, genre: selectRef.current.value }));
    }
  };

  return {
    selectRef,
    handleChange,
  };
};
