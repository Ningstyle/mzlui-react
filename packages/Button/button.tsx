import React, { CSSProperties } from 'react';
import './style.scss';
import classNames from 'classnames';

export type ButtonProps = {
  style?: CSSProperties;
  className?: string;
  children?: React.ReactNode;
};
function Button(props: ButtonProps): JSX.Element {
  const { style, className, children } = props;
  const prefixClsChild = 'button-inner';
  const cls1 = classNames({
    [prefixClsChild]: true,
    [className || '']: !!className,
  });
  return (
    <button className={cls1} style={style || undefined}>
      <span>{children}</span>
    </button>
  );
}
Button.defaultProps = {
  style: '',
  className: '',
  children: null,
};
export default Button;
