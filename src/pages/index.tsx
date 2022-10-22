import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import RouterPages from '../router/pages/page';
import Menu from '../components/menu';

// 二级路由
export default function Index() {
  const navigate = useNavigate();
  const [routerPage] = useState<any>(RouterPages[1].children || []);
  const [menuList] = useState<any>([routerPage[0], ...routerPage[1].children]);
  const [menuData, setMenuData] = useState<any>([]);
  const [menuIndex, setMenuIndex] = useState<number>(
    sessionStorage.getItem('menuIndex')
      ? Number(sessionStorage.getItem('menuIndex'))
      : 0 || 0,
  );
  useEffect(() => {
    // 遍历menuList将group相同的放到一起整理成一个数组
    const arr: Array<any> = [];
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
    setMenuData(arr);
  }, [menuList]);
  const menuClick = () => {
    console.log(1111);
  };
  const handlerClick = (item: object, v: any, index: any) => {
    setMenuIndex(index);
    navigate(v.router);
    sessionStorage.setItem('menuIndex', index);
  };
  return (
    <div className="layoutBox">
      <div className="menuBox">
        <Menu menuClick={menuClick} />
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
                            className={menuIndex === index + i ? 'active' : ''}
                            onClick={() => handlerClick(item, v, index + i)}
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
        <div className="contentBox">
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
