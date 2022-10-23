import React, { useState, useEffect, useRef } from 'react';
import hljs from 'highlight.js';

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
  const filePath = `../demo/${path}.tsx?raw`;
  useEffect(() => {
    const s = import(/* @vite-ignore */ filePath);
    s.then((res) => {
      setCode(res.default);
    });
  }, [filePath]);
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
    inputRef.current.value = code;
    inputRef.current.select();
    if (document.execCommand("copy")) {
      document.execCommand("copy");
      alert('代码复制成功')
    } else {
      alert('代码复制成功')
    }
  }
  return (
    <>
      <div className="mzl-react-ui-codeview" style={{ height: openCode ? 'auto' : '0px' }}>
        <pre>
          <code>{code}</code>
        </pre>
        {
          showCopy ? <div className="copyCode" onClick={copyCode}>
            <i className="m-icon-copy" />
          </div> : null
        }

      </div>
      {
        showView ? <div className="viewCodeToggle" onClick={() => setOpenCode(!openCode)} style={{ borderTop: openCode ? 'none' : '1px solid #0000000f' }}>
          <span>{openCode ? '隐藏代码' : '显示代码'}</span><i className="m-icon-code" />
        </div> : null
      }

      <textarea id="inputCopy" ref={inputRef} />
    </>
  );
}
CodeView.defaultProps = {
  showView: true,
  showCopy: true,
  showCode: false,
}
