import { brownCards, greenCards, blueCards } from '../data/mythicCards';
import shuffle from 'lodash/shuffle'

export const shuffleMythicCardsUtil = (greenCardsAmount, brownCardsAmount, blueCardsAmount, difficulty) => {
  const greenDeck = constructDeck(greenCards, difficulty, greenCardsAmount);
  const brownDeck = constructDeck(brownCards, difficulty, brownCardsAmount);
  const blueDeck = constructDeck(blueCards, difficulty, blueCardsAmount);
  return {
    greenDeck,
    brownDeck,
    blueDeck
  }
}

const getEasyCards = (deck) => {
  return shuffle(deck.filter(card => card.difficulty === 'easy'))
}

const getNormalCards = (deck) => {
  return shuffle(deck.filter(card => card.difficulty === 'normal'))
}

const getHardCards = (deck) => {
  return shuffle(deck.filter(card => card.difficulty === 'hard'))
}

const constructDeck = (deck, difficulty, amount) => {
  switch(difficulty) {
    case 'easy': {
      const easyCards = getEasyCards(deck);
      const deckLength = easyCards.length;
      const normalCards = getNormalCards(deck);
      if(deckLength < amount){
        return shuffle(easyCards.concat(normalCards.slice(0, amount-deckLength)))
      } else if(deckLength === amount) {
        return shuffle(easyCards)
      } else {
        return shuffle(easyCards.slice(0,amount))
      }
    }
    case 'normal': {
      return shuffle(deck).slice(0,amount)
    }
    case 'hard': {
      const hardCards = getHardCards(deck);
      const deckLength = hardCards.length;
      const normalCards = getNormalCards(deck);
      if(deckLength < amount){
        return shuffle(hardCards.concat(normalCards.slice(0, amount-deckLength)))
      } else if(deckLength === amount) {
        return shuffle(hardCards)
      } else {
        return shuffle(hardCards.slice(0,amount))
      }
    }
    default: 
      break
  }
}