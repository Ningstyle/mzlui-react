/*
  @name:"Timeline 时间轴"
  @group:"数据"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/timeline/demo1';
import Demo2 from '../../demo/timeline/demo2';
import Demo3 from '../../demo/timeline/demo3';
import Demo4 from '../../demo/timeline/demo4';
import Demo5 from '../../demo/timeline/demo5';
import Demo6 from '../../demo/timeline/demo6';
import Api from '../../demo/timeline/api';

export default function DemoPage() {
  return (
    <div>
      <Title title="Timeline" notes="时间轴" desc="垂直展示的时间流信息" />
      <InstanceView
        subtitle="基本使用"
        subnotes=""
        demo={<Demo1 />}
        subdesc="Timeline 组件基本使用示例。"
        path="timeline/demo1"
      />
      <InstanceView
        subtitle="轴点颜色"
        subnotes=""
        demo={<Demo2 />}
        subdesc="轴点颜色，默认可选：绿色/红色/蓝色/灰色，绿色用于已完成、成功状态，红色表示告警或错误状态，蓝色可表示正在进行或其他默认状态，灰色表示未完成或失效状态。"
        path="timeline/demo2"
      />

      <InstanceView
        subtitle="自定义时间轴点"
        subnotes=""
        demo={<Demo3 />}
        subdesc="可以设置为图标或其他自定义元素。"
        path="timeline/demo3"
      />
      <InstanceView
        subtitle="右侧时间轴点"
        subnotes=""
        demo={<Demo4 />}
        subdesc="时间轴点可以在内容的右边。"
        path="timeline/demo4"
      />
      <InstanceView
        subtitle="时间轴居中"
        subnotes=""
        demo={<Demo5 />}
        subdesc="时间轴点居中，内容交替展示"
        path="timeline/demo5"
      />
      <InstanceView
        subtitle="时间单独展示"
        subnotes=""
        demo={<Demo6 />}
        subdesc="时间点和内容分开展示"
        path="timeline/demo6"
      />

      <Api />
    </div>
  );
}
