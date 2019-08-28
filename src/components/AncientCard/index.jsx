import React, { Component } from 'react';
import classnames from 'classnames';

import Button from '../Button';
import Modal from '../Modal';
import styles from './styles.module.scss';
import eyeIcon from '../../assets/icons/eyeIcon.png'

class AncientCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      hover: false,
      isModalOpen: false
    }
  }

  onMouseEnter = () => {
    this.setState({hover: true})
  }

  onMouseLeave = () => {
    this.setState({hover: false})
  }

  handleClick = (id) => {
    const { onClick } = this.props;
    onClick(id);
  }

  handleInfoClick = () => {
    this.setState({
      isModalOpen: true
    })
  } 

  onModalClose = () => {
    this.setState({
      isModalOpen: false
    })
  }

  render() {
    const { id, hover, isModalOpen } = this.state;
    const { selected, background } = this.props;
    return (
      <div 
        className={
          classnames(
            styles.container,
            {[styles.selected]: id === selected},
        )} 
        onClick={() => this.handleClick(id)}
        style={{backgroundImage: `url(${background})`}}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {hover ? (
          <div>
            <Button 
              img={eyeIcon}
              buttonStyle={styles.infoButton}
              textStyle={styles.infoButtonText}
              onClick={this.handleInfoClick}
            />
          </div>
        ) : null}
        <Modal 
          isOpen={isModalOpen}
          onClose={this.onModalClose}
          background={background}
        />
      </div>
    );
  }
}
 
export default AncientCard;