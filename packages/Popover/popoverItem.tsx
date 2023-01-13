import React, { ReactNode, useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import './style.scss';

interface PopOffsetProps {
  left: number;
  top: number;
  clientHeight: number;
  clientWidth: number;
}
export interface PopoverProps {
  content: string | ReactNode;
  title: string;
  visible: boolean | undefined;
  popOffset: PopOffsetProps;
  isHidden: boolean;
  placement?: string;
  // color?: string;
  changeHidden: (e: boolean) => void;
  trigger: 'hover' | 'focus' | 'click';
  containerDom: HTMLElement;
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
    containerDom,
  } = props;
  const [popoverStyle, setPopoverStyle] = useState({});
  const [arrowStyle, setArrowStyle] = useState({ top: '0', left: '0' });
  const popoverRef = useRef<HTMLDivElement>(null);
  const containerIsBody = containerDom.tagName === 'BODY';
  useEffect(() => {
    if (isHidden) return;
    const popoverEl = popoverRef.current;
    const height = popoverEl?.clientHeight || 0;
    const width = popoverEl?.clientWidth || 0;
    switch (placement) {
      case 'top':
        setPopoverStyle({
          position: containerIsBody ? 'absolute' : 'relative',
          top: containerIsBody
            ? `${top - height}px`
            : `${-height - clientHeight}px`,
          left: containerIsBody ? `${left}px` : `${0}px`,
        });
        setArrowStyle({ top: `${height - 10}px`, left: `${20}px` });
        break;
      case 'bottom':
        setPopoverStyle({
          position: containerIsBody ? 'absolute' : 'relative',
          top: containerIsBody ? `${top + clientHeight}px` : `${0}px`,
          left: containerIsBody ? `${left}px` : `${0}px`,
        });
        setArrowStyle({ top: `${-8 + 10}px`, left: `${20}px` });
        break;
      case 'left':
        setPopoverStyle({
          position: containerIsBody ? 'absolute' : 'relative',
          top: containerIsBody ? `${top}px` : `${-clientHeight}px`,
          left: containerIsBody ? `${left - width}px` : `${-width}px`,
        });
        setArrowStyle({ top: `${10}px`, left: `${width - 10}px` });
        break;
      case 'right':
        setPopoverStyle({
          position: containerIsBody ? 'absolute' : 'relative',
          top: containerIsBody ? `${top}px` : `${-clientHeight}px`,
          left: containerIsBody
            ? `${left + clientWidth}px`
            : `${clientWidth}px`,
        });
        setArrowStyle({ top: `${10}px`, left: `${-8 + 10}px` });
        break;
      default:
        break;
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
    <CSSTransition
      in={!isHidden}
      timeout={300}
      classNames="popover"
      unmountOnExit
    >
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
          />
          <div className="mzl_popover_inner">
            <div className="mzl_popover_title">{title}</div>
            <div className="mzl_popover_inner_content">{content}</div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}
PopoverItem.defaultProps = {
  placement: 'left',
};
export default React.memo(PopoverItem);
