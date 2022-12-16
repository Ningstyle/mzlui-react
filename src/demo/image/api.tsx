import React from 'react';
import { Table } from '../../../packages';

export default function Api() {
  const columns = [
    {
      title: "参数",
      field: "arguments",
    },
    {
      title: "说明",
      field: "description",
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

  const dataSource = [
    {
      arguments: 'src',
      description: '图片源地址，同原生属性一致',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: <span style={{ color: "#1890ff" }}>-- </span>,
      default: '--',
    },
    {
      arguments: 'fit',
      description: '确定图片如何适应容器框，同原生',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: "'fill' | 'contain' | 'cover' | 'none' | 'scale-down'",
      default: 'contain',
    },
    {
      arguments: 'alt',
      description: '原生属性 alt',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: "-",
      default: '-',
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <p className="packagesSubTitle">API</p>
      <Table columns={columns} dataSource={dataSource} border />
    </div>
  );
}