import React, { CSSProperties } from 'react';
import './style.scss';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

export type MaskProps = {
  style?: CSSProperties;
  className?: string;
  zIndex?: number;
  visible: boolean;
  children?: React.ReactNode;
  background?: string;
  maskClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
export default function Mask(props: MaskProps): JSX.Element {
  const { style, className, zIndex, visible, children, background, maskClick } = props;
  const [showMask, setShowMask] = React.useState(false);
  const maskClass = classNames({
    'mzl_mask': true,
    [className || '']: !!className,
  });
  const maskStyle = {
    ...style,
    zIndex,
    background,
  }
  React.useEffect(() => {
    setShowMask(visible);
  }, [visible]);
  return (
    <CSSTransition
      in={showMask}
      timeout={200}
      classNames="maskModal"
      unmountOnExit
    >
      <div className={maskClass} style={style || maskStyle} onClick={(e) => maskClick && maskClick(e)}>
        <div className="childrenBox">{children}</div>
      </div>
    </CSSTransition >

  );
}
Mask.defaultProps = {
  style: '',
  className: '',
  zIndex: 1000,
  children: null,
  background: 'rgba(0,0,0,0.5)',
  maskClick: () => { },
};
