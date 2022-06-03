import { createPortal } from 'react-dom';
import { Component } from 'react';
import s from './modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hideModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hideModal);
  }

  hideModal = e => {
    if (e.code === 'Escape') {
      this.props.onClick();
    }
    if (e.target === e.currentTarget) {
      this.props.onClick();
    }
  };

  render() {
    const { children } = this.props;
    const {hideModal} = this
    return createPortal(
      <div onClick={hideModal} className={s.overlay}>
        <div className={s.modal}>{children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
};
