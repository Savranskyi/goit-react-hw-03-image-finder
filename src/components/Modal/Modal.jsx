import { ModalImage, Overlay } from './Modal.styled';
import PropTypes from 'prop-types';
import React from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modalRoot');

export class Modal extends React.Component {
  static protoType = {
    onClose: PropTypes.func.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <Overlay onClick={this.handleBackDropClick}>
        <ModalImage>{this.props.children}</ModalImage>
      </Overlay>,
      modalRoot
    );
  }
}
