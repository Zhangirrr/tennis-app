import React from "react";

// import Button from "../Button";

import s from "./TennisCard.module.css"

function TennisCard({image, date, text, buttonText = "Подробнее"}) {
  return (
    <div className={s.wrapper}>
        <img src={image} alt=""className={s.image}/>
        <h2 className={s.date}>
          {date}
        </h2>
        <span className={s.text}>
          {text}
        </span> 
        <br/>

        <button 
        color="white"
        >
          {buttonText}
        </button>       
    </div>
  );
}

export default TennisCard;
