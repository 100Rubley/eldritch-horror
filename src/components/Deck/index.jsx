import React, { Component } from 'react';
import shuffle from 'lodash/shuffle'

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
    const { ancientDeck, expeditionsDeck } = this.props;
    if(expeditionsDeck) {
      this.setState({
        defaultBackground: deck[0].cardBack
      })
    }
    
    if(deck.length > 0){
      const nextCard = deck.shift();
      if(deck.length === 0) {
        if(ancientDeck) {
          this.setState({
            isEmpty: true
          })
        } else {
          this.setState({
            deck: shuffle([...this.props.deck])
          })
        }
      }
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
    const { ancientDeck, expeditionsDeck } = this.props;
    if(deck.length>0) {
      if(expeditionsDeck) {
        return deck[0].cardBack
      } else {
        return defaultBackground
      }
    } else {
      if(ancientDeck) {
        return crossIcon
      } else {
        return defaultBackground
      }
    }
  }

  render() {
    const { background, cardClicked, isModalOpen, isEmpty, defaultBackground } = this.state;
    const { deckStyle, deckLabel } = this.props;
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