import { createSelector, createStructuredSelector } from 'reselect';
import get from 'lodash/get';

const ancientSelector = state => state.ancient;

const ancientId = createSelector(
  ancientSelector,
  ancientState => get(ancientState, 'ancientId', 'iogSothoth')
)

const difficulty = createSelector(
  ancientSelector,
  ancientState => get(ancientState, 'difficulty', 'normal')
)


export default createStructuredSelector({
  ancientId,
  difficulty
})