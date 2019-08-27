import React, { Component } from 'react';
import { withRouter } from 'react-router'

import Button from '../../components/Button'
import styles from './styles.module.scss';

class HomePage extends Component {
  handleStartClick = () => {
    const { history } = this.props;
    history.push('/chooseAncient')
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

export default withRouter(HomePage)