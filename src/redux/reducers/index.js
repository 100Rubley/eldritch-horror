import ancientsReducer from './ancients';
import mythicCardsReducer from './mythicCards';
import commonDecksReducer from './commonDecks'

const rootReducer = {
  ancient: ancientsReducer,
  mythicCards: mythicCardsReducer,
  commonDecks: commonDecksReducer
};

export default rootReducer