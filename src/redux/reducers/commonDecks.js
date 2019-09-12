import * as ActionTypes from '../actionTypes/commonDecks';

const defaultState = {
  purpleContacts: [],
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case ActionTypes.SHUFFLE_COMMON_CARDS:{
      return {
        ...state,
        purpleContacts: action.payload.purpleContacts,
        gates: action.payload.gates
      }
    }
    default: 
      return state
  }
}

export default reducer