import React, { CSSProperties } from 'react';
import './style.scss';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom/client';

const el = document.createElement('div')
el.className = 'mzl_loadingBar-container'
if (!document.querySelector('.mzl_loadingBar-container')) {
  document.body.appendChild(el)
}
let timer: any = null;
export type LoadingBarProps = {
  className?: string;
  status: 'start' | 'finish' | 'error' | 'update';
  color?: string;
  height?: number;
  percent?: number;
};
function LoadingBarItem(props: LoadingBarProps): JSX.Element {
  const { className, status, color, height, percent } = props;
  const loadingBarClass = classNames({
    'mzl_loadingBar': true,
    [className || '']: !!className,
  });
  const [showLoadingBar, setShowLoadingBar] = React.useState(false);
  const [loadingBarStyle, setLoadingBarStyle] = React.useState({
    background: color,
    height: `${height}px`,
    width: `0%`,
  })
  const updateStatus = (background: string, heights: number, widths: number, statu: 'start' | 'finish' | 'error' | 'update') => {
    setLoadingBarStyle({
      ...loadingBarStyle,
      background,
      height: `${heights}px`,
      width: `${widths}%`,
    })
    if (statu !== 'start' && statu !== 'update') {
      clearInterval(timer)
      setTimeout(() => {
        setShowLoadingBar(false)
      }, 200)
    }
  }
  React.useEffect(() => {
    updateStatus(color as string, height as number, 0, status);
    if (status === 'start') {
      let n = 0;
      setShowLoadingBar(true)
      clearInterval(timer)
      timer = setInterval(() => {
        updateStatus(color as string, height as number, n += 0.3, status);
        if (n >= 90) {
          clearInterval(timer)
          updateStatus(color as string, height as number, 90, status);
        }
      }, 30)
    } else if (status === 'finish') {
      updateStatus(color as string, height as number, 100, status);
    } else if (status === 'error') {
      setShowLoadingBar(true)
      updateStatus('#f5222d', height as number, 100, status);
    } else if (status === 'update') {
      setShowLoadingBar(true)
      updateStatus(color as string, height as number, percent as number, status);
      if ((percent as number) >= 100) {
        setTimeout(() => {
          setShowLoadingBar(false)
          updateStatus(color as string, height as number, 0, status);
        }, 200)
      }
    }
  }, [percent, status])
  return (
    <CSSTransition
      in={showLoadingBar}
      timeout={300}
      classNames="loadingBar"
      unmountOnExit
    >
      <div className="mzl_loadingBar_inner">
        <span className={loadingBarClass} style={loadingBarStyle} />
      </div>
    </CSSTransition>
  );
}
LoadingBarItem.defaultProps = {
  className: '',
  color: '#1890ff',
  height: 2,
  percent: 0,
};
const Ele = document.createElement('div');
Ele.className = 'mzl_loadingBar_inner_box';
const containerEl = Ele as HTMLElement;
const root = ReactDOM.createRoot(containerEl)
const RenderEle = (status: 'start' | 'finish' | 'error' | 'update', percents?: number, colors?: string, heights?: number) => {
  root.render(
    <LoadingBarItem status={status} color={colors} height={heights} percent={percents} />,
  );
  // 置入到指定节点下
  const container = document.querySelector('.mzl_loadingBar-container');
  if (container) {
    container.appendChild(Ele);
  }
}
interface paramsProps {
  color?: string;
  height?: number;
  percent?: number;
}
const LoadingBar = {
  start: (params?: paramsProps) => {
    RenderEle('start', 0, params?.color, params?.height);
  },
  finish: (params?: paramsProps) => {
    RenderEle('finish', 0, params?.color, params?.height)
  },
  error: (params?: paramsProps) => {
    RenderEle('error', 0, params?.color, params?.height)
  },
  update: (params?: paramsProps) => {
    RenderEle('update', params?.percent, params?.color, params?.height)
  },
}
export default LoadingBar;
