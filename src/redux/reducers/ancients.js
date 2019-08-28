import * as ActionTypes from '../actionTypes/ancients';

const defaultState = {
  ancientId: '',
  ancientName: '',
  cards: {
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
  },
  difficulty: 'normal'
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.CHOOSE_ANCIENT: {
      return {
        ...state,
        ancientId: action.payload.id,
        ancientName: action.payload.name,
        cards: action.payload.cards
      }
    }
    case ActionTypes.CHOOSE_DIFFICULTY: {
      return {
        ...state,
        difficulty: action.payload.id
      }
    }
    default:
      return state
  }
}

export default reducer;