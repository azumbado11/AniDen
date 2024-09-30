import React, { use, Suspense } from "react";
import { Filters, Loader } from "../index";
import { Section, Grid } from "../../layouts";
import { FiltersContext } from "../../Context/FiltersState";

const Catalog = () => {
  const { filters, page, media } = use(FiltersContext);

  const API_BASE_URL = `https://api.jikan.moe/v4/${media}`;
  const API_FILTERS = `?page=${page}&type=${filters.type}&status=${filters.status}&genres=${filters.genre}&q=${filters.searchQ}&sfw=true`;

  const fetchData = async () => {
    const response = await fetch(`${API_BASE_URL}${API_FILTERS}`);
    return response.json();
  };

  return (
    <Section>
      <Filters />
      <Suspense fallback={<Loader />}>
        <Grid dataPromise={fetchData()} />
      </Suspense>
    </Section>
  );
};

export default Catalog;
