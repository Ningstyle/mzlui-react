import React from 'react';
import { Button, Notification, Space } from '../../../packages';

function Demo() {
  const openNotification = (placement) => {
    Notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
      onClose: () => {
        console.log('Notification Closed!');
      },
      placement,
    });
  };
  return (
    <Space>
      <Button type="primary" onClick={() => openNotification('topLeft')}>
        TopLeft
      </Button>
      <Button type="primary" onClick={() => openNotification('topRight')}>
        TopRight
      </Button>
      <Button type="primary" onClick={() => openNotification('bottomLeft')}>
        BottomLeft
      </Button>
      <Button type="primary" onClick={() => openNotification('bottomRight')}>
        BottomRight
      </Button>
    </Space>
  );
}

export default Demo;
