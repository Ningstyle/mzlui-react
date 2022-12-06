import React, { Component } from 'react';
import ReactDom from 'react-dom';

interface ModalProps {
  children: React.ReactNode;
}
interface ModalState {}

const modalRoot = document.createElement('div');
modalRoot.style.position = 'absolute';
modalRoot.style.top = '0';
modalRoot.style.left = '0';
modalRoot.style.width = '100%';
document.querySelector('body')?.appendChild(modalRoot);
// const modalRoot = document.querySelector('modal-root');

class Modal extends Component<ModalProps, ModalState> {
  el = document.createElement('div');
  componentDidMount(): void {
    modalRoot?.appendChild(this.el);
  }
  componentWillUnmount(): void {
    modalRoot?.removeChild(this.el);
  }
  render(): React.ReactNode {
    return ReactDom.createPortal(this.props.children, this.el);
  }
}

export default Modal;
