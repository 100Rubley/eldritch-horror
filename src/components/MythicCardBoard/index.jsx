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

  removeCard = (color) => {
    const { firstStage, secondStage, thirdStage } = this.state;
    switch(color) {
      case 'green': {
        if(firstStage.greenCards > 0) {
          firstStage.greenCards = firstStage.greenCards - 1;
          this.setState({
            firstStage
          })
        } else if(secondStage.greenCards > 0) {
          secondStage.greenCards = secondStage.greenCards - 1;
          this.setState({
            secondStage
          })
        } else {
          thirdStage.greenCards = thirdStage.greenCards - 1;
          this.setState({
            thirdStage
          })
        }
        break
      }
      case 'brown': {
        if(firstStage.brownCards > 0) {
          firstStage.brownCards = firstStage.brownCards - 1;
          this.setState({
            firstStage
          })
        } else if(secondStage.brownCards > 0) {
          secondStage.brownCards = secondStage.brownCards - 1;
          this.setState({
            secondStage
          })
        } else {
          thirdStage.brownCards = thirdStage.brownCards - 1;
          this.setState({
            thirdStage
          })
        }
        break
      }
      case 'blue': {
        if(firstStage.blueCards > 0) {
          firstStage.blueCards = firstStage.blueCards - 1;
          this.setState({
            firstStage
          })
        } else if(secondStage.blueCards > 0) {
          secondStage.blueCards = secondStage.blueCards - 1;
          this.setState({
            secondStage
          })
        } else {
          thirdStage.blueCards = thirdStage.blueCards - 1;
          this.setState({
            thirdStage
          })
        }
        break
      }
      default:
        break
    }
  }

  render() {
    const { firstStage, secondStage, thirdStage, deck } = this.state;
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
          deckLabel={'Колода Мифов'}
          deck={deck}
          defaultBackground={cardBackGround}
          deckStyle={styles.decksStyle}
          ancientDeck
          removeCard={this.removeCard}
        />
      </div>
    );
  }
}
 
export default MythicCardBoard;