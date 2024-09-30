import { use, useEffect, useRef, useState } from "react";
import { FiltersContext } from "../../Context/FiltersState";
import { useDebounce } from "../../hooks/useDebounce";

export const useSearch = () => {
  /* searchInput Ref */
  const searchRef = useRef();

  /* state for searchInput current value */
  const [searchValue, setSearchValue] = useState("");

  /* context update filters function */
  const { setFilters, setPage } = use(FiltersContext);

  /* debounced value */
  const search = useDebounce(searchValue);

  /* stores the searchQ filter with the debounced value and set page back to 1 */
  useEffect(() => {
    setPage((prev) => (prev = 1));
    setFilters((prev) => ({ ...prev, searchQ: search }));
  }, [search]);

  /* function that stores the value of searchInput onChange */
  const handleChange = () => {
    setSearchValue((prev) => (prev = searchRef.current.value));
  };

  return {
    searchRef,
    handleChange,
  };
};
