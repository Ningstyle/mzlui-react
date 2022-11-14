import React, { CSSProperties } from 'react';
import { Table } from '../../../packages';

export default function Api() {
  const columns = [
    {
      title: '参数',
      field: 'arguments',
    },
    {
      title: '说明',
      field: 'description',
    },
    {
      title: '类型',
      field: 'type',
    },
    {
      title: '可选值',
      field: 'optional',
    },
    {
      title: '默认值',
      field: 'default',
      width: 80,
    },
  ];
  const dataSource = [
    {
      arguments: 'direction',
      description: '设置分割线方向',
      type: 'string',
      optional: 'horizontal | vertical',
      default: 'horizontal',
    },
    {
      arguments: 'position',
      description: '设置分割线文案的位置',
      type: 'string',
      optional: 'left | right | center',
      default: 'left',
    },
    {
      arguments: 'lineStyle',
      description: '设置分隔符样式',
      type: 'string',
      optional: 'solid | dashed | dotted | groove',
      default: 'solid',
    },
    {
      arguments: 'style',
      description: '自定义样式',
      type: <span style={{ color: '#c41d7f' }}>CSSProperties</span>,
      optional: '-',
      default: 'undefined',
    },
  ];
  return (
    <div style={{ width: '80%' }}>
      <p className="packagesSubTitle">API 说明</p>
      {/* <p className="packagesSubNodes">API 说明</p> */}
      <Table columns={columns} dataSource={dataSource} size="middle" border />
    </div>
  );
}
