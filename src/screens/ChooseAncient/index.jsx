import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import styles from './styles.module.scss';
import Button from '../../components/Button';
import AncientCard from '../../components/AncientCard';
import background from '../../assets/home.png'
import {
  purpleContacts,
  greenContacts,
  brownContacts,
  gates,
  commonContacts,
  expeditions
} from '../../data/commonCards'

import Modal from '../../components/Modal';
import { ancients } from '../../data'
import { chooseAncient } from '../../redux/actionCreators/screens';
import { shuffleCommonCards } from "../../redux/actionCreators/commonDecks";
import mapStateToProps from './selector';

const mapDispatchToProps = (dispatch) => ({
  chooseAncient: (id) => dispatch(chooseAncient(id)),
  shuffleCommonCards: (decks) => dispatch(shuffleCommonCards(decks))
})

class ChooseAncient extends Component {
  state = {
    chosenAncientId: '',
    isModalOpen: false
  }

  onAncientClick = (id) => {
    this.setState({
      chosenAncientId: id
    })
  }

  componentDidMount() {
    const { ancientId } = this.props;
    this.setState({
      chosenAncientId: ancientId
    })
  }

  handleButtonClick = () => {
    const { chooseAncient, history, shuffleCommonCards } = this.props;
    const { chosenAncientId } = this.state;
    if(chosenAncientId === '') {
      this.setState({
        isModalOpen: true
      })
    } else {
      chooseAncient({ id: chosenAncientId });
      shuffleCommonCards(
        {
          purpleContacts,
          greenContacts,
          brownContacts,
          commonContacts,
          gates,
          expeditions
        }
      );
      history.push('/chooseDifficulty')
    }
  }

  onModalClose = () => {
    this.setState({
      isModalOpen: false
    })
  }

  render() {
    const { isModalOpen } = this.state;
    return(
      <div className={styles.container}>
        <div className={styles.ancientsContainer}>
          {ancients.map(ancient => {
            return (
              <AncientCard 
                key={ancient.id}
                id={ancient.id}
                background={ancient.cardFace}
                onClick={this.onAncientClick}
                selected={this.state.chosenAncientId}
              />
            )  
          })}
        </div>
        <Button 
          text={'Выбрать'}
          onClick={this.handleButtonClick}
        />
        <Modal
          text={'Выберите Древнего'}
          isOpen={isModalOpen}
          onClose={this.onModalClose}
          background={background}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChooseAncient))