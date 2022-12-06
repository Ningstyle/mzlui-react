import React, { ReactNode, useRef, useEffect } from 'react';
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
  align?: string;
  color?: string;
}

function PopoverItem(props: PopoverProps): JSX.Element {
  const {
    content,
    title,
    isHidden,
    top,
    left,
    clientHeight,
    clientWidth,
    align,
  } = props;
  const popoverRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isHidden) {
      if (align === 'top') {
        const popoverEl = popoverRef.current;
        const height = popoverEl?.clientHeight || 0;
        popoverEl && (popoverEl.style.top = `${top - height - 10}px`);
        popoverEl && (popoverEl.style.left = `${left}px`);
        const arrowEl = arrowRef.current;
        arrowEl && (arrowEl.style.top = `${height}px`);
        arrowEl && (arrowEl.style.left = `${20}px`);
        arrowEl && (arrowEl.style.borderTop = '8px solid #fff');
        arrowEl && (arrowEl.style.borderLeft = '8px solid transparent');
        arrowEl && (arrowEl.style.borderRight = '8px solid transparent');
        arrowEl &&
          (arrowEl.style.filter =
            'drop-shadow(0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%))');
      } else if (align === 'bottom') {
        const popoverEl = popoverRef.current;
        const height = popoverEl?.clientHeight || 0;
        popoverEl && (popoverEl.style.top = `${top + clientHeight + 10}px`);
        popoverEl && (popoverEl.style.left = `${left}px`);
        const arrowEl = arrowRef.current;
        arrowEl && (arrowEl.style.top = `${-8}px`);
        arrowEl && (arrowEl.style.left = `${20}px`);
        arrowEl && (arrowEl.style.borderBottom = '8px solid #fff');
        arrowEl && (arrowEl.style.borderLeft = '8px solid transparent');
        arrowEl && (arrowEl.style.borderRight = '8px solid transparent');
        arrowEl &&
          (arrowEl.style.filter =
            'drop-shadow(0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%))');
      } else if (align === 'left') {
        const popoverEl = popoverRef.current;
        const height = popoverEl?.clientHeight || 0;
        const width = popoverEl?.clientWidth || 0;
        popoverEl && (popoverEl.style.top = `${top}px`);
        popoverEl && (popoverEl.style.left = `${left - width - 10}px`);
        const arrowEl = arrowRef.current;
        arrowEl && (arrowEl.style.top = `${10}px`);
        arrowEl && (arrowEl.style.left = `${width}px`);
        arrowEl && (arrowEl.style.borderTop = '8px solid transparent');
        arrowEl && (arrowEl.style.borderBottom = '8px solid transparent');
        arrowEl && (arrowEl.style.borderLeft = '8px solid #fff');
        arrowEl &&
          (arrowEl.style.filter =
            'drop-shadow(0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%))');
      } else if (align === 'right') {
        const popoverEl = popoverRef.current;
        const height = popoverEl?.clientHeight || 0;
        const width = popoverEl?.clientWidth || 0;
        popoverEl && (popoverEl.style.top = `${top}px`);
        popoverEl && (popoverEl.style.left = `${left + clientWidth + 10}px`);
        const arrowEl = arrowRef.current;
        arrowEl && (arrowEl.style.top = `${10}px`);
        arrowEl && (arrowEl.style.left = `${-8}px`);
        arrowEl && (arrowEl.style.borderTop = '8px solid transparent');
        arrowEl && (arrowEl.style.borderBottom = '8px solid transparent');
        arrowEl && (arrowEl.style.borderRight = '8px solid #fff');
        arrowEl &&
          (arrowEl.style.filter =
            'drop-shadow(0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%))');
      }
    }
  }, [isHidden]);

  return (
    <div
      className={classNames(
        'mzl_popover',
        isHidden ? 'mzl_popover_hidden' : ''
      )}
      ref={popoverRef}
    >
      <div className="mzl_popover_content">
        <div className="mzl_popover_arrow" ref={arrowRef}></div>
        <div className="mzl_popover_inner">
          <div className="mzl_popover_title">{title}</div>
          <div className="mzl_popover_inner_content">{content}</div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(PopoverItem);
