import React, { CSSProperties } from 'react';
import './style.scss';
import ReactDOM from 'react-dom/client';
import LoadingEl from './loadingItem';

interface loadinParams {
  target?: string;
  text?: string;
  background?: string;
  icon?: string;
  duration?: number;
  style?: CSSProperties;
}
const Ele = document.createElement('div');
Ele.className = 'mzl_loading_container';
const containerEl = Ele as HTMLElement;
const root = ReactDOM.createRoot(containerEl)
const Loading = {
  EL: 'body',
  childrenRef: React.createRef(),
  show: (p?: loadinParams): void => {
    if (p && p.target) {
      Loading.EL = p.target
    }
    // 渲染DOM
    root.render(
      <LoadingEl open text={p?.text} background={p?.background} icon={p?.icon} target={Loading.EL} duration={p?.duration} cRef={Loading.childrenRef} style={p?.style} />,
    );
    // 置入到指定节点下
    const container = Loading.EL === 'body' ? document.body : document.querySelector(Loading.EL);
    if (container) {
      container.appendChild(Ele);
    }
    setTimeout(() => {
      (Loading.childrenRef.current as any).handleOpen(true)
    }, 50)
  },
  close: (): void => {
    console.log(Loading.EL);
    (Loading.childrenRef.current as any).handleOpen(false)
    setTimeout(() => {
      const container = Loading.EL === 'body' ? document.body : document.querySelector(Loading.EL);
      container?.removeChild(document.querySelector('.mzl_loading_container') as Node);
    }, 300)
  },
}
export default Loading
