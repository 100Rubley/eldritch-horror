import { createSelector, createStructuredSelector } from 'reselect';
import get from 'lodash/get';

const ancientSelector = state => state.ancient;
const mythicCards = state => state.mythicCards;

const ancientId = createSelector(
  ancientSelector,
  ancientState => get(ancientState, 'ancientId', 'iogSothoth')
)

const difficulty = createSelector(
  ancientSelector,
  ancientState => get(ancientState, 'difficulty', 'normal')
)

const cards = createSelector(
  ancientSelector,
  ancientState => get(ancientState, 'cards', {})
)

const decks = createSelector(
  mythicCards,
  mythicCardsState => get(mythicCardsState, 'decks', {})
)

export default createStructuredSelector({
  ancientId,
  difficulty,
  cards,
  mythicCards,
  decks
})