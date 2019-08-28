import * as ActionTypes from '../actionTypes/ancients';
import { ancients } from '../../data'

export const chooseAncient = (payload) => {
  const chosen = ancients.find((ancient) => ancient.id === payload.id)
  return { type: ActionTypes.CHOOSE_ANCIENT, payload: {
    id: chosen.id,
    name: chosen.name,
    firstStage: chosen.firstStage,
    secondStage: chosen.secondStage,
    thirdStage: chosen.thirdStage
  }}
}

export const chooseDifficulty = (payload) => {
  return {
    type: ActionTypes.CHOOSE_DIFFICULTY,
    payload
  }
}