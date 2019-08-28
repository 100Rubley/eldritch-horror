import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import Button from '../../components/Button';
import styles from './styles.module.scss';
import DifficultyLevel from '../../components/DifficultyLevel'
import { difficulties } from '../../data';
import { chooseDifficulty } from '../../redux/actionCreators/ancients';
import mapStateToProps from './selector';

const mapDispatchToProps = dispatch => ({
  chooseDifficulty: (id) => dispatch(chooseDifficulty(id))
})

class ChooseDifficulty extends Component{
  state = {
    difficulties: {
      normal: true,
      easy: false,
      hard: false,
    },
    chosenId: ''
  }

  componentDidMount() {
    const { difficulty, ancientId, history } = this.props;
    if(ancientId === '') {
      history.push('/')
    } else {
      this.handleCheckboxClick(difficulty)
    }
  }

  handleCheckboxClick = (id) => {
    const defaultDifficulties = {
      normal: false,
      easy: false,
      hard: false,
    }
    this.setState({
      difficulties: {
        ...defaultDifficulties,
        [id]: true
      },
      chosenId: id
    })
  }

  handleButtonClick = () => {
    const { chooseDifficulty, history } = this.props;
    const { chosenId } = this.state;
    chooseDifficulty({ id: chosenId });
    history.push('/summary');
  }

  render() {
    return(
      <div className={styles.container}>
        <div className={styles.difficultiesContainer}>
          <p className={styles.header}>{'Выберите сложность'}</p>
          <div className={styles.difficultyLevels}>
            {difficulties.map(difficulty => {
              return (
              <DifficultyLevel 
                key={difficulty.id}
                id={difficulty.id}
                active={this.state.difficulties[difficulty.id]}
                text={difficulty.name}
                onClick={this.handleCheckboxClick}
              />)
            })}
          </div>
        </div>
        <Button 
          text={'Выбрать'}
          onClick={this.handleButtonClick}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps ,mapDispatchToProps)(withRouter(ChooseDifficulty))