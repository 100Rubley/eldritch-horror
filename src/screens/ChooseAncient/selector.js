import { createSelector, createStructuredSelector } from 'reselect';
import get from 'lodash/get';

const ancientSelector = state => state.ancient;

const ancientId = createSelector(
  ancientSelector,
  ancientState => get(ancientState, 'ancientId', '')
)

export default createStructuredSelector({
  ancientId
})