import * as ActionTypes from '../actionTypes/ancients';

export const chooseAncientResult = payload => {
  return {
    type: ActionTypes.CHOOSE_ANCIENT_RESULT,
    payload
  }
}

export const chooseDifficultyResult = payload => {
  return {
    type: ActionTypes.CHOOSE_DIFFICULTY_RESULT,
    payload
  }
}