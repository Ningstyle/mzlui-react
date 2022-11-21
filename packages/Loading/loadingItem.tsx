import React, { CSSProperties, useImperativeHandle } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

export type LoadingProps = {
  style?: CSSProperties;
  className?: string;
  text?: string;
  background?: string;
  open: boolean;
  icon?: string;
  target?: string,
  duration?: number;
  cRef: React.RefObject<any>;
};
export default function LoadingEl(props: LoadingProps): JSX.Element {
  const { style, className, text, background, open, icon, duration, target, cRef } = props;
  const [showLoading, setShowLoading] = React.useState(false);
  const loadingClass = classNames({
    'mzl_loading': true,
    [className || '']: !!className,
  });
  useImperativeHandle(cRef, () => ({
    handleOpen: (flag: boolean) => {
      setShowLoading(flag)
    },
  }));
  React.useEffect(() => {
    if (duration as number > 0) {
      setTimeout(() => {
        setShowLoading(false)
        setTimeout(() => {
          const container = target === 'body' ? document.body : document.querySelector(target as string);
          container?.removeChild(document.querySelector('.mzl_loading_container') as Node);
        }, 300)
      }, duration as number)
    }
  }, [open])
  const loadingStyle = {
    ...style,
    background,
  }
  return (
    <CSSTransition
      in={showLoading}
      timeout={300}
      classNames="loading"
      unmountOnExit
    >
      <div className={loadingClass} style={style || loadingStyle}>
        <div className="container_inner">
          {
            icon?.includes('m-icon-') ? <i className={[icon, 'mzl_publicRotateEle'].join(' ')} /> : <img src={icon} alt="加载失败" className="mzl_publicRotateEle" />
          }
          {
            text && text !== '' ? <p>{text}</p> : null
          }
        </div>
      </div>
    </CSSTransition>

  );
}
LoadingEl.defaultProps = {
  style: '',
  className: '',
  text: '',
  background: 'rgba(255,255,255,0.95)',
  icon: 'm-icon-loading1',
  duration: 0,
  target: 'body',
};