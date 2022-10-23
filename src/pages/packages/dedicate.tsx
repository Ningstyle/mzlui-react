import React from "react";
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';

export default function Dedicate() {
  return <div className="dedicateInner">
    <Title title="贡献指南" notes="" desc="首先非常感谢您能选择使用 mzl-ui-react。mzl-ui-react 是基于 React+Ts 开发，并集成vite构建。mzl-ui-react 旨在秉承数据驱动视图，力求更小的体积、更快的相应、更强的拓展性、更完美的支持、更友好的渲染。任何一个开源库都离不开大家的共同贡献和维护，如果您愿意参与贡献，请阅读以下内容。" />
    <p className="line1">Github：<a href="https://github.com/Ningstyle/mzlui-react" target="_back">https://github.com/Ningstyle/mzlui-react</a> </p>
    <div className="line2">
      <p className="line2Title">问题反馈</p>
      <li className="line-li">如果您在使用中存在 bug 或者有更超前的思想及解决方案，不限于新的组件、新的模式，您可以在 Issue 提交问题，我们会定时进行维护并回复</li>
    </div>
    <div className="line2">
      <p className="line2Title">分支规范</p>
      <li className="line-li">贡献代码请保持在 dev 分支，禁止操作 main 分支。</li>
      <li className="line-li">提交代码前请先 rebase。</li>
      <li className="line-li">组件文档暂时需要提供 md 文件，包括（使用方式、演示、配置项、事件 API、插槽说明…）。</li>
      <li className="line-li">PR 提交流程示例：</li>
      <div className="dedicateCode">
        <InstanceView
          subtitle=""
          isDemo={false}
          showCopy={false}
          showView={false}
          showCode
          path="dedicateExample"
        />
      </div>
    </div>
    <div className="line2">
      <p className="line2Title">Issue 规范</p>
      <li className="line-li">在提交 issue 之前，请搜索相关内容是否已被提出。</li>
      <li className="line-li">请说明 mzl-ui-react 和 React 或者 TS 的版本号，并提供操作系统和浏览器信息。推荐使用 JSFiddle 生成在线 demo，这能够更直观地重现问题。</li>
    </div>
    <div className="line2">
      <p className="line2Title">Pull Request 规范</p>
      <li className="line-li">请先 fork 一份到自己的项目下，不要直接在仓库下建分支。</li>
      <li className="line-li">commit 信息要以[组件名]: 描述信息 的形式填写，例如 Button: fix xxx bug。</li>
      <li className="line-li">执行 build 后可以正确打包文件。</li>
      <li className="line-li">提交 PR 前请 rebase，确保 commit 记录的整洁。</li>
      <li className="line-li">确保 PR 是提交到 dev 分支，而不是 main 分支。</li>
      <li className="line-li">如果是修复 bug，请在 PR 中给出描述信息。</li>
      <li className="line-li">打包网页文件包命令为 yarn build:html 或 npm run build:html</li>
    </div>
    <div className="line2">
      <p className="line2Title">开发环境</p>
      <li className="line-li">你需要 Node.js 14+，yarn 1.1+，react 18+，typescript 4+ 和 npm 6+及 vite 3+</li>
    </div>
    <div className="line2">
      <p className="line2Title">代码规范</p>
      <li className="line-li">避免过多的 html 代码累赘，秉承数据驱动视图思想，简化使用繁琐度，提供更强的拓展性。</li>
    </div>
  </div>;
}
