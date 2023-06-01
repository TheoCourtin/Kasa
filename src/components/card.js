import React from "react";
import PropTypes from "prop-types";

function Card({ cover, title }) {
  return (
    <article className="card-logement">
      <img src={cover} alt={"Photo du logement ${title}"} />
      <h2>{title}</h2>
    </article>
  );
}


export default Card;