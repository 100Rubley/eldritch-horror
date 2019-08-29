import { setMythicCardsAmount, setDeckDifficulty, setMythicCards } from './mythicCards';
import { chooseAncientResult, chooseDifficultyResult } from './ancients'
import { ancients } from '../../data';

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


export const chooseDifficulty = payload => dispatch => {
  console.log(payload)
  dispatch(chooseDifficultyResult(payload));
  dispatch(setDeckDifficulty(payload))
};


export const shuffleMythicCards = payload => dispatch => {
  dispatch(setMythicCards(payload));
};
