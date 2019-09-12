import React, { Component } from 'react';
import { connect } from 'react-redux';

import MythicCardBoard from '../../components/MythicCardBoard';
import purpleContactsBackground from '../../assets/CardBackgrounds/purpleContactsBackground.png';
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
    const { deck, firstStage, secondStage, thirdStage, purpleContacts, gates } = this.props
    console.log(gates)
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
            deck={purpleContacts}
            defaultBackground={purpleContactsBackground}
          />
          <Deck 
            deck={gates}
            defaultBackground={gatesBackground}
          />
        </div>
      </div>
    );
  }
}
 
export default connect(mapStateToProps, null)(GameBoard);