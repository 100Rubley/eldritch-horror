import React, { Component } from 'react';

import styles from './styles.module.scss';
import classnames from 'classnames';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: props.deck,
      defaultBackground: props.defaultBackground,
      background: props.defaultBackground
    }
  }

  render() {
    const { background } = this.state;
    const { deckStyle } = this.props;
    return (
      <div style={{backgroundImage: `url(${background})`}} className={classnames(styles.deckContainer, deckStyle)}>

      </div>
    );
  }
}
 
export default Deck;