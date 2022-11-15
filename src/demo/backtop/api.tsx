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
      arguments: 'target',
      description: '触发滚动的元素对象',
      type: <span style={{ color: "#c41d7f" }}>HTMLElement</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'visibilityHeight',
      description: '滚动达到这个距离出现"回到顶部组件"',
      type: <span style={{ color: "#c41d7f" }}>number</span>,
      optional: '-',
      default: '240',
    },
    {
      arguments: 'style',
      description: '自定义Backtop组件的样式',
      type: <span style={{ color: "#c41d7f" }}>Object</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'className',
      description: '自定义Backtop组件的类名',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
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
