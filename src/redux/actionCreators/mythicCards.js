import * as ActionTypes from '../actionTypes/mythicCards';

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
