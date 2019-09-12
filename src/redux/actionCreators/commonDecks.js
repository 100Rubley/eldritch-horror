import shuffle from 'lodash/shuffle';

import * as ActionTypes from '../actionTypes/commonDecks'

export const shuffleCommonCards = payload => {
  const { purpleContacts, gates } = payload
  const result = {
    purpleContacts: shuffle(purpleContacts),
    gates: shuffle(gates)
  }
  return {
    type: ActionTypes.SHUFFLE_COMMON_CARDS,
    payload: result
  }
}