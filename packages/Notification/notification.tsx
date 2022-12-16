import React, { useEffect, useState } from 'react';
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
  bottom?: number; // 消息从底部弹出时，距离底部的位置，单位像素
  top?: number; // 消息从顶部弹出时，距离顶部的位置，单位像素
  closeIcon?: React.ReactNode; // 自定义关闭图标
  btn?: React.ReactNode; // 自定义关闭按钮
  icon?: React.ReactNode; // 自定义图标
  type?: 'info' | 'success' | 'warning' | 'error';
  isGlobal?: boolean;
}
export interface NotificationProps extends config {}
interface globalProps {
  duration?: number | null; // null 或 0时不关闭
  placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  bottom?: number; // 消息从底部弹出时，距离底部的位置，单位像素
  top?: number; // 消息从顶部弹出时，距离顶部的位置，单位像素
  closeIcon?: React.ReactNode; // 自定义关闭图标
}
type func = (config: NotificationProps) => void;
interface apiProps {
  open: func;
  success: func;
  info: func;
  warning: func;
  error: func;
}
type contextHolderProps = string;
interface notificationProps extends apiProps {
  config: func;
  useNotification: () => [apiProps, contextHolderProps];
}

const el = document.createElement('div');
const wrapper = document.createElement('div');
el.className = 'mzl_notification';
wrapper.className = 'mzl_notification_wrapper';
el.append(wrapper);

var globalParams: globalProps = {};

function Notification(props: NotificationProps): JSX.Element {
  const {
    message,
    description,
    className = '',
    style = {},
    placement,
    type = '',
    bottom,
    top,
    closeIcon,
    btn,
    icon = null,
    duration,
    onClick,
    onClose,
    isGlobal = false,
  } = props;
  let timer: number | null = null;

  const icons = {
    info: 'm-icon-prompt-filling',
    success: 'm-icon-success-filling',
    warning: 'm-icon-warning-filling',
    error: 'm-icon-delete-filling',
  };

  const getTime = () => {
    if (duration === 0 || duration === null || duration) return duration;
    if (
      globalParams.duration === 0 ||
      globalParams.duration === null ||
      globalParams.duration
    )
      return globalParams.duration;
    return 4.5;
  };

  useEffect(() => {
    if (isGlobal) {
      globalParams = { bottom, closeIcon, duration, placement, top };
    }
    let time = getTime();
    if (time) {
      timer = setTimeout(() => {
        document.body.removeChild(el);
      }, time * 1000);
    }
  }, []);

  const onCloseNotification = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    document.body.removeChild(el);
    timer && clearTimeout(timer);
    e.stopPropagation();
    onClose && onClose();
  };

  const onClickNotification = () => {
    onClick && onClick();
  };

  const getPlacement = () => {
    return placement || globalParams.placement || 'topLeft';
  };
  const getPosition = (type: 'top' | 'bottom') => {
    const position = getPlacement();
    if (position === `${type}Left` || position === `${type}Right`) {
      return props[type] || globalParams[type] || '24px';
    } else {
      return '';
    }
  };

  return (
    <>
      {isGlobal && <></>}
      {!isGlobal && (
        <div
          className={classNames(
            'mzl_demo_notification',
            `mzl_demo_notification_${getPlacement()}`,
            `${className}`
          )}
          style={{
            top: getPosition('top'),
            bottom: getPosition('bottom'),
            ...style,
          }}
        >
          {icon && <span className="mzl_notification_icon">{icon}</span>}
          {!icon && type && (
            <span className="mzl_notification_icon">
              <i className={classNames(`${icons[type]}`)} />
            </span>
          )}
          <div
            className="mzl_notification_content"
            onClick={onClickNotification}
          >
            <div className="mzl_notification_title_wrapper">
              <span className="mzl_notification_title">{message}</span>
              <span
                onClick={(e) => onCloseNotification(e)}
                className="mzl_notification_close"
              >
                {closeIcon || globalParams.closeIcon || (
                  <i className="m-icon-close" />
                )}
              </span>
            </div>
            <div className="mzl_notification_description">{description}</div>
            {btn && <div className="mzl_notification_operation">{btn}</div>}
          </div>
        </div>
      )}
    </>
  );
}
const notification: notificationProps = {
  config: (config: globalProps) => {
    if (document.querySelector('.mzl_notification')) return;
    document.body.appendChild(el);
    const root = document.querySelector('.mzl_notification_wrapper');
    return ReactDOM.createRoot(root as HTMLElement).render(
      <Notification {...config} isGlobal message="" description="" />
    );
  },
  useNotification: () => {
    let api: apiProps = {
      open: () => {},
      success: () => {},
      info: () => {},
      warning: () => {},
      error: () => {},
    };
    Object.keys(notification)
      .filter((item) => item !== 'useNotification')
      .forEach(function (item) {
        api[item as keyof apiProps] =
          notification[item as keyof notificationProps];
      });
    const contextHolder = '';
    return [api, contextHolder];
  },
  open: (config: NotificationProps) => {
    if (document.querySelector('.mzl_notification')) return;
    document.body.appendChild(el);
    const root = document.querySelector('.mzl_notification_wrapper');
    return ReactDOM.createRoot(root as HTMLElement).render(
      <Notification {...config} />
    );
  },
  success: (config: NotificationProps) => {
    if (document.querySelector('.mzl_notification')) return;
    document.body.appendChild(el);
    const root = document.querySelector('.mzl_notification_wrapper');
    return ReactDOM.createRoot(root as HTMLElement).render(
      <Notification {...config} type="success" />
    );
  },
  info: (config: NotificationProps) => {
    if (document.querySelector('.mzl_notification')) return;
    document.body.appendChild(el);
    const root = document.querySelector('.mzl_notification_wrapper');
    return ReactDOM.createRoot(root as HTMLElement).render(
      <Notification {...config} type="info" />
    );
  },
  warning: (config: NotificationProps) => {
    if (document.querySelector('.mzl_notification')) return;
    document.body.appendChild(el);
    const root = document.querySelector('.mzl_notification_wrapper');
    return ReactDOM.createRoot(root as HTMLElement).render(
      <Notification {...config} type="warning" />
    );
  },
  error: (config: NotificationProps) => {
    if (document.querySelector('.mzl_notification')) return;
    document.body.appendChild(el);
    const root = document.querySelector('.mzl_notification_wrapper');
    return ReactDOM.createRoot(root as HTMLElement).render(
      <Notification {...config} type="error" />
    );
  },
};

export default notification;
