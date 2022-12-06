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
  ];
  const dataSource: any = [
    {
      arguments: 'color',
      description: '标签颜色',
      type: <span style={{ color: '#c41d7f' }}>string</span>,
      optional: '预设颜色(blue | red | gray | green) | 任意其他颜色',
      default: '-',
    },
    {
      arguments: 'closeable',
      description: '标签是否可以关闭',
      type: <span style={{ color: '#c41d7f' }}>boolean</span>,
      optional: 'true | false',
      default: 'false',
    },
    {
      arguments: 'icon',
      description: '设置图标',
      type: <span style={{ color: '#c41d7f' }}>ReactNode</span>,
      optional: '-',
      default: '-',
    },
  ];

  return (
    <div style={{ width: '80%' }}>
      <p className="packagesSubTitle">API 说明</p>
      <Table columns={columns} dataSource={dataSource} size="middle" border />
    </div>
  );
}
