import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import classNames from 'classnames';
import './style.scss';

interface config {
  message: string | React.ReactNode;
  description: string | React.ReactNode;
  onClick?: () => void;
  onClose?: () => void;
  className?: string;
  duration?: number | null; // null 或 0时不关闭
  style?: {};
  placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  type?: 'info' | 'success' | 'warning' | 'error';
  bottom?: number; // 消息从底部弹出时，距离底部的位置，单位像素
  top?: number; // 消息从顶部弹出时，距离顶部的位置，单位像素
  closeIcon?: React.ReactNode; // 自定义关闭图标
  btn?: React.ReactNode; // 自定义关闭按钮
  icon?: React.ReactNode; // 自定义图标
}
export interface NotificationProps extends config {}

const el = document.createElement('div');
const wrapper = document.createElement('div');
el.className = 'mzl_notification';
wrapper.className = 'mzl_notification_wrapper';
el.append(wrapper);

function Notification(props: NotificationProps): JSX.Element {
  const {
    message,
    description,
    className = '',
    style = {},
    placement = 'topLeft',
    type = 'info',
    bottom = 24,
    top = 24,
    closeIcon = <i className="m-icon-close" />,
    btn,
    icon = null,
    duration = 4.5,
    onClick,
    onClose,
  } = props;

  const icons = {
    info: 'm-icon-prompt-filling',
    success: 'm-icon-success-filling',
    warning: 'm-icon-warning-filling',
    error: 'm-icon-delete-filling',
  };
  useEffect(() => {
    duration &&
      setTimeout(() => {
        document.body.removeChild(el);
      }, duration * 1000);
  }, []);

  const onCloseNotification = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    document.body.removeChild(el);
    e.stopPropagation();
    onClose && onClose();
  };

  const onClickNotification = () => {
    onClick && onClick();
  };
  return (
    <div
      className={classNames(
        'mzl_demo_notification',
        `mzl_demo_notification_${placement}`,
        `${className}`
      )}
      style={{
        top:
          placement === 'topLeft' || placement === 'topRight' ? `${top}px` : '',
        bottom:
          placement === 'bottomLeft' || placement === 'bottomRight'
            ? `${bottom}px`
            : '',
        ...style,
      }}
    >
      {icon && (
        <span className="mzl_notification_icon">
          {/* <i className={classNames(`${icons[type]}`)} /> */}
          {icon}
        </span>
      )}
      <div className="mzl_notification_content" onClick={onClickNotification}>
        <div className="mzl_notification_title_wrapper">
          <span className="mzl_notification_title">{message}</span>
          <span
            onClick={(e) => onCloseNotification(e)}
            className="mzl_notification_close"
          >
            {closeIcon}
          </span>
        </div>
        <div className="mzl_notification_description">{description}</div>
        {btn && <div className="mzl_notification_operation">{btn}</div>}
      </div>
    </div>
  );
}
const notification = {
  open: (args: config) => {
    if (document.querySelector('.mzl_notification')) return;
    document.body.appendChild(el);
    const root = document.querySelector('.mzl_notification_wrapper');
    return ReactDOM.createRoot(root as HTMLElement).render(
      <Notification {...args} />
    );
  },
  success: (args: config) => {
    if (document.querySelector('.mzl_notification')) return;
    document.body.appendChild(el);
    const root = document.querySelector('.mzl_notification_wrapper');
    const r = ReactDOM.createRoot(root as HTMLElement).render(
      <Notification {...args} />
    );
    return r;
  },
};

export default notification;
