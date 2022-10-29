import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'

export type MenuProps = {
  showMenu?: boolean;
};
function Menu(props: MenuProps): JSX.Element {
  const { showMenu } = props;
  const navigate = useNavigate()
  const location = useLocation()
  const [menulist] = useState<any>([
    { name: '首页', link: '/' },
    { name: '组件', link: '/docs/index' },
    { name: '更新日志', link: '/docs/updateLog' },
    { name: '问题反馈', link: 'https://github.com/Ningstyle/mzlui-react/issues' },
  ])
  const [menuIndex, setMenuIndex] = useState<number>(sessionStorage.getItem('mIndex') ? Number(sessionStorage.getItem('mIndex')) : 1);
  const menuClick = (index: number, link: string) => {
    const arr = {
      0: '',
      1: '0-0',
      2: '0-2',
    }
    if (index !== 3) {
      setMenuIndex(index);
      navigate(link)
      sessionStorage.setItem('menuIndex', arr[index])
      sessionStorage.setItem('mIndex', index.toString())
    } else {
      window.open(link)
    }
  }
  useEffect(() => {
    setMenuIndex(sessionStorage.getItem('mIndex') ? Number(sessionStorage.getItem('mIndex')) : 1)
  }, [location.pathname])
  return (
    <div>
      {showMenu ? (
        <div className="MenuBoxInner">
          <div className="menuinnerBox">
            <div className="leftMenuLogo">
              <div className="logo" />
              <span className="version">1.0.0</span>
            </div>
            <div className="menuitemBox">
              {
                menulist.map((item: any, index: number) => (
                  <li key={index} className={menuIndex === index ? 'active' : ''} onClick={() => menuClick(index, item.link)}>{item.name}</li>
                ))
              }
            </div>
            <div className="linsArea1">
              <span className="github" onClick={() => window.open('https://github.com/Ningstyle/mzlui-react')} />
              <span className="npm" onClick={() => window.open('https://www.npmjs.com/package/mzlui-rt')} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
Menu.defaultProps = {
  showMenu: true,
};
export default React.memo(Menu);
