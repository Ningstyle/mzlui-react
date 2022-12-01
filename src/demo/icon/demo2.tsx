import React, { useRef } from 'react';
import iconList from '../../utils/iconList';
import { Message, Input, Empty } from '../../../packages';

export default function Demo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [list, setList] = React.useState(iconList);
  const copyIcon = (item: any): void => {
    (inputRef.current as HTMLInputElement).value = item.className;
    (inputRef.current as HTMLInputElement).select();
    if (document.execCommand("copy")) {
      document.execCommand("copy");
      Message.success('复制成功');
    } else {
      Message.error('复制失败');
    }
  }
  const onFilter = (e: any): void => {
    // 使用filter过滤输入内容是否包含在iconList中
    const filterList = iconList.filter((item: any) => item.className.includes(e.target.value));
    setList(filterList);
  }
  return (
    <div className="iconList_inner_box">
      <p className="packagesSubTitle">所有图标</p>
      <Input placeholder="请输入关键词进行过滤" prefix="m-icon-search" onChange={onFilter} style={{ marginBottom: '20px' }} />
      {
        list && list.length > 0 ? list.map((item: any, index: number) => (
          <li key={index} onClick={() => copyIcon(item)}>
            <i className={item.className} />
            <span>{item.className.split('m-icon-')[1]}</span>
          </li>
        )) : <Empty image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg" />
      }
      <input type="text" id="inputCopy" ref={inputRef} />
    </div>
  );
}
