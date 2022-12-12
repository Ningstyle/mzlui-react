import React, { useState } from 'react';
import { Button, Popover } from '../../../packages';

function Demo() {
  // click下才生效
  const [visible, setVisible] = useState(false);
  const hide = () => {
    setVisible(false);
  };
  const content = <a onClick={hide}>Close</a>;
  const onOpenChange = (e) => {
    setVisible(e);
  };
  // return null;
  return (
    <Popover
      visible={visible}
      content={content}
      title="Title"
      onOpenChange={onOpenChange}
    >
      <Button>Hover me</Button>
    </Popover>
  );
}

export default Demo;
