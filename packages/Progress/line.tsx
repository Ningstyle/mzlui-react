import React from 'react';
import type { ProgressProps } from './progress';

interface LineProps extends ProgressProps {
  /**
   * 线条高度
   * @default 6
   */
  height?: number;
}

function Line(props: LineProps): JSX.Element {
  const {
    className,
    style,
    percent,
    height,
    strokeColor,
    trailColor,
    children,
  } = props;

  return (
    <>
      <div
        className={className}
        style={{
          height,
          backgroundColor: trailColor,
          overflow: 'hidden',
          flex: 1,
          ...style,
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${percent}%`,
            background: strokeColor,
            transition: `width 280ms ease-in-out`,
          }}
        />
      </div>
      {children}
    </>
  );
}

Line.defaultProps = {
  height: 6,
};

export default Line;
