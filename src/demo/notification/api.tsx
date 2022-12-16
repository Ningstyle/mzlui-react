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
      description: '提醒框标题 (必填)',
      type: <span style={{ color: '#c41d7f' }}>string | ReactNode</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'description',
      description: '提醒框内容 (必填)',
      type: <span style={{ color: '#c41d7f' }}>string | ReactNode</span>,
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
    {
      arguments: 'duration',
      description: '默认 4.5 秒后自动关闭，配置为 0 或 null 则不自动关闭',
      type: <span style={{ color: '#c41d7f' }}>number | null</span>,
      optional: '-',
      default: '4.5',
    },
    {
      arguments: 'className',
      description: '自定义 CSS class',
      type: <span style={{ color: '#c41d7f' }}>string</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'style',
      description: '自定义内联样式',
      type: <span style={{ color: '#c41d7f' }}>{'{  }'}</span>,
      optional: <span style={{ color: '#1890ff' }}>CSSProperties</span>,
      default: '-',
    },
    {
      arguments: 'bottom',
      description: '消息从底部弹出时，距离底部的位置，单位像素',
      type: <span style={{ color: '#c41d7f' }}>number</span>,
      optional: '-',
      default: '24',
    },
    {
      arguments: 'top',
      description: '消息从顶部弹出时，距离顶部的位置，单位像素',
      type: <span style={{ color: '#c41d7f' }}>number</span>,
      optional: '-',
      default: '24',
    },
    {
      arguments: 'closeIcon',
      description: '自定义关闭图标',
      type: <span style={{ color: '#c41d7f' }}>ReactNode</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'icon',
      description: '自定义图标',
      type: <span style={{ color: '#c41d7f' }}>ReactNode</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'btn',
      description: '自定义关闭按钮',
      type: <span style={{ color: '#c41d7f' }}>ReactNode</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'onClick',
      description: '点击通知时触发的回调函数',
      type: <span style={{ color: '#c41d7f' }}>() =&gt; void</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'onClose',
      description: '点击通知时触发的回调函数',
      type: <span style={{ color: '#c41d7f' }}>() =&gt; void</span>,
      optional: '-',
      default: '-',
    },
  ];
  const typeList = ['success', 'error', 'info', 'warning', 'open'];
  return (
    <div style={{ width: '80%' }}>
      <p className="packagesSubTitle">API 说明</p>
      <ul>
        {typeList.map((item) => (
          <li
            style={{
              listStyle: 'circle',
              margin: '12px 0',
            }}
          >
            <code
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                border: '1px solid rgba(5, 5, 5, 0.06)',
                borderRadius: '3px',
                padding: '0.2em 0.4em',
                fontSize: '10px',
              }}
            >
              notification.{item}(config)
            </code>
          </li>
        ))}
      </ul>
      <p>config 参数如下：</p>
      <Table columns={columns} dataSource={dataSource} size="middle" border />
    </div>
  );
}

export default Api;
