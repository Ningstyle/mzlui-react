import React, { CSSProperties } from 'react';
import { Table } from '../../../packages';

export default function Api() {
  const columns = [
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
  const dataSource = [
    {
      arguments: 'disabled',
      description: '是否禁用',
      type: <span style={{ color: '#c41d7f' }}>boolean</span>,
      optional: 'true/false',
      default: 'false',
    },
    {
      arguments: 'loading',
      description: '加载状态',
      type: <span style={{ color: '#c41d7f' }}>boolean</span>,
      optional: 'true/false',
      default: 'false',
    },
    {
      arguments: 'checked',
      description: '初始是否选中',
      type: <span style={{ color: '#c41d7f' }}>boolean</span>,
      optional: 'true/false',
      default: 'false',
    },
    {
      arguments: 'checkedChildren',
      description: '选中时的内容	',
      type: <span style={{ color: '#c41d7f' }}>ReactNode</span>,
      optional: '-',
      default: null,
    },
    {
      arguments: 'unCheckedChildren',
      description: '非选中时的内容	',
      type: <span style={{ color: '#c41d7f' }}>ReactNode</span>,
      optional: '-',
      default: null,
    },
    {
      arguments: 'onChange',
      description: '变化时的函数调用',
      type: (
        <span style={{ color: '#c41d7f' }}>
          {
            'function(check:boolean, event: React.MouseEvent<HTMLButtonElement>)'
          }
        </span>
      ),
      optional: '-',
      default: null,
    },
    {
      arguments: 'onClick',
      description: '点击时的函数调用',
      type: (
        <span style={{ color: '#c41d7f' }}>
          {
            'function(check:boolean, event: React.MouseEvent<HTMLButtonElement>)'
          }
        </span>
      ),
      optional: '-',
      default: null,
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
