import React from 'react';
import { Button, Notification, Space } from '../../../packages';

function Demo() {
  const openNotification = (type) => {
    Notification[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
      onClose: () => {
        console.log('Notification Closed!');
      },
    });
  };
  return (
    <Space>
      <Button type="success" onClick={() => openNotification('success')}>
        Success
      </Button>
      <Button type="info" onClick={() => openNotification('info')}>
        Info
      </Button>
      <Button type="warning" onClick={() => openNotification('warning')}>
        Warning
      </Button>
      <Button type="error" onClick={() => openNotification('error')}>
        Error
      </Button>
    </Space>
  );
}

export default Demo;
