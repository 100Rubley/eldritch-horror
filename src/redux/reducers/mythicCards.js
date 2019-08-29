import * as ActionTypes from '../actionTypes/mythicCards';

const defaultState = {
  firstStage: {
    greenCards: 0,
    blueCards: 0,
    brownCards: 0,
  },
  secondStage: {
    greenCards: 0,
    blueCards: 0,
    brownCards: 0,
  },
  thirdStage: {
    greenCards: 0,
    blueCards: 0,
    brownCards: 0,
  },
  greenCardsAmount: 0,
  brownCardsAmount: 0,
  blueCardsAmount: 0,
  difficulty: ''
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SET_DECK_DIFFICULTY: {
      return {
        ...state,
        difficulty: action.payload.id
      }
    }
    case ActionTypes.SET_MYTHIC_CARDS: {
      return {
        ...state,
        firstStage: action.payload.cards.firstStage,
        secondStage: action.payload.cards.secondStage,
        thirdStage: action.payload.cards.thirdStage
      }
    }
    case ActionTypes.SET_MYTHIC_CARDS_AMOUNT: {
      return {
        ...state,
        greenCardsAmount: action.payload.greenCards,
        blueCardsAmount: action.payload.blueCards,
        brownCardsAmount: action.payload.brownCards,
      }
    }
    default:
      return state
  }
}

export default reducer;