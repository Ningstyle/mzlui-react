import React, { CSSProperties, useRef } from 'react';
import './style.scss';
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
  color?: string;
  onOpenChange?: (flag: boolean) => void;
  zIndex?: number;
};


export default function Tooltip(props: TooltipProps): JSX.Element {
  const { style, className, children, content, align, color, onOpenChange, zIndex } = props;
  const tooltipRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<any>(null);
  const toolTipStyle = {
    ...style,
  }
  const Ele = document.createElement('div');
  Ele.className = 'mzl_position';
  const containerEl = Ele as HTMLElement;
  const root = ReactDOM.createRoot(containerEl)
  const tooltipMouseOver = (): void => {
    const viewportOffset = tooltipRef.current?.getBoundingClientRect();
    const left = viewportOffset?.left || 0;
    const top = viewportOffset?.top || 0;
    const width = tooltipRef.current?.clientWidth;
    const height = tooltipRef.current?.clientHeight;
    root.render(
      <TooltipEl left={(left as number)} top={(top as number)} width={(width as number)} height={(height as number)} content={content} align={align} cRef={childrenRef} color={color} zIndex={zIndex} />,
    );
    // 置入到指定节点下
    const container = document.querySelector('.mzl_position-container');
    if (container) {
      container.appendChild(Ele);
    }
    let timer: any = null
    clearTimeout(timer)
    timer = setTimeout(() => {
      (childrenRef.current as any).handleOpen(true)
      onOpenChange && onOpenChange(true)
    }, 150)
  }
  const tooltipMouseOut = (): void => {
    (childrenRef.current as any).handleOpen(false)
    let timer: any = null
    if (Ele) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        const container = document.querySelector('.mzl_position-container');
        container?.removeChild(document.querySelector('.mzl_position') as Node);
        onOpenChange && onOpenChange(false)
      }, 150)
    }

  }
  return (
    <div
      className="mzl_tooltip"
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
  color: '#000',
  onOpenChange: () => { },
  zIndex: 1011,
};
