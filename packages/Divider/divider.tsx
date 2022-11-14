import React, { CSSProperties } from 'react';
import './style.scss';
import classNames from 'classnames';

export interface DividerProps {
  style?: CSSProperties;
  direction?: 'horizontal' | 'vertical';
  position?: 'left' | 'center' | 'right';
  lineStyle?: 'solid' | 'dotted' | 'dashed' | 'groove';
  children?: React.ReactNode;
}

const Divider: React.FC<DividerProps> = (props) => {
  const { style, direction, position, lineStyle, children } = props;

  const dividerClass = classNames({
    mzl_divider: true,
    [`mzl_divider mzl_divider_${lineStyle}`]: true, // 分割线样式
    [`mzl_divider mzl_divider_hasChildren`]:
      direction !== 'vertical' && children, // 水平有内容
    [`mzl_divider mzl_divider_hasChildren mzl_divider_hasChildren_${position}`]:
      direction !== 'vertical' && children, // 水平有内容
    [`mzl_divider mzl_divider_vertical`]: direction === 'vertical' && !children, // 垂直分割线
    [`mzl_divider_${position}`]: true,
    [`mzl_divider_${lineStyle}`]: true,
  });
  return (
    <div className={dividerClass} style={style || undefined}>
      {/* 文本内容 */}
      {children && direction !== 'vertical' && (
        <span className="mzl_divider_children">{children}</span>
      )}
    </div>
  );
};

Divider.defaultProps = {
  direction: 'horizontal',
  position: 'left',
  lineStyle: 'solid',
  children: null,
  style: undefined,
};

export default Divider;
