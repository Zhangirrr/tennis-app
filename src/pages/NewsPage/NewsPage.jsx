import React, { useEffect, useState } from "react";
import TennisCard from "../../components/TennisCard/TennisCard";
import s from "./NewsPage.module.scss"

const endpoint = "http://localhost:3001";

function NewsPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${endpoint}/cards`);
      const data = await response.json();
      setCards(data);
    };
    getData();
  }, []);

  return (
    <div className={s.grid}>
      {cards?.length > 0 &&
        cards.map((elem) => (
          <TennisCard
            key={elem.id}
            image={elem.image}
            date={elem.date}
            text={elem.text}
            buttonText={elem.buttonText}
          />
        ))}
    </div>
  );
}

export default NewsPage;
