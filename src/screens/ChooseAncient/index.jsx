import React, { Component } from 'react';

import styles from './styles.module.scss';
import Button from '../../components/Button';
import AncientCard from '../../components/AncientCard';
import { ancients } from '../../data'

class ChooseAncient extends Component {
  state = {
    chosenAncientId: ''
  }

  onAncientClick = (id) => {
    this.setState({
      chosenAncientId: id
    })
  }

  handleButtonClick = () => {
    console.log(this.state.chosenAncientId)
  }

  render() {
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
      </div>
    )
  }
}

export default ChooseAncient