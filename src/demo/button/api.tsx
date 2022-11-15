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
      arguments: 'style',
      description: '自定义Button样式',
      type: <span style={{ color: "#c41d7f" }}>CSSProperties</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'className',
      description: '自定义Button类名',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'type',
      description: 'Button按钮的类型',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: <span style={{ color: "#1890ff" }}>default | primary | success | warning | error | info | link | text</span>,
      default: 'default',
    },
    {
      arguments: 'size',
      description: 'Button按钮的不同尺寸属性',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: <span style={{ color: "#1890ff" }}>large | medium | small</span>,
      default: 'medium',
    },
    {
      arguments: 'round',
      description: '是否圆角按钮',
      type: <span style={{ color: "#c41d7f" }}>boolean</span>,
      optional: <span style={{ color: "#1890ff" }}>true | false </span>,
      default: 'false',
    },
    {
      arguments: 'icon',
      description: '自定义Button按钮图标，支持icon中的190多种图标',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'loading',
      description: '是否显示加载中状态',
      type: <span style={{ color: "#c41d7f" }}>boolean</span>,
      optional: <span style={{ color: "#1890ff" }}>true | false </span>,
      default: 'false',
    },
    {
      arguments: 'disabled',
      description: '是否禁用Button按钮',
      type: <span style={{ color: "#c41d7f" }}>boolean</span>,
      optional: <span style={{ color: "#1890ff" }}>true | false </span>,
      default: 'false',
    },
    {
      arguments: 'onClick',
      description: '点击按钮时的回调',
      type: <span style={{ color: "#c41d7f" }}>{'(event) => void'}</span>,
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
