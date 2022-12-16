import React from 'react';
import { Button, notification } from '../../../packages';

function Demo() {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.info({
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
    <>
      <div>{contextHolder}</div>
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
}

export default Demo;
