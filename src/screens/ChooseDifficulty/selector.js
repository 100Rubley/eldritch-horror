import { createSelector, createStructuredSelector } from 'reselect';
import get from 'lodash/get';

const ancientSelector = state => state.ancient;

const difficulty = createSelector(
  ancientSelector,
  ancientState => get(ancientState, 'difficulty', '')
)

const ancientId = createSelector(
  ancientSelector,
  ancientState => get(ancientState, 'ancientId', '')
)

export default createStructuredSelector({
  difficulty,
  ancientId
})