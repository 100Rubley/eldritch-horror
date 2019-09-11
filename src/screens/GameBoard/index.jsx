import React, { Component } from 'react';
import { connect } from 'react-redux';

import MythicCardBoard from '../../components/MythicCardBoard'
import styles from "./styles.module.scss";

import mapStateToProps from './selector';

class GameBoard extends Component {
  
  state = {  }

  componentDidMount() {
    const { history, ancientId } = this.props;
    if(ancientId === '') {
      history.push('/')
    }
  }

  render() {
    const { deck, firstStage, secondStage, thirdStage } = this.props
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

        </div>
      </div>
    );
  }
}
 
export default connect(mapStateToProps, null)(GameBoard);