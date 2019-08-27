import React, { Component } from 'react';

import Button from '../../components/Button'
import styles from './styles.scss';

class HomePage extends Component {
  render() {
    return(
      <div className={styles.container}>
        <Button 
          text='Начать игру'
        />
      </div>
    )
  }
}

export default HomePage