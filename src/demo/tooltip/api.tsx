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
  ]
  const dataSource: any = [
    {
      arguments: 'content',
      description: '提示文字描述',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'align',
      description: '弹出位置',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: <span style={{ color: "#1890ff" }}>top | bottom | left | right</span>,
      default: 'top',
    },
    {
      arguments: 'color',
      description: '自定义弹出框背景颜色',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: '-',
      default: '#000000',
    },
    {
      arguments: 'zIndex',
      description: '设置 Tooltip 的 z-index',
      type: <span style={{ color: "#c41d7f" }}>number</span>,
      optional: '-',
      default: 1011,
    },
    {
      arguments: 'onOpenChange',
      description: '显示隐藏的回调',
      type: <span style={{ color: "#c41d7f" }}>{'(open: boolean) => void'}</span>,
      optional: '-',
      default: '-',
    },
  ]
  return (
    <div style={{ width: '80%' }}>
      <p className="packagesSubTitle">API 说明</p>
      {/* <p className="packagesSubNodes">API 说明</p> */}
      <Table columns={columns} dataSource={dataSource} size="middle" border />
    </div>
  );
}
