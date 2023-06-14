import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/cardStyles.css";

const CardCollection = () => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/Sales/Items")
      .then((response) => response.json())
      .then((data) => {
        const cardsArray = data.rows;
        setCards(cardsArray);
        // console.log(cardsArray);
      })
      .catch((error) => {
        console.log("Error fetching cards:", error);
      });
  }, []);

  const handleClick = (id) => {
    console.log(id);
    navigate(`/product/${id}`);
  };

  return (
    <div className="cardpage">
      <h1>BhaiyaPoints</h1>
      {cards.map((card) => (
        <div
          className="card"
          key={card["Model SKU"]}
          onClick={() => handleClick(card["Model SKU"]?.slice(1))}
        >
          <h2>{card["Brand Name"]}</h2>
          <p>{card["Model Name"]}</p>
          <p>{card["Body Type"]}</p>
          <h4>
            {
              card[
                "Quote 1 (Incl. Road Tax, Insurance, Registration, Number Plate,"
              ]
            }
          </h4>
        </div>
      ))}
    </div>
  );
};

export default CardCollection;
