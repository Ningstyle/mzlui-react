import React from "react";
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';

export default function Dedicate() {
  return <div className="dedicateInner">
    <Title title="贡献指南" notes="" desc="首先非常感谢您能选择使用 mzl-ui-react。mzl-ui-react 是基于 React+Ts 开发，并集成vite构建。mzl-ui-react 旨在秉承数据驱动视图，力求更小的体积、更快的相应、更强的拓展性、更完美的支持、更友好的渲染。任何一个开源库都离不开大家的共同贡献和维护，如果您愿意参与贡献，请阅读以下内容。" />
    <p className="line1">Github：<a href="https://github.com/Ningstyle/mzlui-react" target="_back">https://github.com/Ningstyle/mzlui-react</a> </p>
    <div className="line2">
      <p className="line2Title">问题反馈</p>
      <li className="line-li">如果您在使用中存在 <code>bug</code> 或者有更超前的思想及解决方案，不限于新的组件、新的模式，您可以在 <code>Issue</code> 提交问题，我们会定时进行维护并回复</li>
    </div>
    <div className="line2">
      <p className="line2Title">分支规范</p>
      <li className="line-li">贡献代码请保持在 <code>dev</code> 分支，禁止操作 <code>main</code> 分支。</li>
      <li className="line-li">提交代码前请先 <code>rebase</code>。</li>
      <li className="line-li"><code>PR</code> 提交流程示例：</li>
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
      <p className="line2Title">文档集成规范</p>
      <li className="line-li"><code>src/pages/packages/</code> 下创建组件文档文件，使用公用组件 <code>Title</code> 和 <code>InstanceView</code> 完成文档可视化集成。</li>
      <li className="line-li"><code>src/demo/</code> 下创建对应组件 <code>demo</code> 文件，用来传递给 <code>InstanceView</code> 组件渲染</li>
      <li className="line-li"><code>src/pages/packages/</code> 下组件文档文件首行必须包含组件注释信息，用来自动生成路由配置。具体参考 <code>/src/pages/packages/button.tsx</code> 文件。</li>
      <li className="line-li"><code>InstanceView</code> 组件所需参数及说明请阅读 <code>/src/layout/instanceView.tsx</code> 文件。</li>
      <li className="line-li">本地代码在推送执行 <code>git push origin dev</code> 后会自动构建并部署到开发环境。 开发环境地址：<a href="https://react.codeym.com/" target="_back">https://react.codeym.com</a></li>
      <li className="line-li"><code>API</code> 参数说明组件正在完善，待完善后提供。</li>
    </div>
    <div className="line2">
      <p className="line2Title">Issue 规范</p>
      <li className="line-li">在提交 <code>issue</code> 之前，请搜索相关内容是否已被提出。</li>
      <li className="line-li">请说明 <code>mzl-ui-react</code> 和 <code>React</code> 或者 <code>TS</code> 的版本号，并提供操作系统和浏览器信息。推荐使用 <code>JSFiddle</code> 生成在线 <code>demo</code>，这能够更直观地重现问题。</li>
    </div>
    <div className="line2">
      <p className="line2Title">Pull Request 规范</p>
      <li className="line-li">请先 <code>fork</code> 一份到自己的项目下，不要直接在仓库下建分支。</li>
      <li className="line-li">commit 信息要以[组件名]: 描述信息 的形式填写，例如 <code>Button: fix xxx bug</code>。</li>
      <li className="line-li">执行 <code>build</code> 后可以正确打包文件。</li>
      <li className="line-li">提交 <code>PR</code> 前请 <code>rebase</code>，确保 <code>commit</code> 记录的整洁且无文件冲突。</li>
      <li className="line-li">确保 <code>PR</code> 是提交到 <code>dev</code> 分支，而不是 <code>main</code> 分支。</li>
      <li className="line-li">如果是修复 <code>bug</code>，请在 <code>PR</code> 中给出描述信息。</li>
      <li className="line-li">打包网页文件包命令为 <code>yarn build:html</code> 或 <code>npm run build:html</code></li>
    </div>
    <div className="line2">
      <p className="line2Title">开发环境</p>
      <li className="line-li">你需要 <code>Node.js 14+</code>，<code>yarn 1.1+</code>，<code>react 18+</code>，<code>typescript 4+</code> 和 <code>npm 6+</code> 及 <code>vite 3+</code></li>
    </div>
    <div className="line2">
      <p className="line2Title">代码规范</p>
      <li className="line-li">避免过多的 html 代码累赘，秉承数据驱动视图思想，简化使用繁琐度，提供更强的拓展性。</li>
    </div>
  </div>;
}
