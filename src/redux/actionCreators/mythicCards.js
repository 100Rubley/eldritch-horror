import * as ActionTypes from '../actionTypes/mythicCards';
import shuffle from 'lodash/shuffle';

export const setDeckDifficulty = payload => {
  return {
    type: ActionTypes.SET_DECK_DIFFICULTY,
    payload
  }
}

export const setMythicCards = payload => {
  return {
    type: ActionTypes.SET_MYTHIC_CARDS,
    payload
  }
};

export const setMythicCardsAmount = payload => {
  return {
    type: ActionTypes.SET_MYTHIC_CARDS_AMOUNT,
    payload
  }
};

export const setMythicDecks = payload => {
  return {
    type: ActionTypes.SET_MYTHIC_DECKS,
    payload
  }
}

export const completeMythicDeck = payload => {
  const { cards, decks } = payload;
  const { greenDeck, brownDeck, blueDeck} = decks;
  const completeDeck = [];
  Object.keys(cards).forEach(stage => {
    let stageDeck = []
    Object.keys(cards[stage]).forEach(cardSet => {
      switch(cardSet) {
        case 'greenCards': {
          const requestedAmount = cards[stage][cardSet]
          const cardsToAdd = greenDeck.splice(0,requestedAmount)
          stageDeck = stageDeck.concat(cardsToAdd);
          break
        }
        case 'brownCards': {
          const requestedAmount = cards[stage][cardSet]
          const cardsToAdd = brownDeck.splice(0,requestedAmount)
          stageDeck = stageDeck.concat(cardsToAdd);
          break
        }
        case 'blueCards': {
          const requestedAmount = cards[stage][cardSet]
          const cardsToAdd = blueDeck.splice(0,requestedAmount)
          stageDeck = stageDeck.concat(cardsToAdd);
          break
        }
        default:
          break
      }
    })
    const shuffledDeck = shuffle(stageDeck)
    shuffledDeck.forEach(card => {
      completeDeck.push(card)
    })
  })
  return {
    type: ActionTypes.COMPLETE_MYTHIC_DECK,
    payload: completeDeck
  }
}
