import { azathoth, cthulhu, shubNiggurath, iogSothoth} from '../assets/Ancients'
import specialBackgrounds from '../assets/CardBackgrounds/SpecialCardBackgrounds'
import specialCards from './specialCards';
import ancientContacts from './ancientContacts';
import ancientContactsBackgrounds from '../assets/CardBackgrounds/AncientContacts'

export default [
  {
    id: 'azathoth',
    name: 'azathoth',
    cardFace: azathoth,
    contactsDeck: ancientContacts.azathothContacts,
    contactsDeckBackground: ancientContactsBackgrounds.azathothContactsBackground,
    firstStage: {
      greenCards: 1,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 1,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'cthulhu',
    name: 'cthulhu',
    cardFace: cthulhu,
    specialCards: specialCards.cthulhuCards,
    specialCardsBackground: specialBackgrounds.cthulhuSpecialBackground,
    firstStage: {
      greenCards: 0,
      blueCards: 2,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 1,
      blueCards: 0,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'iogSothoth',
    name: 'iogSothoth',
    cardFace: iogSothoth,
    specialCards: specialCards.iogSothothCards,
    specialCardsBackground: specialBackgrounds.iogSothothSpecialBackground,
    firstStage: {
      greenCards: 0,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 1,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'shubNiggurath',
    name: 'shubNiggurath',
    cardFace: shubNiggurath,
    firstStage: {
      greenCards: 1,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 3,
      blueCards: 1,
      brownCards: 2,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 0,
      brownCards: 4,
    },
  },
]