import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';

class DifficultyLevel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id
    }
  }
  
  handleCheckboxClick = () => {
    const { onClick } = this.props;
    const { id } = this.state;
    onClick(id);
  }

  render() {
    const { text, active } = this.props
    return (
      <div className={styles.container}>
        <div 
          className={classnames(styles.checkbox, { [styles.active]: active })}
          onClick={this.handleCheckboxClick}
        />
        <p className={styles.text}>{text}</p>
      </div>
    );
  }
}
 
export default DifficultyLevel;