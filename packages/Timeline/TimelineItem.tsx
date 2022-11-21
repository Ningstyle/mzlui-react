import React from 'react';
import classNames from 'classnames';

export type TimelineItemProps = {
  color?: string;
  dot?: React.ReactNode;
  className?: string;
  label?: string;
  position?: string;
  children?: React.ReactNode;
};
const TimelineItem: React.FC<TimelineItemProps> = (props) => {
  const { color, dot, className, label, children, ...restProps } = props;

  const customColor = /blue|red|gray|green/.test(color || '')
    ? undefined
    : color;
  const itemClassName = classNames('mzl_timeline_item', className);
  const dotClass = classNames('mzl_timeline_item_dot', {
    [`mzl_timeline_item_dot_${color}`]: !customColor,
    mzl_timeline_item_dot_custom: !!dot,
  });

  return (
    <li {...restProps} className={itemClassName}>
      {label && <div className="mzl_timeline_item_label">{label}</div>}
      <div
        className={dotClass}
        style={{ color: customColor, borderColor: customColor }}
      >
        {dot}
      </div>
      <div className="mzl_timeline_item_content">{children}</div>
      <div className="mzl_timeline_item_vertical_line" />
    </li>
  );
};
TimelineItem.defaultProps = {
  color: 'blue',
  className: '',
  label: '',
  position: '',
  dot: null,
  children: null,
};

export default TimelineItem;
