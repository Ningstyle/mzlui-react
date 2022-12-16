import React from 'react';
import { Button, Popover } from '../../../packages';

function Demo() {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  return (
    <Popover
      content={content}
      title="Title"
      getPopupContainer={(trigger: HTMLElement) =>
        trigger.parentNode as HTMLElement
      }
      trigger="click"
      placement="bottom"
    >
      <Button>Click me</Button>
    </Popover>
  );
}

export default Demo;
