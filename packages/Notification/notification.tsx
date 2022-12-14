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
  style?: {};
  placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
}
export interface NotificationProps extends config {}

const el = document.createElement('div');
const wrapper = document.createElement('div');
el.className = 'mzl_notification';
wrapper.className = 'mzl_notification_wrapper';
el.append(wrapper);

function Notification(props: NotificationProps): JSX.Element {
  const { message, description, placement = 'topLeft' } = props;
  useEffect(() => {
    setTimeout(() => {
      document.body.removeChild(el);
    }, 4500);
  }, []);

  const onClose = () => {
    document.body.removeChild(el);
  };
  return (
    <div
      className={classNames(
        'mzl_demo_notification',
        `mzl_demo_notification_${placement}`
      )}
    >
      <i className="m-icon-prompt-filling mzl_notification_icon" />
      <div className="mzl_notification_content">
        <div className="mzl_notification_title_wrapper">
          <span className="mzl_notification_title">{message}</span>
          <i
            className="m-icon-close mzl_notification_close"
            onClick={onClose}
          />
        </div>
        <div className="mzl_notification_description">{description}</div>
      </div>
    </div>
  );
}
const notification = {
  open: (args: config) => {
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
