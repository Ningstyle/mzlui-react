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
      arguments: 'type',
      description: '指定警告提示的样式',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: <span style={{ color: "#1890ff" }}> success | warning | error | info</span>,
      default: 'warning',
    },
    {
      arguments: 'message',
      description: '警告提示内容',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: "-",
      default: '-',
    },
    {
      arguments: 'description',
      description: '警告提示的辅助性文字介绍',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: "-",
      default: '-',
    },
    {
      arguments: 'showIcon',
      description: '是否显示图标',
      type: <span style={{ color: "#c41d7f" }}>boolean</span>,
      optional: <span style={{ color: "#1890ff" }}>true | false </span>,
      default: 'false',
    },
    {
      arguments: 'icon',
      description: '自定义图标，showIcon 为 true 时有效',
      type: <span style={{ color: "#c41d7f" }}>ReactNode</span>,
      optional: "-",
      default: '',
    },
    {
      arguments: 'closeable',
      description: '自定义图标，showIcon 为 true 时有效',
      type: <span style={{ color: "#c41d7f" }}>boolean</span>,
      optional: <span style={{ color: "#1890ff" }}>true | false </span>,
      default: 'false',
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <p className="packagesSubTitle">API</p>
      <Table columns={columns} dataSource={dataSource} border />
    </div>
  );
}