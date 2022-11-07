import React, { useRef } from 'react';
import iconList from '../../utils/iconList';
import { Message } from '../../../packages';

export default function Demo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const copyIcon = (item: any): void => {
    inputRef.current.value = item.className;
    inputRef.current.select();
    if (document.execCommand("copy")) {
      document.execCommand("copy");
      Message.success('复制成功');
    } else {
      Message.success('复制成功');
    }
  }
  return (
    <div className="iconList_inner_box">
      <p className="packagesSubTitle">所有图标</p>
      {
        iconList.map((item: any, index: number) => (
          <li key={index} onClick={() => copyIcon(item)}>
            <i className={item.className} />
            <span>{item.className.split('m-icon-')[1]}</span>
          </li>
        ))
      }
      <input type="text" id="inputCopy" ref={inputRef} />
    </div>
  );
}
