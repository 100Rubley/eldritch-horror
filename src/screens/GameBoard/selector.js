import { createSelector, createStructuredSelector } from 'reselect';
import get from 'lodash/get';

const ancientSelector = state => state.ancient;
const mythicCardsSelector = state => state.mythicCards;

const ancientId = createSelector(
  ancientSelector,
  ancientState => get(ancientState, 'ancientId', '')
)

const deck = createSelector(
  mythicCardsSelector,
  mythicCardsState => get(mythicCardsState, 'deck', [])
)

const firstStage = createSelector(
  mythicCardsSelector,
  mythicCardsState => get(mythicCardsState, 'firstStage', [])
)

const secondStage = createSelector(
  mythicCardsSelector,
  mythicCardsState => get(mythicCardsState, 'secondStage', [])
)

const thirdStage = createSelector(
  mythicCardsSelector,
  mythicCardsState => get(mythicCardsState, 'thirdStage', [])
)

export default createStructuredSelector({
  ancientId,
  deck,
  firstStage,
  secondStage,
  thirdStage
})