import React, { CSSProperties } from 'react';
import './style.scss';
import classNames from 'classnames';

export type DemoProps = {
  style?: CSSProperties;
  className?: string;
};
export default function Demo(props: DemoProps): JSX.Element {
  const { style, className } = props;
  const spaceClass = classNames({
    'mzl_demo': true,
    [className || '']: !!className,
  });
  const spaceStyle = {
    ...style,
  }
  return (
    <div className={spaceClass} style={style || spaceStyle}>demo</div>
  );
}
Demo.defaultProps = {
  style: '',
  className: '',
};
