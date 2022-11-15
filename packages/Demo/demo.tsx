import React, { CSSProperties } from 'react';
import './style.scss';
import classNames from 'classnames';

export type DemoProps = {
  style?: CSSProperties;
  className?: string;
};
export default function Demo(props: DemoProps): JSX.Element {
  const { style, className } = props;
  const demoClass = classNames({
    'mzl_demo': true,
    [className || '']: !!className,
  });
  const demoStyle = {
    ...style,
  }
  return (
    <div className={demoClass} style={style || demoStyle}>demo</div>
  );
}
Demo.defaultProps = {
  style: '',
  className: '',
};
