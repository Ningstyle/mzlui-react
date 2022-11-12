import React, { CSSProperties, useRef } from 'react';
import './style.scss';
import classNames from 'classnames';
import ReactDOM from 'react-dom/client';
import TooltipEl from './tooltipItem';

const el = document.createElement('div')
el.className = 'mzl_position-container'
if (!document.querySelector('.mzl_position-container')) {
  document.body.appendChild(el)
}
export type TooltipProps = {
  style?: CSSProperties;
  className?: string;
  children: React.ReactNode;
  content: string | React.ReactNode;
  align?: 'top' | 'bottom' | 'left' | 'right';
};


export default function Tooltip(props: TooltipProps): JSX.Element {
  const { style, className, children, content, align } = props;
  const tooltipRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<any>(null);
  const toolTipClass = classNames({
    'mzl_tooltip': true,
    [className || '']: !!className,
  });
  const toolTipStyle = {
    ...style,
  }
  const Ele = document.createElement('div');
  Ele.className = 'mzl_position';
  let containerEl: any = null;
  const tooltipMouseOver = (): void => {
    const left = tooltipRef.current?.offsetLeft || 0;
    const top = tooltipRef.current?.offsetTop || 0;
    const width = tooltipRef.current?.clientWidth;
    const height = tooltipRef.current?.clientHeight;
    if (!containerEl) {
      containerEl = Ele as HTMLElement;
      const root = ReactDOM.createRoot(containerEl)
      root.render(
        <TooltipEl left={(left as number)} top={(top as number)} width={(width as number)} height={(height as number)} content={content} cRef={childrenRef} />,
      );
    }
    // 置入到指定节点下
    const container = document.querySelector('.mzl_position-container');
    if (container) {
      container.appendChild(Ele);
    }

    setTimeout(() => {
      (childrenRef.current as any).handleOpen(true)
    }, 80)
  }
  const tooltipMouseOut = (): void => {
    // (childrenRef.current as any).handleOpen(false)
    // setTimeout(() => {
    //   const container = document.querySelector('.mzl_position-container');
    //   container?.removeChild(document.querySelector('.mzl_position') as Node);
    // }, 160)
  }
  return (
    <div
      className={toolTipClass}
      style={style || toolTipStyle}
      ref={tooltipRef}
      onMouseOver={tooltipMouseOver}
      onMouseOut={tooltipMouseOut}
    >
      {children}
    </div>
  );
}
Tooltip.defaultProps = {
  style: '',
  className: '',
  align: 'top',
};
