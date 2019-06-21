import React from 'react';
import './Header.css';

const Header = ({ onRestartClick }) => (
  <div className='Header'>
	  <div className='App-header'>
		  <p>Matching Game</p>
	  </div>
	  <div className='Header-Container'>
	  	<button onClick={onRestartClick}>New Game</button>
	  </div>
  </div>
);

export default Header;