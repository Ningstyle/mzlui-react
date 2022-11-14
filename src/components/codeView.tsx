import React, { useState, useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import { Message, Tooltip } from '../../packages';

export type codeVoewProps = {
  path: string;
  showView?: boolean;
  showCopy?: boolean;
  showCode?: boolean;
};
export default function CodeView(props: codeVoewProps) {
  const { path, showView, showCopy, showCode } = props;
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [code, setCode] = useState('');
  const [openCode, setOpenCode] = useState(showCode || false);
  const filePath = `/src/demo/${path}.tsx?raw`;
  const filePath1 = `/src/demo/${path}.tsx`;
  const isDev = import.meta.env.MODE === "development";
  useEffect(() => {
    async function getcontent() {
      if (isDev) {
        const res = (await import(/* @vite-ignore */ filePath)).default
        setCode(res);
      } else {
        const res1 = await fetch(filePath1).then((res) => res.text())
        setCode(res1)
      }
    }
    getcontent()
  }, [filePath, filePath1]);
  useEffect(() => {
    // 配置 highlight.js
    hljs.configure({
      // 忽略未经转义的 HTML 字符
      ignoreUnescapedHTML: true,
      languages: [
        'javascript',
        'css',
        'python',
        'html',
        'bash',
        'java',
        'sql',
        'json',
        'http',
        'go',
        'c++',
        'c#',
      ],
    });
    // 获取到内容中所有的code标签
    setTimeout(() => {
      const codes = document.querySelectorAll('pre code');
      codes.forEach((el) => {
        // 让code进行高亮
        hljs.highlightElement(el as HTMLElement);
      });
    }, 500);
  }, []);
  const copyCode = () => {
    (inputRef.current as HTMLTextAreaElement).value = code;
    (inputRef.current as HTMLTextAreaElement).select();
    if (document.execCommand("copy")) {
      document.execCommand("copy");
      Message.success('复制成功');
    } else {
      Message.success('复制成功');
    }
  }
  return (
    <>
      {
        showView ? <div className="viewCodeToggle" style={{ borderBottom: openCode ? 'none' : '1px solid #0000000f' }}>
          <div onClick={() => setOpenCode(!openCode)} className="codeDivItem">
            <Tooltip content={openCode ? '隐藏代码' : '查看代码'}>
              <i className="m-icon-code" />
            </Tooltip>
          </div>
          {
            showCopy ? <div className="codeDivItem" onClick={copyCode}>
              <Tooltip content="复制代码">
                <i className="m-icon-copy" />
              </Tooltip>
            </div> : null
          }
          {/* <div className="codeDivItem">
            <i className="m-icon-edit" />
          </div> */}
        </div> : null
      }
      <div className="mzl-react-ui-codeview" style={{ height: openCode ? 'auto' : '0px' }}>
        <pre>
          <code>{code}</code>
        </pre>
      </div>
      <textarea id="inputCopy" ref={inputRef} />
    </>
  );
}
CodeView.defaultProps = {
  showView: true,
  showCopy: true,
  showCode: false,
}
