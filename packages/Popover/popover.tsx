import React, { useEffect, useRef, useState } from 'react';
import Modal from './Modal';
import PopoverItem from './popoverItem';
import './style.scss';

export interface PopoverProps {
  children: React.ReactNode;
  content: string | React.ReactNode;
  title: string;
  placement?: 'left' | 'right' | 'top' | 'bottom';
  defaultOpen?: boolean | undefined; // undefined表示未传递defaultOpen参数
  visible?: boolean | undefined; // undefined表示未传递visible参数
  onOpenChange?: (visible: boolean) => void;
  trigger?: 'hover' | 'focus' | 'click';
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
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
    trigger = 'hover',
    getPopupContainer,
  } = props;
  const [isHidden, setIsHidden] = useState(true);
  const popoverComponentRef = useRef<HTMLDivElement>(null);
  const [popOffset, setPopOffset] = useState({
    top: 0,
    left: 0,
    clientHeight: 0,
    clientWidth: 0,
  });

  const containerDom =
    (getPopupContainer &&
      getPopupContainer(popoverComponentRef?.current || document.body)) ||
    document.body;

  let componentLeft: number;
  let componentTop: number;
  let componentWidth: number;
  let componentHeight: number;

  const getPos = () => {
    const popoverComponentOffset =
      popoverComponentRef.current?.getBoundingClientRect();
    componentLeft = popoverComponentOffset?.left || 0;
    componentTop = popoverComponentOffset?.top || 0;
    componentHeight = popoverComponentRef.current?.clientHeight || 0;
    componentWidth = popoverComponentRef.current?.clientWidth || 0;
  };
  // 执行onOpenChange事件
  const onPopoverChange = (e: boolean): void => {
    if (onOpenChange) {
      onOpenChange(!e);
    }
  };
  // Hidden变化回调
  const onChangeHidden = (e: boolean): void => {
    setIsHidden(e);
    onPopoverChange(e);
  };
  // 弹出气泡卡片
  const openPopover = (): void => {
    onChangeHidden(false);
    setPopOffset({
      top: componentTop,
      left: componentLeft,
      clientHeight: componentHeight,
      clientWidth: componentWidth,
    });
  };
  useEffect(() => {
    if (visible !== undefined) {
      onChangeHidden(!visible);
    }
  }, [visible]);

  useEffect(() => {
    if (visible || defaultOpen) {
      getPos();
      openPopover();
    }
  }, []);

  useEffect(() => {
    getPos();
  }, [isHidden]);

  // 关闭气泡卡片
  const closePopover = (): void => {
    onChangeHidden(true);
  };

  const onHoverOpen = (): void => {
    // if (visible || visible === undefined) {
    //   openPopover();
    // }
    openPopover();
  };

  const onHoverClose = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (
      visible ||
      ((e.relatedTarget as HTMLElement).parentNode as HTMLElement).className ===
        'mzl_popover'
    )
      return;
    closePopover();
  };

  const onFocusOpen = (): void => {
    openPopover();
  };
  const onFocusClose = (): void => {
    if (visible) return;
    closePopover();
  };

  const onClick = (): void => {
    if (isHidden) {
      openPopover();
    } else {
      if (visible) return;
      closePopover();
    }
  };

  return (
    <>
      <div
        className="mzl_demo_popover"
        ref={popoverComponentRef}
        onMouseOver={trigger === 'hover' ? onHoverOpen : undefined}
        onMouseOut={trigger === 'hover' ? onHoverClose : undefined}
        onClick={trigger === 'click' ? onClick : undefined}
        onFocus={trigger === 'focus' ? onFocusOpen : undefined}
        onBlur={trigger === 'focus' ? onFocusClose : undefined}
      >
        {children}
      </div>
      <Modal popupContainer={containerDom} showModal={!isHidden}>
        <PopoverItem
          content={content}
          title={title}
          placement={placement}
          isHidden={isHidden}
          visible={visible}
          popOffset={popOffset}
          changeHidden={(e: boolean) => onChangeHidden(e)}
          trigger={trigger}
          containerDom={containerDom}
        />
      </Modal>
    </>
  );
}

Popover.defaultProps = {
  placement: 'left',
  defaultOpen: undefined,
  visible: undefined,
  onOpenChange: () => {},
  trigger: 'hover',
  getPopupContainer: () => {},
};

export default Popover;
