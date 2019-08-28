import React, { Component } from 'react';

import Portal from '../Portal'
import styles from './styles.module.scss'

class Modal extends Component {
  render() {
    const { isOpen, onClose, background } = this.props
    return ( 
      <>
        { isOpen &&  
          <Portal>
            <div className={styles.modalContainer} onClick={onClose} >
              <div style={{backgroundImage: `url(${background})`}} className={styles.modalWindow}/>
            </div>
          </Portal>
        }
      </>
    );
  }
}
 
export default Modal;