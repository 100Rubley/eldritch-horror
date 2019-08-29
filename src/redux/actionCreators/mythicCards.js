import * as ActionTypes from '../actionTypes/mythicCards';
import { brownCards } from '../../data/mythicCards'

export const shuffleMythicCards = payload => dispatch => {
  dispatch(setMythicCards(payload));
};

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

export const getInitialCards = payload => {
  console.log(payload.id)
  return {
    type: ''
  }
}