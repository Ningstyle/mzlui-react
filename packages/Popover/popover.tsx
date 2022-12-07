import React, { ReactNode, useEffect, useRef, useState } from 'react';
// todo react-dom/client 与react
import Modal from './Modal';
import PopoverItem from './popoverItem';
import './style.scss';

// todo interface or type
export interface PopoverProps {
  children: ReactNode;
  content: string | ReactNode;
  title: string;
  align?: 'left' | 'right' | 'top' | 'bottom';
  visible?: boolean;
  onOpenChange?: (visible: boolean) => void;
}

function Popover(props: PopoverProps): JSX.Element {
  const {
    children,
    content,
    title,
    align = 'top',
    onOpenChange,
    visible = false,
  } = props;
  const [isHidden, setIsHidden] = useState(!visible);
  const popoverComponentRef = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  let componentLeft: number,
    componentTop: number,
    componentWidth: number,
    componentHeight: number;

  useEffect(() => {
    const popoverComponentOffset =
      popoverComponentRef.current?.getBoundingClientRect();
    componentLeft = popoverComponentOffset?.left || 0;
    componentTop = popoverComponentOffset?.top || 0;
    componentHeight = popoverComponentRef.current?.clientHeight || 0;
    componentWidth = popoverComponentRef.current?.clientWidth || 0;
    if (!isHidden) {
      setPopoverVisible();
    }
  }, [isHidden]);

  // 弹出气泡卡片
  const setPopoverVisible = (): void => {
    setIsHidden(false);
    setTop(componentTop);
    setLeft(componentLeft);
    setHeight(componentHeight);
    setWidth(componentWidth);
  };

  // 执行onOpenChange事件
  const onPopoverChange = (): void => {
    onOpenChange && onOpenChange(isHidden);
  };

  const popoverMouseOver = (): void => {
    // 设置隐藏元素为显示，去掉className: hidden
    // todo 这里获取到jsx元素？用ref获取到的是dom元素，jsx元素和dom元素的操作区别？
    // el && (el.style.top = `${top - height - 10}px`);
    // el && (el.style.left = `${left}px`);
    if (visible) return;
    setPopoverVisible();
    onPopoverChange();
  };

  const popoverMouseOut = (): void => {
    if (visible) return;
    setIsHidden(true);
    onPopoverChange();
  };

  return (
    <>
      <div
        className="mzl_demo_popover"
        ref={popoverComponentRef}
        onMouseOver={popoverMouseOver}
        onMouseOut={popoverMouseOut}
      >
        {children}
      </div>
      <Modal>
        <PopoverItem
          content={content}
          title={title}
          align={align}
          isHidden={isHidden}
          left={left}
          top={top}
          clientHeight={height}
          clientWidth={width}
        />
      </Modal>
    </>
  );
}

export default Popover;
