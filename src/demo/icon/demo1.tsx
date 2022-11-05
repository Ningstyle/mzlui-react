import React from 'react';
import { Space } from '../../../packages';

export default function Demo() {
  const iconStyle = {
    fontSize: '24px',
    marginRight: '10px',
  }
  return (
    <Space>
      <i className="m-icon-collection" style={iconStyle} />
      <i className="m-icon-add-circle" style={iconStyle} />
      <i className="m-icon-edit" style={iconStyle} />
      <i className="m-icon-scanning" style={iconStyle} />
      <i className="m-icon-success" style={iconStyle} />
      <i className="m-icon-good" style={iconStyle} />
      <i className="m-icon-mic" style={iconStyle} />
      <i className="m-icon-smile" style={iconStyle} />
    </Space>
  );
}
