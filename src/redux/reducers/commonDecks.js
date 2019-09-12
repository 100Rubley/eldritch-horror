import * as ActionTypes from '../actionTypes/commonDecks';

const defaultState = {
  purpleContacts: [],
  greenContacts: [],
  brownContacts: [],
  commonContacts: [],
  gates: [],
  expeditions: []
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case ActionTypes.SHUFFLE_COMMON_CARDS:{
      return {
        ...state,
        purpleContacts: action.payload.purpleContacts,
        greenContacts: action.payload.greenContacts,
        brownContacts: action.payload.brownContacts,
        commonContacts: action.payload.commonContacts,
        gates: action.payload.gates,
        expeditions: action.payload.expeditions
      }
    }
    default: 
      return state
  }
}

export default reducer