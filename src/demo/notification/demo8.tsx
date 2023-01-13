import React, { useEffect } from 'react';
import { Button, Notification } from '../../../packages';

function Demo() {
  useEffect(() => {
    Notification.config({
      bottom: 400,
      top: 400,
      duration: 4.5,
      placement: 'topRight',
      closeIcon: <i className="m-icon-success-filling" />,
      message: '',
      description: '',
    });
  }, []);
  return <Button type="primary">Open the notification box</Button>;
}

export default Demo;
