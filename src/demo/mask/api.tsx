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
      width: 250,
    },
    {
      title: '默认值',
      field: 'default',
      width: 180,
    },
  ]
  const dataSource: any = [
    {
      arguments: 'style',
      description: '自定义Mask样式',
      type: <span style={{ color: "#c41d7f" }}>CSSProperties</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'className',
      description: '自定义Mask类名',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'zIndex',
      description: 'Mask层级',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: '-',
      default: '1000',
    },
    {
      arguments: 'visible',
      description: '是否显示遮罩层',
      type: <span style={{ color: "#c41d7f" }}>boolean</span>,
      optional: <span style={{ color: "#1890ff" }}>true | false</span>,
      default: 'false',
    },
    {
      arguments: 'children',
      description: '遮罩层子集内容',
      type: <span style={{ color: "#c41d7f" }}>ReactNode</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'background',
      description: '遮罩层背景色',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: '-',
      default: 'rgba(0,0,0,0.5)',
    },
    {
      arguments: 'maskClick',
      description: '遮罩层点击事件',
      type: <span style={{ color: "#c41d7f" }}>{'(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void'}</span>,
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
