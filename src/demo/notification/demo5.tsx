import React from 'react';
import { Button, notification, Space } from '../../../packages';

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
      btn: (
        <Space>
          <Button
            type="link"
            size="small"
            onClick={() => {
              console.log('destroy');
            }}
          >
            Destroy All
          </Button>
          <Button
            type="primary"
            size="small"
            onClick={() => {
              console.log('destroy');
            }}
          >
            Confirm
          </Button>
        </Space>
      ),
    });
  };
  return (
    <Button type="primary" onClick={openNotification}>
      Open the notification box
    </Button>
  );
}

export default Demo;
