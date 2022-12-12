import React, { ReactNode, useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import './style.scss';

interface popOffsetProps {
  left: number;
  top: number;
  clientHeight: number;
  clientWidth: number;
}
// todo interface or type
export interface PopoverProps {
  content: string | ReactNode;
  title: string;
  visible: boolean | undefined;
  popOffset: popOffsetProps;
  isHidden: boolean;
  placement?: string;
  color?: string;
  changeHidden: (e: boolean) => void;
  trigger: 'hover' | 'focus' | 'click';
}

function PopoverItem(props: PopoverProps): JSX.Element {
  const {
    content,
    title,
    visible,
    isHidden = true,
    popOffset: { top, left, clientHeight, clientWidth },
    placement,
    changeHidden,
    trigger,
  } = props;
  const [popoverStyle, setPopoverStyle] = useState({ top: '0', left: '0' });
  const [arrowStyle, setArrowStyle] = useState({ top: '0', left: '0' });
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isHidden) {
      if (placement === 'top') {
        const popoverEl = popoverRef.current;
        const height = popoverEl?.clientHeight || 0;
        setPopoverStyle({ top: `${top - height}px`, left: `${left}px` });
        setArrowStyle({ top: `${height - 10}px`, left: `${20}px` });
      } else if (placement === 'bottom') {
        setPopoverStyle({
          top: `${top + clientHeight}px`,
          left: `${left}px`,
        });
        setArrowStyle({ top: `${-8 + 10}px`, left: `${20}px` });
      } else if (placement === 'left') {
        const popoverEl = popoverRef.current;
        const width = popoverEl?.clientWidth || 0;
        setPopoverStyle({
          top: `${top}px`,
          left: `${left - width}px`,
        });
        setArrowStyle({ top: `${10}px`, left: `${width - 10}px` });
      } else if (placement === 'right') {
        setPopoverStyle({
          top: `${top}px`,
          left: `${left + clientWidth}px`,
        });
        setArrowStyle({ top: `${10}px`, left: `${-8 + 10}px` });
      }
    }
  }, [isHidden, placement, top, left, clientHeight, clientWidth]);

  const popoverMouseLeave = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (trigger !== 'hover') return;
    if (
      visible ||
      ((e.relatedTarget as HTMLElement).parentNode as HTMLElement).className ===
        'mzl_demo_popover'
    )
      return;
    changeHidden(true);
  };
  return (
    <div
      className={classNames(
        'mzl_popover',
        isHidden ? 'mzl_popover_hidden' : ''
      )}
      ref={popoverRef}
      style={popoverStyle}
      onMouseLeave={(e) => popoverMouseLeave(e)}
    >
      <div
        className={classNames(
          'mzl_popover_content',
          `mzl_popover_content_${placement}`
        )}
      >
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
