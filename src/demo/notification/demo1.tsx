import React from 'react';
import { Button, notification } from '../../../packages';

function Demo() {
  const openNotification = () => {
    notification.open({
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
    <Button type="primary" onClick={openNotification}>
      Open the notification box
    </Button>
  );
}

export default Demo;
