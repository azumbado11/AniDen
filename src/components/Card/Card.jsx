import React from "react";
import "./Card.css";
import { Rating } from "../../assets/Icons";

const Card = ({ url, title, author, imgUrl, status, rating, type }) => {
  return (
    <article className="card__container">
      <span
        className={`card__type ${
          type !== "Light Novel" ? type.toLowerCase() : "lightnovel"
        }`}
      >
        {type}
      </span>
      <div className="card__img">
        <img
          src={imgUrl}
          alt={`${title} cover`}
          loading="lazy"
          className="img"
        />
        <div className="card__info-title">
          <a
            className="card__info-link"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="card__info-link-title">{title.slice(0, 30)}</h4>
          </a>
          <p>{author} </p>
        </div>
      </div>
      <div className="card__info">
        <small>{status}</small>
        <div className="card__info-rating">
          <Rating />
          <p>{rating}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;
