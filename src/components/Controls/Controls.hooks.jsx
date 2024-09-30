import { use, useState, useEffect } from "react";
import { FiltersContext } from "../../Context/FiltersState";

export const usePage = (currentPage, has_nextPage) => {
  /* state that stores and striggers page changes */
  const { page, setPage } = use(FiltersContext);

  /* state for disabling prev page btn */
  const [prevDisable, setPrevDisable] = useState(true);

  /* state for disabling next page btn */
  const [nextDisable, setNextDisable] = useState(null);

  /* check if there is response has nextpage and toggle disable */
  useEffect(() => {
    if (has_nextPage) {
      setNextDisable((prev) => (prev = false));
    } else {
      setNextDisable((prev) => (prev = true));
    }
  }, [currentPage]);

  /* disable prev button if there is no prev page */
  useEffect(() => {
    if (page === 1) {
      setPrevDisable((prev) => (prev = true));
    }
  }, [page]);

  /* go to prev page function while page is > than 1 */
  const prevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
      window.scroll({ top: 0, behavior: "smooth" });
    }
  };

  /* go to next page function and disable prev page btn */
  const nextPage = () => {
    setPage((prev) => prev + 1);
    setPrevDisable((prev) => (prev = false));
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return {
    page,
    prevPage,
    nextPage,
    prevDisable,
    nextDisable,
  };
};
