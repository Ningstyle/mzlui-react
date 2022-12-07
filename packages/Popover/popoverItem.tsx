import React, { ReactNode, useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import './style.scss';

// todo interface or type
export interface PopoverProps {
  content: string | ReactNode;
  title: string;
  left: number;
  top: number;
  clientHeight: number;
  clientWidth: number;
  isHidden: boolean;
  placement?: string;
  color?: string;
}

function PopoverItem(props: PopoverProps): JSX.Element {
  const {
    content,
    title,
    isHidden = true,
    top,
    left,
    clientHeight,
    clientWidth,
    placement,
  } = props;
  const [popoverStyle, setPopoverStyle] = useState({ top: '0', left: '0' });
  const [arrowStyle, setArrowStyle] = useState({ top: '0', left: '0' });
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isHidden) {
      if (placement === 'top') {
        const popoverEl = popoverRef.current;
        const height = popoverEl?.clientHeight || 0;
        setPopoverStyle({ top: `${top - height - 10}px`, left: `${left}px` });
        setArrowStyle({ top: `${height}px`, left: `${20}px` });
      } else if (placement === 'bottom') {
        setPopoverStyle({
          top: `${top + clientHeight + 10}px`,
          left: `${left}px`,
        });
        setArrowStyle({ top: `${-8}px`, left: `${20}px` });
      } else if (placement === 'left') {
        const popoverEl = popoverRef.current;
        const width = popoverEl?.clientWidth || 0;
        setPopoverStyle({
          top: `${top}px`,
          left: `${left - width - 10}px`,
        });
        setArrowStyle({ top: `${10}px`, left: `${width}px` });
      } else if (placement === 'right') {
        setPopoverStyle({
          top: `${top}px`,
          left: `${left + clientWidth + 10}px`,
        });
        setArrowStyle({ top: `${10}px`, left: `${-8}px` });
      }
    }
  }, [isHidden, placement, top, left, clientHeight, clientWidth]);

  return (
    <div
      className={classNames(
        'mzl_popover',
        isHidden ? 'mzl_popover_hidden' : ''
      )}
      ref={popoverRef}
      style={popoverStyle}
    >
      <div className="mzl_popover_content">
        <div
          className={classNames(
            'mzl_popover_arrow',
            `mzl_popover_arrow_${placement}`
          )}
          style={arrowStyle}
        ></div>
        <div className="mzl_popover_inner">
          <div className="mzl_popover_title">{title}</div>
          <div className="mzl_popover_inner_content">{content}</div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(PopoverItem);
