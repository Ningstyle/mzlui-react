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
      arguments: 'title',
      description: '卡片标题',
      type: (
        <span style={{ color: '#c41d7f' }}>
          ReactNode | ( ) =&gt; ReactNode
        </span>
      ),
      optional: '-',
      default: '-',
    },
    {
      arguments: 'content',
      description: '卡片内容',
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
        <span style={{ color: '#1890ff' }}>top | bottom | left | right</span>
      ),
      default: 'top',
    },
    {
      arguments: 'defaultOpen',
      description: '默认是否显隐',
      type: <span style={{ color: '#c41d7f' }}>boolean</span>,
      optional: <span style={{ color: '#1890ff' }}>true | false</span>,
      default: 'false',
    },
    {
      arguments: 'visible',
      description: '用于手动控制浮层显隐',
      type: <span style={{ color: '#c41d7f' }}>boolean</span>,
      optional: <span style={{ color: '#1890ff' }}>true | false</span>,
      default: 'false',
    },
    {
      arguments: 'trigger',
      description: '触发行为',
      type: <span style={{ color: '#c41d7f' }}>string</span>,
      optional: (
        <span style={{ color: '#1890ff' }}>
          &apos;hover&apos; | &apos;focus&apos; | &apos;click&apos;
        </span>
      ),
      default: 'hover',
    },
    {
      arguments: 'getPopupContainer',
      description: '浮层渲染父节点，默认渲染到 body 上',
      type: (
        <span style={{ color: '#c41d7f' }}>
          (triggerNode: HTMLElement) =&gt; HTMLElement
        </span>
      ),
      optional: <span style={{ color: '#1890ff' }}>-</span>,
      default: '() => document.body',
    },
    {
      arguments: 'onOpenChange',
      description: '显示隐藏的回调',
      type: (
        <span style={{ color: '#c41d7f' }}>(visible: boolean) =&gt; void</span>
      ),
      optional: <span style={{ color: '#1890ff' }}>-</span>,
      default: '-',
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
