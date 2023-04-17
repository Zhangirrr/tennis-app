import React from "react";

// import Button from "../Button";

import s from "./TennisCard.module.css";
import { Link } from "react-router-dom";

function TennisCard({ id, image, date, text, buttonText = "Подробнее" }) {
  return (
    <div className={s.wrapper}>
      <img src={image} alt="" className={s.image} />
      <h2 className={s.date}>{date}</h2>
      <span className={s.text}>{text}</span>
      <div>
        <Link to={`/news/${id}`}>{buttonText}</Link>
      </div>
    </div>
  );
}

export default TennisCard;
