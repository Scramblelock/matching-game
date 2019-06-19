import React from 'react';
import './Card.css';

const Card = ({ image, isSelected, isCorrect, onSelect }) => (
  <div 
  	className='card'
  	style={{ backgroundColor: (isCorrect || isSelected) ? '#40E0D0' : '#293540' }}
  	onClick={() => {
      // You can only select a card that's not already correct and
      // isn't currently selected
      if (!isCorrect && !isSelected) {
        onSelect();
      }
    }}
  >
  	<img 
  		style={{ visibility: (isCorrect || isSelected) ? 'visible' : 'hidden' }}
      src={image}
      alt={image}
  	/>	
  </div>
);

export default Card;