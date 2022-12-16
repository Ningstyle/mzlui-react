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
      description: '自定义LoadingBar样式',
      type: <span style={{ color: "#c41d7f" }}>CSSProperties</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'className',
      description: '自定义LoadingBar类名',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'start',
      description: '开始方法（可选参数 object 见下方说明）',
      type: <span style={{ color: "#c41d7f" }}>{'( object ) => void'}</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'finish',
      description: '完成方法（可选参数 object 见下方说明）',
      type: <span style={{ color: "#c41d7f" }}>{'( object ) => void'}</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'error',
      description: '错误方法（可选参数 object 见下方说明）',
      type: <span style={{ color: "#c41d7f" }}>{'( object ) => void'}</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'update',
      description: '更新方法（可选参数 object 见下方说明）',
      type: <span style={{ color: "#c41d7f" }}>{'( object ) => void'}</span>,
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
