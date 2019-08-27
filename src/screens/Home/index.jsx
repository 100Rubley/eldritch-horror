import React, { Component } from 'react';

import Button from '../../components/Button'
import styles from './styles.module.scss';

class HomePage extends Component {
  handleStartClick = () => {
    console.log('Hello')
  }

  render() {
    return(
      <div className={styles.container}>
        <Button 
          text={'Начать игру'}
          onClick={this.handleStartClick}
        />
      </div>
    )
  }
}

export default HomePage