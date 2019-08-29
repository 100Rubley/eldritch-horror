import React, { Component } from 'react';
import classnames from 'classnames';
import cardBackGround from '../../assets/CardBackgrounds/mythicCardBackground.png';

import Deck from '../Deck';
import styles from './styles.module.scss';

class MythicCardBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstStage: props.firstStage,
      secondStage: props.secondStage,
      thirdStage: props.thirdStage,
      deck: props.deck
    }
  }

  render() {
    const { firstStage, secondStage, thirdStage, deck } = this.state;
    console.log(firstStage, secondStage, thirdStage)
    return (
      <div className={styles.container}>
        <div className={styles.stagesContainer}>
          <div className={styles.stage}>
            <p>Первый этап:</p>
            <div className={styles.blocksContainer}>
              <div className={styles.blockItem}>
                <div className={classnames(styles.block, styles.green)} />
                <p>{firstStage.greenCards}</p>
              </div>
              <div className={styles.blockItem}>
                <div className={classnames(styles.block, styles.brown)} />
                <p>{firstStage.brownCards}</p>
              </div>
              <div className={styles.blockItem}>
                <div className={classnames(styles.block, styles.blue)} />
                <p>{firstStage.blueCards}</p>
              </div>
            </div>
          </div>
          <div className={styles.stage}>
            <p>Второй этап:</p>
            <div className={styles.blocksContainer}>
            <div className={styles.blockItem}>
                <div className={classnames(styles.block, styles.green)} />
                <p>{secondStage.greenCards}</p>
              </div>
              <div className={styles.blockItem}>
                <div className={classnames(styles.block, styles.brown)} />
                <p>{secondStage.brownCards}</p>
              </div>
              <div className={styles.blockItem}>
                <div className={classnames(styles.block, styles.blue)} />
                <p>{secondStage.blueCards}</p>
              </div>
            </div>
          </div>
          <div className={styles.stage}>
            <p>Третий этап:</p>
            <div className={styles.blocksContainer}>
            <div className={styles.blockItem}>
                <div className={classnames(styles.block, styles.green)} />
                <p>{thirdStage.greenCards}</p>
              </div>
              <div className={styles.blockItem}>
                <div className={classnames(styles.block, styles.brown)} />
                <p>{thirdStage.brownCards}</p>
              </div>
              <div className={styles.blockItem}>
                <div className={classnames(styles.block, styles.blue)} />
                <p>{thirdStage.blueCards}</p>
              </div>
            </div>
          </div>
        </div>
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