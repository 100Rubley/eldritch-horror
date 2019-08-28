import * as ActionTypes from '../actionTypes/mythicCards';

export const shuffleMythicCards = payload => dispatch => {
  dispatch(setMythicCards(payload));
  
}

export const setMythicCards = payload => {
  return {
    type: ActionTypes.SET_MYTHIC_CARDS,
    payload
  }
}