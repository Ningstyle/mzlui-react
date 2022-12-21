import React, { Component } from 'react';
import ReactDom from 'react-dom';

interface ModalProps {
  children: React.ReactNode;
  popupContainer: HTMLElement;
  showModal: boolean;
}
interface ModalState {
  modalRoot: HTMLDivElement;
}

class Modal extends Component<ModalProps, ModalState> {
  constructor(props: ModalProps) {
    super(props);
    this.state = {
      modalRoot: document.createElement('div'),
    };
  }

  componentDidUpdate(): void {
    const { popupContainer, showModal } = this.props;
    const { modalRoot } = this.state;
    if (!showModal) {
      popupContainer.removeChild(modalRoot);
      return;
    }
    if (popupContainer.tagName === 'BODY') {
      modalRoot.style.position = 'absolute';
      modalRoot.style.top = '0';
      modalRoot.style.left = '0';
      modalRoot.style.width = '100%';
    }
    popupContainer.appendChild(modalRoot);
  }

  render(): React.ReactNode {
    const { modalRoot } = this.state;
    const { children } = this.props;
    return ReactDom.createPortal(children, modalRoot);
  }
}

export default Modal;
