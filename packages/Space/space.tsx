import React, { CSSProperties } from 'react';
import './style.scss';
import classNames from 'classnames';

export type SpaceProps = {
  style?: CSSProperties;
  className?: string;
  children: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  gap?: string
};
function Space(props: SpaceProps): JSX.Element {
  const { style, className, children, direction, gap } = props;
  const spaceClass = classNames({
    'mzl_space': true,
    [className || '']: !!className,
  });
  const spaceStyle = {
    ...style,
    'flexFlow': direction === 'vertical' ? 'column wrap' : 'wrap',
    'gap': gap || '10px 10px',
  }
  return (
    <div className={spaceClass} style={style || spaceStyle}>{children}</div>
  );
}
Space.defaultProps = {
  style: '',
  className: '',
  direction: 'horizontal',
  gap: '10px 10px',
};
export default Space;
