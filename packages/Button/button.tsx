import React, { CSSProperties } from 'react';
import './style.scss';
import classNames from 'classnames';

export type ButtonProps = {
  style?: CSSProperties;
  className?: string;
  children?: React.ReactNode;
  type?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info' | 'link' | 'text';
};
function Button(props: ButtonProps): JSX.Element {
  const { style, className, children, type } = props;
  const btnClass = classNames({
    'mzl_btn': true,
    [`mzl_btn_${type}`]: true,
    [className || '']: !!className,
  });
  return (
    <button className={btnClass} style={style || undefined}>
      <span>{children}</span>
    </button>
  );
}
Button.defaultProps = {
  style: '',
  className: '',
  children: null,
  type: 'default',
};
export default Button;
