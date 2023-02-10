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
      description: '自定义Image样式',
      type: <span style={{ color: "#c41d7f" }}>CSSProperties</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'className',
      description: '自定义Image类名',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'src',
      description: '图片地址,同原生属性',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'alt',
      description: '图片描述,同原生属性',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'width',
      description: '图片宽度',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'height',
      description: '图片高度',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'fit',
      description: '图片填充方式',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: <span style={{ color: "#1890ff" }}>fill | contain | cover | none | scale-down</span>,
      default: 'cover',
    },
    {
      arguments: 'preview',
      description: '是否开启图片预览',
      type: <span style={{ color: "#c41d7f" }}>boolean</span>,
      optional: <span style={{ color: "#1890ff" }}>true | false</span>,
      default: 'false',
    },
    {
      arguments: 'previewList',
      description: '多图预览时的图片列表',
      type: <span style={{ color: "#c41d7f" }}>{'Array<string>'}</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'toIndex',
      description: '多图预览时的图片定位索引',
      type: <span style={{ color: "#c41d7f" }}>number</span>,
      optional: '-',
      default: '0',
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
