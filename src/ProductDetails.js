import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/cardStyles.css";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/Sales/Items/#${id}`)
      .then((response) => response.json())
      .then((data) => setCard(data.rows[0]))
      .catch((error) => {
        console.log("Error fetching card details:", error);
      });
  }, [id]);

  const Callnow = () => {
    navigate('/call-now');
  };

  if (!card) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main">
      <h1>BhaiyaPoints</h1>
      {/* <img src={card.image} alt={card.title} /> */}
      <h1>{card["Model Name"]}</h1>
      <p>{card["Brand Name"]}</p>
      <p>Remote Lock : {card["Remote Lock"]}</p>
      <p>Side Mirrors : {card["Side Mirrors"]}</p>
      <p>Tyre Warranty : {card["Tyre Warranty"]}</p>
      <p>Curtains : {card["curtains"]}</p>
      <p>Fire Extingusiher : {card["Fire Extingusiher"]}</p>
      <h3>Battery Type : {card["Battery Type"]}</h3>
      <h6>Battery Brand : {card["Battery Brand"]}</h6>
      <h1>
        {
          card[
            "Quote 1 (Incl. Road Tax, Insurance, Registration, Number Plate,"
          ]
        }
      </h1>
      <button onClick={Callnow}>Call Now</button>
    </div>
  );
};

export default ProductDetails;
