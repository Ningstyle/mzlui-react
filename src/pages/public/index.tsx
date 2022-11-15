import React, { useEffect, useState, useRef } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import RouterPages from '../../router/pages/page';
import Menu from '../../components/menu';
import '../../styles/custom.scss'
import { Backtop } from '../../../packages';

// 二级路由
export default function Index() {
  const navigate = useNavigate();
  const location = useLocation();
  const contentRef = useRef<HTMLDivElement>(null);
  const [routerPage] = useState<any>(RouterPages[1].children || []);
  const [menuList] = useState<any>([...routerPage, ...routerPage[1].children]);
  const [menuData, setMenuData] = useState<any>([]);
  const [menuIndex, setMenuIndex] = useState<any>(
    sessionStorage.getItem('menuIndex')
      ? sessionStorage.getItem('menuIndex')
      : '0-0' || '0-0',
  );
  useEffect(() => {
    // 遍历menuList排除group===undefined的其他group相同的数据分组，放在同一个数组
    const arr: Array<any> = [];
    setTimeout(() => {
      menuList.forEach((item: any) => {
        const obj = arr.find((item1) => item1.group === item.group);
        if (obj) {
          obj.children.push(item);
        } else {
          arr.push({
            group: item.group,
            children: [item],
          });
        }
      });
      setTimeout(() => {
        setMenuData(arr);
      }, 150)
    }, 250)
  }, [menuList]);
  const handlerClick = (item: object, v: any, index: any) => {
    setMenuIndex(index);
    navigate(v.router);
    sessionStorage.setItem('menuIndex', index);
  };
  useEffect(() => {
    setMenuIndex(sessionStorage.getItem('menuIndex') ? sessionStorage.getItem('menuIndex') : '0-0');
    (contentRef.current as HTMLDivElement).scrollTop = 0;
  }, [location.pathname])
  console.log(location.pathname);
  return (
    <div className="layoutBox">
      <div className="menuBox">
        <Menu />
      </div>
      <div className="RouterViewInnerBox">
        <div className="leftMenuBox">
          {menuData && menuData.length
            ? menuData.map((item: any, index: number) => (
              <div key={index} className="groupItemBox">
                <p>{item.group}</p>
                <div className="menuItem">
                  {item.children.length
                    ? item.children.map((v: any, i: number) => (
                      <li
                        key={i}
                        className={menuIndex === `${index}-${i}` ? 'active' : ''}
                        onClick={() => handlerClick(item, v, `${index}-${i}`)}
                      >
                        {v.name}
                      </li>
                    ))
                    : null}
                </div>
              </div>
            ))
            : null}
        </div>
        <div className="contentBox" ref={contentRef}>
          {
            location.pathname !== '/docs/react/backtop' ? <Backtop target=".contentBox" /> : null
          }

          <Routes>
            {routerPage.map((item: any, index: number) => (
              <Route path={item.path} element={item.element} key={index} />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
}
