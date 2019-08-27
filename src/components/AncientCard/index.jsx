import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';

class AncientCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
    }
  }

  handleClick = (id) => {
    const { onClick } = this.props;
    onClick(id);
  }

  render() {
    const { id } = this.state;
    const { selected, background } = this.props;
    return (
      <div 
        className={
          classnames(
            styles.container,
            {[styles.selected]: id === selected},
        )} 
        onClick={() => this.handleClick(id)}
        style={{backgroundColor: background}}
      >

      </div>
    );
  }
}
 
export default AncientCard;