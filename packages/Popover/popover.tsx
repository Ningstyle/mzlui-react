import React, { useEffect, useRef, useState } from 'react';
// todo react-dom/client 与react
import Modal from './Modal';
import PopoverItem from './popoverItem';
import './style.scss';

// todo interface or type
export interface PopoverProps {
  children: React.ReactNode;
  content: string | React.ReactNode;
  title: string;
  placement?: 'left' | 'right' | 'top' | 'bottom';
  defaultOpen?: boolean | undefined; // undefined表示未传递defaultOpen参数
  visible?: boolean | undefined; // undefined表示未传递visible参数
  onOpenChange?: (visible: boolean) => void;
}

function Popover(props: PopoverProps): JSX.Element {
  const {
    children,
    content,
    title,
    placement = 'top',
    onOpenChange,
    defaultOpen,
    visible,
  } = props;
  const [isHidden, setIsHidden] = useState(true);
  const popoverComponentRef = useRef<HTMLDivElement>(null);
  const [popOffset, setPopOffset] = useState({
    top: 0,
    left: 0,
    clientHeight: 0,
    clientWidth: 0,
  });

  let componentLeft: number,
    componentTop: number,
    componentWidth: number,
    componentHeight: number;

  const getPos = () => {
    const popoverComponentOffset =
      popoverComponentRef.current?.getBoundingClientRect();
    componentLeft = popoverComponentOffset?.left || 0;
    componentTop = popoverComponentOffset?.top || 0;
    componentHeight = popoverComponentRef.current?.clientHeight || 0;
    componentWidth = popoverComponentRef.current?.clientWidth || 0;
  };
  useEffect(() => {
    if (visible !== undefined) {
      onChangeHidden(!visible);
    }
  }, [visible]);

  useEffect(() => {
    if (visible || defaultOpen) {
      getPos();
      setPopoverVisible();
    }
  }, []);

  useEffect(() => {
    getPos();
  }, [isHidden]);

  // 弹出气泡卡片
  const setPopoverVisible = (): void => {
    onChangeHidden(false);
    setPopOffset({
      top: componentTop,
      left: componentLeft,
      clientHeight: componentHeight,
      clientWidth: componentWidth,
    });
  };

  // 执行onOpenChange事件
  const onPopoverChange = (e: boolean): void => {
    onOpenChange && onOpenChange(!e);
  };

  const popoverMouseOver = (e: React.MouseEvent<HTMLDivElement>): void => {
    // 设置隐藏元素为显示，去掉className: hidden
    // todo 这里获取到jsx元素？用ref获取到的是dom元素，jsx元素和dom元素的操作区别？
    // el && (el.style.top = `${top - height - 10}px`);
    // el && (el.style.left = `${left}px`);
    // if (visible || visible === undefined) {
    //   setPopoverVisible();
    // }
    setPopoverVisible();
  };

  const popoverMouseOut = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (
      visible ||
      ((e.relatedTarget as HTMLElement).parentNode as HTMLElement).className ===
        'mzl_popover'
    )
      return;
    onChangeHidden(true);
  };

  // Hidden变化回调
  const onChangeHidden = (e: boolean): void => {
    setIsHidden(e);
    onPopoverChange(e);
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
          placement={placement}
          isHidden={isHidden}
          visible={visible}
          popOffset={popOffset}
          changeHidden={(e: boolean) => onChangeHidden(e)}
        />
      </Modal>
    </>
  );
}

export default Popover;
