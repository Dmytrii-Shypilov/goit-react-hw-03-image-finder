import { createPortal } from 'react-dom';
import { Component } from 'react';
import s from './modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscape);
  }
  onEscape = e => {
    const { onClick } = this.props;
    if (e.code === 'Escape') {
      onClick('Escape');
    }
  };

  render() {
    const { onClick, children } = this.props;
    return createPortal(
      <div onClick={onClick} className={s.overlay}>
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
