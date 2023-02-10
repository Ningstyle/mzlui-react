import React from 'react';
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
      arguments: 'height',
      description: '高度',
      type: <span style={{ color: '#c41d7f' }}>string</span>,
      optional: '',
      default: '200px',
    },

    // arrow
    {
      arguments: 'showArrow',
      description: '箭头',
      type: <span style={{ color: '#c41d7f' }}>boolean</span>,
      optional: 'true/false',
      default: 'false',
    },
    {
      arguments: 'leftArrow',
      description: '左侧箭头',
      type: <span style={{ color: '#c41d7f' }}>ReactNode</span>,
      optional: '',
      default: '',
    },
    {
      arguments: 'rightArrow',
      description: '右侧箭头',
      type: <span style={{ color: '#c41d7f' }}>ReactNode</span>,
      optional: '',
      default: '',
    },
    // dots
    {
      arguments: 'showDots',
      description: '是否展示指示点',
      type: <span style={{ color: '#c41d7f' }}>boolean</span>,
      optional: 'true/false',
      default: 'true',
    },
    {
      arguments: 'dotType',
      description: '指示点',
      type: <span style={{ color: '#c41d7f' }}>{`'dot' | 'line'`}</span>,
      optional: 'dot/line',
      default: 'dot',
    },
    {
      arguments: 'direction',
      description: '指示点方向',
      type: (
        <span style={{ color: '#c41d7f' }}>{`'horizontal' | 'vertical'`}</span>
      ),
      optional: 'horizontal/vertical',
      default: 'horizontal',
    },

    // autoplay
    {
      arguments: 'autoplay',
      description: '自动轮播',
      type: <span style={{ color: '#c41d7f' }}>Boolean</span>,
      optional: 'true/false',
      default: 'false',
    },
    {
      arguments: 'duration',
      description: '轮播间隔',
      type: <span style={{ color: '#c41d7f' }}>number</span>,
      optional: '3000',
      default: '3000',
    },

    // {
    //   arguments: 'type',
    //   description: '轮播类型',
    //   type: <span style={{ color: '#c41d7f' }}>{`'flat' | 'card'`}</span>,
    //   optional: 'flat/card',
    //   default: 'flat',
    // },
  ];
  return (
    <div style={{ width: '80%' }}>
      <p className="packagesSubTitle">API 说明</p>
      {/* <p className="packagesSubNodes">API 说明</p> */}
      <Table columns={columns} dataSource={dataSource} size="middle" border />
    </div>
  );
}
