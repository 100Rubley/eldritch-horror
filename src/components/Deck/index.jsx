import React, { Component } from 'react';

import styles from './styles.module.scss';
import classnames from 'classnames';
import Modal from '../Modal';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [...props.deck],
      defaultBackground: props.defaultBackground,
      background: props.defaultBackground,
      isModalOpen: false,
      nextCardColor: '',
    }
  }

  onCardClick = () => {
    const { deck } = this.state;
    if(deck.length > 0){
      const nextCard = deck.shift();
      const { ancientDeck } = this.props;
      if(ancientDeck) {
        this.setState({
          nextCardColor: nextCard.color
        })
      }
      this.setState({
        isModalOpen: true,
        background: nextCard.cardFace
      })
    }
  }

  onModalClose = () => {
    const { ancientDeck, removeCard } = this.props;
    if(ancientDeck) {
      const { nextCardColor } = this.state;
      removeCard(nextCardColor);
    }
    this.setState({
      isModalOpen: false,
    })
  }

  render() {
    const { background, cardClicked, isModalOpen, defaultBackground } = this.state;
    const { deckStyle } = this.props;
    return (
      <div>
        <div 
          onClick={this.onCardClick}
          style={{backgroundImage: `url(${defaultBackground})`}}
          className={classnames(
            styles.deckContainer, 
            deckStyle, 
            {[styles.centered]: cardClicked
            })} 
        />
        <Modal 
          isOpen={isModalOpen}
          background={defaultBackground}
          newBackground={background}
          onBackFlip={this.onModalClose}
          flip
        />
      </div>
    );
  }
}
 
export default Deck;