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
    // {
    //   arguments: 'headStyle',
    //   description: '自定义表头样式',
    //   type: <span style={{ color: "#c41d7f" }}>CSSProperties</span>,
    //   optional: '-',
    //   default: '-',
    // },
  ]
  return (
    <div style={{ width: '80%' }}>
      <p className="packagesSubTitle">columns 配置说明</p>
      {/* <p className="packagesSubNodes">API 说明</p> */}
      <Table columns={columns} dataSource={dataSource} size="middle" border />
    </div>
  );
}
