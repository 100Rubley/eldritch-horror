import shuffle from 'lodash/shuffle'
import { setMythicCardsAmount, setDeckDifficulty, setMythicCards, setMythicDecks } from './mythicCards';
import { chooseAncientResult, chooseDifficultyResult } from './ancients'
import { ancients } from '../../data';
import { shuffleMythicCardsUtil } from '../../utils';

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
    specialCards: shuffle(chosen.specialCards),
    specialCardsBackground: chosen.specialCardsBackground || false,
    cards,
    contactsDeck: shuffle(chosen.contactsDeck),
    contactsDeckBackground: chosen.contactsDeckBackground
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
  dispatch(chooseDifficultyResult(payload));
  dispatch(setDeckDifficulty(payload))
};


export const shuffleMythicCards = payload => dispatch => {
  const { cards, mythicCards } = payload;
  const { greenCardsAmount, brownCardsAmount, blueCardsAmount, difficulty } = mythicCards
  dispatch(setMythicCards(cards));
  const decks = shuffleMythicCardsUtil(greenCardsAmount, brownCardsAmount, blueCardsAmount, difficulty);
  dispatch(setMythicDecks(decks));
};

