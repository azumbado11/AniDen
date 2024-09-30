import React, { createContext, useEffect, useState } from "react";

export const FiltersContext = createContext();

/* Select filters for manga media */
const mangaSelectFilters = [
  {
    name: "type",
    options: [
      { name: "manga", filter: "manga" },
      { name: "novel", filter: "novel" },
      { name: "lightnovel", filter: "lightnovel" },
      { name: "oneshot", filter: "oneshot" },
      { name: "manhwa", filter: "manhwa" },
      { name: "manhua", filter: "manhua" },
    ],
  },
  {
    name: "status",
    options: [
      { name: "publishing", filter: "publishing" },
      { name: "complete", filter: "complete" },
      { name: "hiatus", filter: "hiatus" },
      { name: "discontinued", filter: "discontinued" },
    ],
  },
  {
    name: "genre",
    options: [
      { name: "action", filter: 1 },
      { name: "adventure", filter: 2 },
      { name: "comedy", filter: 4 },
      { name: "mystery", filter: 7 },
      { name: "drama", filter: 8 },
      { name: "romance", filter: 22 },
      { name: "seinen", filter: 41 },
    ],
  },
];

/* Select filters for anime media */
const animeSelectFilters = [
  {
    name: "type",
    options: [
      { name: "tv", filter: "tv" },
      { name: "movie", filter: "movie" },
      { name: "ova", filter: "ova" },
      { name: "special", filter: "special" },
      { name: "ona", filter: "ona" },
      { name: "music", filter: "manhua" },
    ],
  },
  {
    name: "status",
    options: [
      { name: "airing", filter: "airing" },
      { name: "complete", filter: "complete" },
      { name: "upcoming", filter: "upcoming" },
    ],
  },
  {
    name: "genre",
    options: [
      { name: "action", filter: 1 },
      { name: "adventure", filter: 2 },
      { name: "comedy", filter: 4 },
      { name: "mystery", filter: 7 },
      { name: "drama", filter: 8 },
      { name: "romance", filter: 22 },
      { name: "seinen", filter: 41 },
    ],
  },
];

/* initial state for filters */
const filtersType = { type: "", status: "", genre: "", searchQ: "" };

const FiltersState = ({ children }) => {
  /* state to handle filters */
  const [filters, setFilters] = useState(filtersType);

  /* state to handle media filters */
  const [selectFilters, setSelectFilters] = useState(mangaSelectFilters);

  /* state to handle current page value */
  const [page, setPage] = useState(1);

  /* state to handle media content value */
  const [media, setMedia] = useState("manga");

  /* changes select filters value if media content changes and restore general filters default value */
  useEffect(() => {
    if (media === "manga") {
      setSelectFilters((prev) => (prev = mangaSelectFilters));
      setFilters(filtersType);
    } else {
      setSelectFilters((prev) => (prev = animeSelectFilters));
      setFilters(filtersType);
    }
  }, [media]);

  return (
    <FiltersContext
      value={{
        filters,
        setFilters,
        selectFilters,
        page,
        setPage,
        media,
        setMedia,
      }}
    >
      {children}
    </FiltersContext>
  );
};

export default FiltersState;
