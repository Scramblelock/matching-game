import React from "react";
import "./Cardstack.css";
import Card from "../Card/Card";

const Cardstack = ({ isCorrect, isSelected, cards, onCardClick }) => {
  return (
    <div className="cardstack">
      {cards.map((image, i) => (
        <Card
          className="card"
          key={i}
          image={image}
          isCorrect={isCorrect.includes(i)}
          isSelected={isSelected.includes(i)}
          onSelect={() => onCardClick(i)}
        />
      ))}
    </div>
  );
};

export default Cardstack;
