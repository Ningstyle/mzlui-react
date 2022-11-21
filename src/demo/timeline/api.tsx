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
      arguments: 'mode',
      description: '时间轴和内容的相对位置',
      type: <span style={{ color: '#c41d7f' }}>string</span>,
      optional: 'left | middle | right',
      default: 'left',
    },
    {
      arguments: 'style',
      description: '自定义Timeline组件的样式',
      type: <span style={{ color: '#c41d7f' }}>CSSProperties</span>,
      optional: 'left | middle | right',
      default: 'left',
    },
    {
      arguments: 'reverse',
      description: '倒序排列时间轴',
      type: <span style={{ color: '#c41d7f' }}>CSSProperties</span>,
      optional: 'true | false',
      default: 'false',
    },
  ];
  const dataSourceItem: any = [
    {
      arguments: 'color',
      description: '轴点颜色',
      type: <span style={{ color: '#c41d7f' }}>string</span>,
      optional: 'blue | green | red | gray | 自定义',
      default: 'blue',
    },
    {
      arguments: 'dot',
      description: '自定义时间轴点',
      type: <span style={{ color: '#c41d7f' }}>ReactNode</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'label',
      description: '单独展示label',
      type: <span style={{ color: '#c41d7f' }}>ReactNode</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'position',
      description: '自定义内容展示位置, 仅在mode=middle模式下生效',
      type: <span style={{ color: '#c41d7f' }}>string</span>,
      optional: 'left | right',
      default: '-',
    },
  ];
  return (
    <div style={{ width: '80%' }}>
      <p className="packagesSubTitle">API 说明</p>
      <p className="packagesSubTitle">Timeline</p>
      <p>时间轴</p>
      <Table columns={columns} dataSource={dataSource} size="middle" border />
      <p className="packagesSubTitle">Timeline.Item</p>
      <p>时间轴的每一个节点</p>
      <Table
        columns={columns}
        dataSource={dataSourceItem}
        size="middle"
        border
      />
    </div>
  );
}
