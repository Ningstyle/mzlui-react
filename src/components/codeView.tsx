import React, { useState, useEffect } from 'react';
import hljs from 'highlight.js';

export type codeVoewProps = {
  path: string;
};
export default function CodeView(props: codeVoewProps) {
  const { path } = props;
  const [code, setCode] = useState('');
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
  return (
    <div className="mzl-react-ui-codeview">
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}
