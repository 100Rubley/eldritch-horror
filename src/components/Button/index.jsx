import React from 'react';
import classnames from 'classnames';
import styles from './styles.scss'

const Button = (buttonStyle, textStyle, text) => {
  return ( 
    <div className={classnames(styles.container, buttonStyle)}>
      <p className={classnames(styles.text, textStyle)}>{text}</p>
    </div>
  );
}
 
export default Button;