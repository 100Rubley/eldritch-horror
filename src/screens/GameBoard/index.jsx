import React, { Component } from 'react';
import { connect } from 'react-redux';

import MythicCardBoard from '../../components/MythicCardBoard';
import commonBackgrounds from '../../assets/CardBackgrounds/CommonBackgrounds'
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
      expeditions,
      specialCards,
      specialCardsBackground,
      contactsDeck,
      contactsDeckBackground
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
            defaultBackground={commonBackgrounds.commonContactsBackground}
          />
          <Deck 
            deck={purpleContacts}
            defaultBackground={commonBackgrounds.purpleContactsBackground}
          />
          <Deck 
            deck={greenContacts}
            defaultBackground={commonBackgrounds.greenContactsBackground}
          />
          <Deck 
            deck={brownContacts}
            defaultBackground={commonBackgrounds.brownContactsBackground}
          />
          <Deck 
            deck={gates}
            defaultBackground={commonBackgrounds.gatesBackground}
          />
          <Deck 
            deck={expeditions}
            expeditionsDeck
          />
          <Deck 
            deck={contactsDeck}
            defaultBackground={contactsDeckBackground}
          />
          {specialCardsBackground &&
            <Deck 
              deck={specialCards}
              defaultBackground={specialCardsBackground}
            />
          }
        </div>
      </div>
    );
  }
}
 
export default connect(mapStateToProps, null)(GameBoard);