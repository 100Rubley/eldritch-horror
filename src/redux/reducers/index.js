import ancientsReducer from './ancients';
import mythicCardsReducer from './mythicCards';

const rootReducer = {
  ancient: ancientsReducer,
  mythicCards: mythicCardsReducer
};

export default rootReducer