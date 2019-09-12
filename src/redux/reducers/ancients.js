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
  difficulty: 'normal',
  specialCards: [],
  specialCardsBackground: false,
  contactsDeck: [],
  contactsDeckBackground: false,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.CHOOSE_ANCIENT_RESULT: {
      return {
        ...state,
        ancientId: action.payload.id,
        ancientName: action.payload.name,
        cards: action.payload.cards,
        specialCards: action.payload.specialCards,
        specialCardsBackground: action.payload.specialCardsBackground,
        contactsDeck: action.payload.contactsDeck,
        contactsDeckBackground: action.payload.contactsDeckBackground
      }
    }
    case ActionTypes.CHOOSE_DIFFICULTY_RESULT: {
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