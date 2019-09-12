import shuffle from 'lodash/shuffle';

import * as ActionTypes from '../actionTypes/commonDecks'

export const shuffleCommonCards = payload => {
  const { purpleContacts } = payload
  const result = {
    purpleContacts: shuffle(purpleContacts)
  }
  return {
    type: ActionTypes.SHUFFLE_COMMON_CARDS,
    payload: result
  }
}