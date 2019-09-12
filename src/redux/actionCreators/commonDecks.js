import shuffle from 'lodash/shuffle';

import * as ActionTypes from '../actionTypes/commonDecks'

export const shuffleCommonCards = payload => {
  const {
    purpleContacts,
    greenContacts,
    brownContacts,
    gates,
    commonContacts,
    expeditions
  } = payload
  const result = {
    purpleContacts: shuffle(purpleContacts),
    greenContacts: shuffle(greenContacts),
    brownContacts: shuffle(brownContacts),
    commonContacts: shuffle(commonContacts),
    gates: shuffle(gates),
    expeditions: shuffle(expeditions)

  }
  return {
    type: ActionTypes.SHUFFLE_COMMON_CARDS,
    payload: result
  }
}