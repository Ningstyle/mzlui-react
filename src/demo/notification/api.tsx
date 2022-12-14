import React from 'react';
import { Table } from '../../../packages';

function Api() {
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
    },
    {
      title: '默认值',
      field: 'default',
      width: 80,
    },
  ];
  const dataSource: any = [
    {
      arguments: 'message',
      description: '提醒框标题',
      type: (
        <span style={{ color: '#c41d7f' }}>
          ReactNode | ( ) =&gt; ReactNode
        </span>
      ),
      optional: '-',
      default: '-',
    },
    {
      arguments: 'description',
      description: '提醒框内容',
      type: (
        <span style={{ color: '#c41d7f' }}>
          ReactNode | ( ) =&gt; ReactNode
        </span>
      ),
      optional: '-',
      default: '-',
    },
    {
      arguments: 'placement',
      description: '弹出位置',
      type: <span style={{ color: '#c41d7f' }}>string</span>,
      optional: (
        <span style={{ color: '#1890ff' }}>
          topLeft | topRight | bottomLeft | bottomRight
        </span>
      ),
      default: 'topLeft',
    },
  ];
  return (
    <div style={{ width: '80%' }}>
      <p className="packagesSubTitle">API 说明</p>
      {/* <p className="packagesSubNodes">API 说明</p> */}
      <Table columns={columns} dataSource={dataSource} size="middle" border />
    </div>
  );
}

export default Api;
