import React, { useEffect, useState } from 'react';
import './style.scss';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom/client';

export type MessageProps = {
  open: boolean;
  content?: string;
  duration?: number;
  type?: 'success' | 'error' | 'warning' | 'info' | 'loading';
};

const el = document.createElement('div')
el.className = 'mzl_message-container'
if (!document.querySelector('.mzl_message-container')) {
  document.body.appendChild(el)
}
function MessageEle(props: MessageProps): JSX.Element {
  const { open, content, duration, type } = props;
  const [showMessage, setShowMessage] = useState(false);
  const spaceClass = classNames({
    'mzl_message_item': true,
    [`mzl_message_item_${type}`]: type,
  });
  const defaultIcon = classNames({
    'm-icon-prompt-filling': type === 'info',
    'm-icon-success-filling': type === 'success',
    'm-icon-delete-filling': type === 'error',
    'm-icon-warning-filling': type === 'warning',
  })
  useEffect(() => {
    setShowMessage(open);
    setTimeout(() => {
      setShowMessage(false)
      setTimeout(() => {
        const container = document.querySelector('.mzl_message-container');
        container?.removeChild(document.querySelector('.mzl_message') as Node);
      }, 500)
    }, duration ? duration * 1000 : 3000)
  }, [open])
  return (
    <div>
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <div className="mzl_message_postion">
          <div className={spaceClass}>
            {
              type === 'loading' ? <i className="m-icon-loading1 mzl_publicRotateEle" /> : <i className={defaultIcon} />
            }
            <span>{content}</span>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
MessageEle.defaultProps = {
  content: '',
  duration: 3,
  type: 'info',
};
const Message = {
  Ele: null,
  info: (content: string, duration?: number) => {
    const Ele = document.createElement('div');
    Ele.className = 'mzl_message';
    // 渲染DOM
    ReactDOM.createRoot(Ele as HTMLElement).render(
      <MessageEle open content={content} duration={duration} type="info" />,
    );
    // 置入到指定节点下
    const container = document.querySelector('.mzl_message-container');
    if (container) {
      container.appendChild(Ele);
    }
  },
  success: (content: string, duration?: number) => {
    const Ele = document.createElement('div');
    Ele.className = 'mzl_message';
    // 渲染DOM
    ReactDOM.createRoot(Ele as HTMLElement).render(
      <MessageEle open content={content} duration={duration} type="success" />,
    );
    // 置入到指定节点下
    const container = document.querySelector('.mzl_message-container');
    if (container) {
      container.appendChild(Ele);
    }
  },
  warning: (content: string, duration?: number) => {
    const Ele = document.createElement('div');
    Ele.className = 'mzl_message';
    // 渲染DOM
    ReactDOM.createRoot(Ele as HTMLElement).render(
      <MessageEle open content={content} duration={duration} type="warning" />,
    );
    // 置入到指定节点下
    const container = document.querySelector('.mzl_message-container');
    if (container) {
      container.appendChild(Ele);
    }
  },
  error: (content: string, duration?: number) => {
    const Ele = document.createElement('div');
    Ele.className = 'mzl_message';
    // 渲染DOM
    ReactDOM.createRoot(Ele as HTMLElement).render(
      <MessageEle open content={content} duration={duration} type="error" />,
    );
    // 置入到指定节点下
    const container = document.querySelector('.mzl_message-container');
    if (container) {
      container.appendChild(Ele);
    }
  },
  loading: (content: string, duration?: number) => {
    const Ele = document.createElement('div');
    Ele.className = 'mzl_message';
    // 渲染DOM
    ReactDOM.createRoot(Ele as HTMLElement).render(
      <MessageEle open content={content} duration={duration} type="loading" />,
    );
    // 置入到指定节点下
    const container = document.querySelector('.mzl_message-container');
    if (container) {
      container.appendChild(Ele);
    }
  },
}
export default Message

