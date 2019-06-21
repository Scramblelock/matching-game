import React, { Component } from 'react';
import './App.css';
import Cardstack from '../components/Cardstack/Cardstack';
import Header from '../components/Header/Header';
import cat from '../components/Card/img/cat-solid.svg';
import crow from '../components/Card/img/crow-solid.svg';
import dog from '../components/Card/img/dog-solid.svg';
import dragon from '../components/Card/img/dragon-solid.svg';
import fish from '../components/Card/img/fish-solid.svg';
import frog from '../components/Card/img/frog-solid.svg';
import hippo from '../components/Card/img/hippo-solid.svg';
import spider from '../components/Card/img/spider-solid.svg';

const images = [cat, cat, crow, crow, dog, dog, dragon, dragon, fish, fish, 
	frog, frog, hippo, hippo, spider, spider];

class App extends Component {
  
	constructor() {
		super();
		this.state = {
	    cards: this.shuffleArray(images.slice()),
	    selected: [],
	    correct: [] 
		}
	}

	onRestartClick = () => {
		this.setState({
			cards: this.shuffleArray(images.slice()),
	    selected: [],
	    correct: []
		});
	}

	onCardClick = (clickedIndex) => {
    const { selected, cards, correct } = this.state;
    if (selected.length === 0) { // selecting a first card
      this.setState({ selected: [clickedIndex] })
    } else if (selected.length === 1) { // they're selecting a second card
      if (cards[selected[0]] === cards[clickedIndex]) {
        // It's a match :)
        // Add selected cards to `correct` and reset selection
        this.setState({
            correct: correct.concat([selected[0], clickedIndex]),
            selected: []
        });
      } else {
        // It's not a match 
        // Select it for now, and reset selection in a bit
        this.setState({ selected: [selected[0], clickedIndex] });
        setTimeout(() => {
          this.setState({ selected: [] })
        }, 1500);
      }
    }
    // Otherwise they already have 2 selected and we don't want to do anything
  }

  shuffleArray = (array) => {
	  for (let i = array.length - 1; i > 0; i--) {
	    let j = Math.floor(Math.random() * (i + 1));
	    [array[i], array[j]] = [array[j], array[i]];
	  }
	  return array;
	}

	render() {
		const { correct, selected, cards } = this.state;
	  return (
	    <div className="App">
	      <Header 
	      	onRestartClick={this.onRestartClick}/>
	      <Cardstack 
	      	isCorrect={correct}
	      	isSelected={selected}
	      	cards={cards}
	      	onCardClick={this.onCardClick}
	      />
	    </div>
	  );
	}
}

export default App;
