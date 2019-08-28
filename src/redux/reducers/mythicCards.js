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
  difficulty: ''
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SET_MYTHIC_CARDS: {
      return {
        ...state,
        difficulty: action.payload.difficulty,
        firstStage: action.payload.cards.firstStage,
        secondStage: action.payload.cards.secondStage,
        thirdStage: action.payload.cards.thirdStage
      }
    }
    default:
      return state
  }
}

export default reducer;