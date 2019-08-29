import * as ActionTypes from '../actionTypes/ancients';
import { ancients } from '../../data';
import { setMythicCardsAmount, getInitialCards } from './mythicCards';

export const chooseAncient = payload => dispatch => {
  const chosen = ancients.find((ancient) => ancient.id === payload.id)
  const cards = {
    firstStage: chosen.firstStage,
    secondStage: chosen.secondStage,
    thirdStage: chosen.thirdStage
  };
  const ancientResult = {
    id: chosen.id,
    name: chosen.name,
    cards
  };
  const cardsResult = {
    blueCards: cards.firstStage.blueCards+cards.secondStage.blueCards+cards.thirdStage.blueCards,
    brownCards: cards.firstStage.brownCards+cards.secondStage.brownCards+cards.thirdStage.brownCards,
    greenCards: cards.firstStage.greenCards+cards.secondStage.greenCards+cards.thirdStage.greenCards
  };
  dispatch(chooseAncientResult(ancientResult));
  dispatch(setMythicCardsAmount(cardsResult));
};

export const chooseAncientResult = payload => {
  return {
    type: ActionTypes.CHOOSE_ANCIENT_RESULT,
    payload
  }
}

export const chooseDifficulty = payload => dispatch => {
  dispatch(chooseDifficultyResult(payload));
  dispatch(getInitialCards(payload));
};

export const chooseDifficultyResult = payload => {
  return {
    type: ActionTypes.CHOOSE_DIFFICULTY_RESULT,
    payload
  }
}