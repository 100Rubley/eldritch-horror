import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss'

class Button extends Component {
  handleClick = (e) => {
    e.stopPropagation()
    const { onClick } = this.props;
    onClick()
  }

  render() {
    const {text, buttonStyle, textStyle} = this.props;
    return ( 
      <div className={classnames(styles.container, buttonStyle)} onClick={this.handleClick}>
        <p className={classnames(styles.text, textStyle)}>{text}</p>
      </div>
    )
  }
}
 
export default Button;