import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import Portal from '../Portal'
import styles from './styles.module.scss'

class Modal extends Component {
  render() {
    const { isOpen, onClose, background, text, flip, onBackFlip, newBackground } = this.props;
    return ( 
      <>
        { isOpen &&  
          <Portal>
            <div className={styles.modalContainer} onClick={onClose} >
              {flip ? (
                <Flippy
                  style={{
                    position: 'absolute',
                    top:'15%',
                    left:'40%',
                    width: '275px',
                    height: '400px',
                  }}
                >
                  <FrontSide
                    onClick={this.onCardFlip}
                    style={{
                      borderRadius: '15px',
                      backgroundImage: `url(${background})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center'
                    }}
                  />
                  <BackSide
                    onClick={() => onBackFlip()}
                    style={{
                      borderRadius: '15px',
                      backgroundImage: `url(${newBackground})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center'
                    }}
                  />
                </Flippy>
              ) : (
                <div style={{backgroundImage: `url(${background})`}} className={styles.modalWindow}>
                  {text && <p className={styles.modalText}>{text}</p>}
                </div>
              )}
              
            </div>
          </Portal>
        }
      </>
    );
  }
}
 
export default Modal;