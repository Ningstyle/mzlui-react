import React, { CSSProperties } from 'react';
import './style.scss';
import classNames from 'classnames';

export type ButtonProps = {
  style?: CSSProperties;
  className?: string;
  title: string;
};
function Button(props: ButtonProps): JSX.Element {
  const { style, className, title } = props;
  const prefixClsChild = 'button-inner';
  const cls1 = classNames({
    [prefixClsChild]: true,
    [className || '']: !!className,
  });
  return (
    <div className={cls1} style={style || undefined}>
      <p>{title}</p>
    </div>
  );
}
Button.defaultProps = {
  style: '',
  className: '',
};
export default Button;
