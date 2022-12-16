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
      width: 150,
    },
    {
      title: '默认值',
      field: 'default',
      width: 150,
    },
  ]
  const dataSource: any = [
    {
      arguments: 'style',
      description: '自定义Empty组件全局样式',
      type: <span style={{ color: "#c41d7f" }}>CSSProperties</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'className',
      description: '自定义Empty组件类名',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'description',
      description: 'Empty空状态的描述，为false时不显示描述',
      type: <span style={{ color: "#c41d7f" }}>string | React.ReactNode | boolean</span>,
      optional: '-',
      default: '暂无数据',
    },
    {
      arguments: 'image',
      description: 'Empty空状态的图片，支持传入图片地址或者自定义元素',
      type: <span style={{ color: "#c41d7f" }}>string | React.ReactNode</span>,
      optional: '-',
      default: 'React.ReactNode',
    },
    {
      arguments: 'imageStyle',
      description: '自定义Empty空状态图片的样式',
      type: <span style={{ color: "#c41d7f" }}>CSSProperties</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'children',
      description: '自定义Empty空状态的内容',
      type: <span style={{ color: "#c41d7f" }}>React.ReactNode</span>,
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
