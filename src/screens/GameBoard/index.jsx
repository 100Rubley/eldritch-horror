import React, { Component } from 'react';
import { connect } from 'react-redux';

import MythicCardBoard from '../../components/MythicCardBoard';
import commonContactsBackground from '../../assets/CardBackgrounds/commonContactsBackground.png'
import purpleContactsBackground from '../../assets/CardBackgrounds/purpleContactsBackground.png';
import greenContactsBackground from '../../assets/CardBackgrounds/greenContactsBackground.png'
import brownContactsBackground from '../../assets/CardBackgrounds/brownContactsBackground.png'
import gatesBackground from '../../assets/CardBackgrounds/gatesBackground.png'
import Deck from '../../components/Deck';
import styles from "./styles.module.scss";

import mapStateToProps from './selector';

class GameBoard extends Component {
  componentDidMount() {
    const { history, ancientId } = this.props;
    if(ancientId === '') {
      history.push('/')
    }
  }

  render() {
    const {
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
    } = this.props
    return (
      <div className={styles.container}>
        <div className={styles.mythicCardsContainer}>
          <MythicCardBoard 
            deck={deck}
            firstStage={firstStage}
            secondStage={secondStage}
            thirdStage={thirdStage}
          />
        </div>
        <div className={styles.commonCardsContainer}>
          <Deck 
            deck={commonContacts}
            defaultBackground={commonContactsBackground}
          />
          <Deck 
            deck={purpleContacts}
            defaultBackground={purpleContactsBackground}
          />
          <Deck 
            deck={greenContacts}
            defaultBackground={greenContactsBackground}
          />
          <Deck 
            deck={brownContacts}
            defaultBackground={brownContactsBackground}
          />
          <Deck 
            deck={gates}
            defaultBackground={gatesBackground}
          />
          <Deck 
            deck={expeditions}
            expeditionsDeck
          />
        </div>
      </div>
    );
  }
}
 
export default connect(mapStateToProps, null)(GameBoard);