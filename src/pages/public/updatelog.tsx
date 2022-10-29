import React, { useState } from "react";
import Title from '../../components/title';

export default function UpdateLog() {
  const [updateLogList] = useState<any>([
    {
      version: '0.0.2',
      time: '2022-10-20',
      log: [
        {
          title: '优化',
          content: ['完善可视化组件文档组件编写。', '可视化文档目录结构调整。'],
        },
        {
          title: '新增',
          content: ['可视化组件文档公用组件编写。', 'eslint配置调优。'],
        },
      ],
    },
    {
      version: '0.0.3',
      time: '2022-10-23',
      log: [
        {
          title: '优化',
          content: ['优化ts代码配置规则。', '优化组件目录结构。', '优化公用样式配置方案。'],
        },
      ],
    },
    {
      version: '0.0.4',
      time: '2022-10-24',
      log: [
        {
          title: '新增',
          content: ['可视化组件文档基本页面配置。', '全局颜色配置', '新增页面打包方式。'],
        },
      ],
    },
    {
      version: '0.0.5',
      time: '2022-10-25',
      log: [
        {
          title: '新增',
          content: ['根据文件动态路由生成方法编写。', '动态导入组件全局方法抽离。'],
        },
        {
          title: '优化',
          content: ['优化动态导入组件样式缺失问题。', '优化vite全局样式失效问题。', '优化动态路由生成方法。'],
        },
      ],
    },
    {
      version: '0.0.6',
      time: '2022-10-28',
      log: [
        {
          title: '优化',
          content: ['优化可视化文档部署问题。'],
        },
      ],
    },
    {
      version: '0.0.7',
      time: '2022-10-29',
      log: [
        {
          title: '新增',
          content: ['新增执行push到dev分支自动构建并部署到dev环境。'],
        },
      ],
    },
  ])
  return (
    <div>
      <Title title="更新日志" desc="记录mzl-ui=react组件库的更新日志及重大版本更新节点。" />
      {
        updateLogList.reverse().map((item: any, index: number) => (
          <div className="updatelogInner" key={index}>
            <p className="verisonInfo">版本： <span className="version">v{item.version}</span> <span className="time">{item.time}</span></p>
            {
              item.log.map((v: any, i: number) => (
                <div className="updateContent" key={i}>
                  <p>{v.title}：</p>
                  <div className="linedeiv">
                    {
                      v.content.map((c: any, j: number) => (
                        <li key={j}>{j + 1}、{c}</li>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
        ))
      }

      <div className="updatelogInner">
        <p className="verisonInfo">版本： <span className="version">v0.0.1</span> <span className="time">2022-10-15</span></p>
        <div className="updateContent">
          初始化组件库项目框架，技术选型，加油!
        </div>
      </div>
    </div>
  )
}