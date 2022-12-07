import React from 'react';
import { Button, Popover } from '../../../packages';

function Demo() {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  const onOpenChange = (e) => {
    console.log(e);
  };
  return (
    <Popover content={content} title="Title" onOpenChange={onOpenChange}>
      <Button>Hover me</Button>
    </Popover>
  );
}

export default Demo;
