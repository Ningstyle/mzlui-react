import React from 'react';
import { Table } from '../../../packages';

export default function Api() {
  const columns: any = [
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
      width: 450,
    },
    {
      title: '默认值',
      field: 'default',
      width: 80,
    },
  ];
  const dataSource: any = [
    {
      arguments: 'style',
      description: '组件样式',
      type: <span style={{ color: '#c41d7f' }}>CSSProperties</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'cols',
      description: '控制列数',
      type: <span style={{ color: '#c41d7f' }}>number</span>,
      optional: '-',
      default: '30',
    },
    {
      arguments: 'rows',
      description: '控制行数',
      type: <span style={{ color: '#c41d7f' }}>number</span>,
      optional: '-',
      default: '10',
    },
    {
      arguments: 'resize',
      description: '控制调整方式',
      type: <span style={{ color: '#c41d7f' }}>string</span>,
      optional: 'none|horizontal|column|both',
      default: 'both',
    },
    {
      arguments: 'placeholder',
      description: '设置提示文本',
      type: <span style={{ color: '#c41d7f' }}>string</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'autoFocus',
      description: '设置是否自动聚焦',
      type: <span style={{ color: '#c41d7f' }}>boolean</span>,
      optional: '-',
      default: 'false',
    },
    {
      arguments: 'position',
      description: '控制位置',
      type: <span style={{ color: '#c41d7f' }}>string</span>,
      optional: 'left|right|middle',
      default: 'middle',
    },
    {
      arguments: 'onTextAreaInput',
      description: '输入文本时的回调函数',
      type: <span style={{ color: '#c41d7f' }}>function</span>,
      optional: '-',
      default: '-',
    },
  ];

  return (
    <div style={{ width: '80%' }}>
      <p className="packagesSubTitle">API 说明</p>
      <Table columns={columns} dataSource={dataSource} size="middle" border />
    </div>
  );
}
