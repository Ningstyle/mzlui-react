import './style.scss';

import React, { useState } from 'react';
import classnames from 'classnames';

// Alert 主要有四种样式：success、info、warning、error
type AlertType = 'success' | 'info' | 'warning' | 'error';

const iconMap = {
  success: <i className="m-icon-success-filling" />,
  info: <i className="m-icon-prompt-filling" />,
  warning: <i className="m-icon-warning-filling" />,
  error: <i className="m-icon-delete-filling" />,
};

// 组件接收的 props
export interface AlertProps {
  className?: string;
  /**
   * 警告提示的样式
   */
  type?: AlertType;
  /**
   * 警告提示内容
   */
  message?: string;
  /**
   * 警告提示的辅助性文字介绍
   */
  description?: string;
  /**
   * 是否显示图标
   */
  showIcon?: boolean;
  /**
   * 自定义图标, showIcon 为 true 时生效
   */
  icon?: string;
  /**
   *  是否显示关闭按钮，开启手动关闭功能
   */
  closeable?: boolean;
}

const Alert: React.FC<AlertProps> = (props) => {
  const { className, type, message, description, showIcon, icon, closeable } =
    props;
  // 控制组件显示与隐藏
  const [closed, setClosed] = useState(true);

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    setClosed(false);
  };

  const alertCls = classnames('alert', className, {
    [`alert-${type}`]: type,
    [`alert-with-description`]: !!description,
    [`alert-no-icon`]: !showIcon,
  });

  const renderIconNode = () => {
    const iconType = description
      ? iconMap[type || 'warning']
      : iconMap[type || 'warning'];
    // 判断是否是自定义 icon
    if (icon) {
      return icon;
    }
    return React.createElement('span', { className: `alert-icon` }, iconType);
  };

  const renderCloseIcon = () => {
    return (
      <div className="alert-close-icon" onClick={handleClose}>
        X
      </div>
    );
  };

  if (!closed) {
    return null;
  }
  return (
    <div data-show={closed} className={alertCls}>
      {/* icon */}
      {showIcon ? renderIconNode() : null}
      <span className="alert-message">{message}</span>
      <span className="alert-description">{description}</span>
      {closeable ? renderCloseIcon() : null}
    </div>
  );
};

Alert.defaultProps = {
  className: '',
  type: 'success',
  message: '',
  description: '',
  showIcon: false,
  icon: undefined,
  closeable: false,
};
export default Alert;
