import React, { Component } from 'react';
import cardBackGround from '../../assets/CardBackgrounds/mythicCardBackground.png';

import Deck from '../Deck';
import styles from './styles.module.scss';

class MythicCardBoard extends Component {
  state = {  }
  
  componentDidMount() {
    const { firstStage, secondStage, thirdStage } = this.props
    this.setState({
      firstStage,
      secondStage,
      thirdStage
    })
  }

  render() {
    const { deck } = this.props;
    return (
      <div className={styles.container}>
        <Deck 
          deck={deck}
          defaultBackground={cardBackGround}
          deckStyle={styles.decksStyle}
        />
      </div>
    );
  }
}
 
export default MythicCardBoard;