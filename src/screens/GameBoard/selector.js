import { createSelector, createStructuredSelector } from 'reselect';
import get from 'lodash/get';

const ancientSelector = state => state.ancient;
const mythicCardsSelector = state => state.mythicCards;
const commonDecksSelector = state => state.commonDecks

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

const purpleContacts = createSelector(
  commonDecksSelector,
  commonDecksState => get(commonDecksState, 'purpleContacts', [])
)

const greenContacts = createSelector(
  commonDecksSelector,
  commonDecksState => get(commonDecksState, 'greenContacts', [])
)

const brownContacts = createSelector(
  commonDecksSelector,
  commonDecksState => get(commonDecksState, 'brownContacts', [])
)

const commonContacts = createSelector(
  commonDecksSelector,
  commonDecksState => get(commonDecksState, 'commonContacts', [])
)

const gates = createSelector(
  commonDecksSelector,
  commonDecksState => get(commonDecksState, 'gates', [])
)

const expeditions = createSelector(
  commonDecksSelector,
  commonDecksState => get(commonDecksState, 'expeditions', [])
)

export default createStructuredSelector({
  ancientId,
  deck,
  firstStage,
  secondStage,
  thirdStage,
  purpleContacts,
  greenContacts,
  brownContacts,
  commonContacts,
  gates,
  expeditions
})