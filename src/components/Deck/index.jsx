import React, { Component } from 'react';

import styles from './styles.module.scss';
import classnames from 'classnames';
import Modal from '../Modal';
import crossIcon from '../../assets/icons/crossIcon.png'

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [...props.deck],
      defaultBackground: props.defaultBackground,
      background: props.defaultBackground,
      isModalOpen: false,
      nextCardColor: '',
      isEmpty: false
    }
  }

  onCardClick = () => {
    const { deck } = this.state;
    if(deck.length > 0){
      const nextCard = deck.shift();
      if(deck.length === 0) {this.setState({
        isEmpty: true
      })
      }
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

  deckBackgroundCalc = () => {
    const { deck, defaultBackground} = this.state;
    const { ancientDeck } = this.props;
    if(deck.length>0) {
      return defaultBackground
    } else {
      if(ancientDeck) {
        return crossIcon
      } else {
        return crossIcon
      }
    }
  }

  render() {
    const { background, cardClicked, isModalOpen, defaultBackground, isEmpty } = this.state;
    const { deckStyle, deckLabel } = this.props;
    console.log(isEmpty)
    return (
      <div>
        <div className={styles.deckLabel}>{deckLabel}</div>
        <div 
          onClick={this.onCardClick}
          style={{backgroundImage: `url(${this.deckBackgroundCalc()})`}}
          className={classnames(
            styles.deckContainer, 
            deckStyle, 
            {
              [styles.centered]: cardClicked
            },
            {
              [styles.emptyDeck]: isEmpty
            }
            )} 
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