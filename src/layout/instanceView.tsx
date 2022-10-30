import React from 'react';
import SubTitle from '../components/subtitle';

import CodeView from '../components/codeView';
/**
  * @type {(arg: {
  *  "subtitle": string  标题
  *  "subnotes": string  标题下的注释
  *  "demo": ReactNode  实例
  *  "subdesc": string  实例下的描述
  *  "path": string  实例代码的路径
  *  "isSubTitle": boolean  是否显示标题
  *  "isDemo": boolean  是否显示实例
  *  "isCode": boolean  是否显示代码
  *  "showView": boolead  是否显示代码预览下预览按钮
  *  "showCopy": boolean  是否显示代码预览里copy按钮
  * })}
  */
export type InstanceViewProps = {
  subtitle: string,
  subnotes?: string,
  subdesc?: JSX.Element | string,
  demo?: JSX.Element,
  isSubTitle?: boolean,
  isDemo?: boolean,
  isCode?: boolean,
  path: string,
  showView?: boolean,
  showCopy?: boolean,
  showCode?: boolean,
}
function InstanceView(props: InstanceViewProps) {
  const { subtitle, subnotes, subdesc, demo, isSubTitle, isDemo, isCode, path, showView, showCopy, showCode } = props;
  return (
    <div className="instanceView_inner">
      {
        isSubTitle ? <SubTitle
          subtitle={subtitle}
          subnotes={subnotes}
          subdesc={subdesc}
        /> : null
      }

      {
        isDemo ? (<div className="customDemoStyle">{demo}</div>) : null
      }
      {
        isCode ? <CodeView path={path} showView={showView} showCopy={showCopy} showCode={showCode} /> : null
      }
    </div>
  )
}
InstanceView.defaultProps = {
  subnotes: '',
  subdesc: '',
  demo: null,
  isSubTitle: true,
  isDemo: true,
  isCode: true,
  showView: true,
  showCopy: true,
  showCode: false,
}
export default React.memo(InstanceView);