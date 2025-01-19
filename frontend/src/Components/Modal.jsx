import React, { useState } from 'react';
import Modal from 'react-modal';
import "./Modal.css"

Modal.setAppElement('#root'); // Set the root element for accessibility

function ImageModal({ isOpen, onRequestClose, imageUrl }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal" overlayClassName="overlay">
      <div className="full-length" onClick={onRequestClose}>
        <div className="imag">
            <img src={imageUrl} />
        </div>
        <div className="comments">
            <h1 style={{fontSize: 40}}>All caption and comments here. so lazy to implement that</h1>
        </div>
      </div>
    </Modal>
  );
}

export default ImageModal;
