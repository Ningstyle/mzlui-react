import React from 'react';
import { Table } from '../../../packages';

export default function CircleApi() {
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
  ];
  const dataSource: any = [
    {
      arguments: 'strokeWidth',
      description: '进度条圆弧宽度',
      type: <span style={{ color: '#c41d7f' }}>number</span>,
      optional: <span style={{ color: '#1890ff' }}> - </span>,
      default: '10',
    },
    {
      arguments: 'strokeLinecap',
      description: '圆弧末尾使用的形状',
      type: <span style={{ color: '#c41d7f' }}>string</span>,
      optional: <span style={{ color: '#1890ff' }}> butt | round </span>,
      default: 'butt',
    },
  ];
  return (
    <div style={{ width: '80%' }}>
      <p className="packagesSubTitle">圆形进度特有 API 说明</p>
      <Table columns={columns} dataSource={dataSource} size="middle" border />
    </div>
  );
}
