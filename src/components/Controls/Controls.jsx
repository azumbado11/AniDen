import React from "react";
import "./Controls.css";
import { ArrowLeft, ArrowRight } from "../../assets/Icons";
import { usePage } from "./Controls.hooks";

const Controls = ({ pagination }) => {
  const { current_page, has_next_page } = pagination;

  const { page, prevPage, nextPage, prevDisable, nextDisable } = usePage(
    current_page,
    has_next_page
  );

  return (
    <article className="controls__container">
      <button
        className="controls__btn"
        onClick={prevPage}
        disabled={prevDisable}
      >
        <ArrowLeft />
      </button>
      <span>{page}</span>
      <button
        className="controls__btn"
        onClick={nextPage}
        disabled={nextDisable}
      >
        <ArrowRight />
      </button>
    </article>
  );
};

export default Controls;
