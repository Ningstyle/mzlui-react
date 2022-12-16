import React, { useState, useEffect } from 'react';
import './style.scss';
import classNames from 'classnames';

export interface TagProps {
  color?: string;
  closeable?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const Tag = (props: TagProps) => {
  const { color, closeable, icon: iconNode, children } = props;
  const [visible, setVisible] = useState<boolean>(true);
  const presetColor = ['blue', 'red', 'gray', 'green'];
  let isPresetColor = false;
  let customColor = '';
  if (color) {
    isPresetColor = presetColor.indexOf(color) !== -1;
    if (!isPresetColor) {
      customColor = color;
    }
  }
  useEffect(() => {});
  const tagClass = classNames('mzl_tag', {
    [`mzl_tag_${color}`]: isPresetColor,
    [`mzl_tag_custom_color`]: !isPresetColor && customColor,
    [`mzl_tag_hidden`]: !visible,
  });
  const childNode = iconNode ? (
    <>
      {iconNode}
      <span>{children}</span>
    </>
  ) : (
    children
  );
  const handleClose = () => {
    setVisible(false);
  };
  const renderCloseIcon = () => {
    if (closeable) {
      return <i className="m-icon-close mzl_tag_close" onClick={handleClose} />;
    }
    return null;
  };
  return (
    <span className={tagClass} style={{ backgroundColor: customColor }}>
      {childNode}
      {renderCloseIcon()}
    </span>
  );
};
Tag.defaultProps = {
  color: '',
  closeable: false,
  icon: null,
  children: null,
};

export default Tag;
