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
    // console.log(e);
  };
  return (
    <Popover
      visible={false}
      content={content}
      title="Title"
      onOpenChange={onOpenChange}
      getPopupContainer={(trigger: HTMLElement) =>
        trigger.parentNode as HTMLElement
      }
      placement="bottom"
    >
      <Button>Hover me</Button>
    </Popover>
  );
}

export default Demo;
