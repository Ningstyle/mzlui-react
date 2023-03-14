import React, { CSSProperties, useState } from 'react';
import './style.scss';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

export type BackTopProps = {
  style?: CSSProperties;
  className?: string;
  target: string;
  visibilityHeight?: number;
  children?: React.ReactNode;
};
export default function Backtop(props: BackTopProps): JSX.Element {
  const { style, className, target, visibilityHeight, children } = props;
  const [showBackTop, setShowBackTop] = useState(false);
  const backTopClass = classNames({
    'mzl_back_top': true,
    [className || '']: !!className,
  });
  const backTopStyle = {
    ...style,
  }
  let interValTimer: any = null
  // 监测target元素的滚动条位置
  const handleScroll = () => {
    const targetDom = document.querySelector(target);
    if (targetDom) {
      const { scrollTop } = targetDom;
      if (scrollTop > (visibilityHeight as number)) {
        setShowBackTop(true);
      } else {
        setShowBackTop(false);
      }
    }
  }
  // 点击回到顶部
  const handleBackTop = () => {
    const targetDom = document.querySelector(target);
    if (targetDom) {
      clearInterval(interValTimer);
      interValTimer = setInterval(() => {
        targetDom.scrollTop -= 30;
        if (targetDom.scrollTop <= 0) {
          clearInterval(interValTimer);
          targetDom.scrollTop = 0;
        }
      })

    }
  }
  // 绑定滚动事件
  const bindScroll = () => {
    const targetDom = document.querySelector(target);
    if (targetDom) {
      targetDom.addEventListener('scroll', handleScroll);
    }
  }
  // 解绑滚动事件
  const unbindScroll = () => {
    const targetDom = document.querySelector(target);
    if (targetDom) {
      targetDom.removeEventListener('scroll', handleScroll);
    }
  }
  // 组件挂载时绑定滚动事件
  React.useEffect(() => {
    bindScroll();
    return () => {
      unbindScroll();
    }
  }, []);

  return (
    <CSSTransition
      in={showBackTop}
      timeout={150}
      classNames="backtop"
      unmountOnExit
    >
      <div className={backTopClass} style={style || backTopStyle} onClick={() => handleBackTop()}>
        {children}
      </div>      
    </CSSTransition>

  );
}
Backtop.defaultProps = {
  style: '',
  className: '',
  visibilityHeight: 240,
  children: <i className="m-icon-top-filling" />,
};
