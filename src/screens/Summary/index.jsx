import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Button from '../../components/Button';
import styles from './styles.module.scss';
import mapStateToProps from './selector';
import { ancients, difficulties } from '../../data'

class Summary extends Component {
  state = {
    chosenAncient: 'azathoth'
  }

  componentDidMount() {
    const { history, ancientId } = this.props;
    if(ancientId === '') {
      history.push('/')
    } else {
      this.setState({
        chosenAncient: ancientId
      })
    }
  }

  handleReadyClick = () => {

  }

  handleChangeClick = () => {
    const { history } = this.props;
    history.push('./chooseAncient')
  }

  render() {
    const { difficulty } = this.props;
    const { chosenAncient } = this.state;
    const background = ancients.find(ancient => ancient.id === chosenAncient).cardFace
    const difficultyLevel = difficulties.find(diff => diff.id === difficulty).name
    return (
      <div className={styles.container}>
        <div className={styles.header}>
         <p>{'Вы готовы?'}</p>
        </div>
        <div className={styles.summaryContainer}>
          <div style={{backgroundImage: `url(${background})`}} className={styles.ancientSummary}/>
          <div className={styles.difficultySummary}>
            <p>{'Сложность'}</p>
            <p className={styles.difficultyText}>{difficultyLevel}</p>
          </div>
        </div>
        <div className={styles.buttonsContainer}>
          <Button
            buttonStyle={styles.button}
            text="Перевыбрать"
            onClick={this.handleChangeClick}
          />
          <Button
            buttonStyle={styles.button}
            text="Готовы!"
            onClick={this.handleReadyClick}
          />
        </div>
      </div>
    );
  }
}
 
export default connect(mapStateToProps)(withRouter(Summary));