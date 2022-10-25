import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export type MenuProps = {
  menuClick: (e: string | object) => void;
  showMenu?: boolean;
};
function Menu(props: MenuProps): JSX.Element {
  const { menuClick, showMenu } = props;
  const navigate = useNavigate()
  const [menulist] = useState<any>([
    { name: '首页', link: '/' },
    { name: '组件', link: '/docs/index' },
    { name: '更新日志', link: '/' },
    { name: '问题反馈', link: '/' },
  ])
  const [menuIndex, setMenuIndex] = useState<number>(1);
  return (
    <div>
      {showMenu ? (
        <div className="MenuBoxInner" onClick={() => menuClick('1')}>
          <div className="menuinnerBox">
            <div className="leftMenuLogo">
              <div className="logo" />
              <span className="version">1.0.0</span>
            </div>
            <div className="menuitemBox">
              {
                menulist.map((item: any, index: number) => (
                  <li key={index} className={menuIndex === index ? 'active' : ''} onClick={() => { setMenuIndex(index); navigate(item.link) }}>{item.name}</li>
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
