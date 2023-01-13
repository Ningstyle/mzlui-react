import React from 'react';
import { Button, Notification, Space } from '../../../packages';

function Demo() {
  const openNotification = () => {
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
      btn: (
        <Space>
          <Button
            type="link"
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              console.log('destroy all');
            }}
          >
            Destroy All
          </Button>
          <Button
            type="primary"
            size="small"
            onClick={() => {
              console.log('Confirm');
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
