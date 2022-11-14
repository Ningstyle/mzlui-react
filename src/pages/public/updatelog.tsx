import React from "react";
import Title from '../../components/title';
import { updateLog } from '../../utils/log'

export default function UpdateLog() {
  return (
    <div>
      <Title title="更新日志" desc="记录mzl-ui-react组件库的更新日志及重大版本更新节点。" />
      {
        updateLog.reverse().map((item: any, index: number) => (
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