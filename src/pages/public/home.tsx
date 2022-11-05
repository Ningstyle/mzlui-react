import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../packages';

export default function Index() {
  const navigate = useNavigate();
  const [menulist] = useState([
    { name: "首页", path: "/" },
    { name: "组件", path: "/docs/index" },
    { name: "更新日志", path: "/docs/updateLog" },
    { name: "问题反馈", path: "https://github.com/Ningstyle/mzlui-react/issues" },
  ])
  const [menuIndex, setMenuIndex] = useState(0)
  sessionStorage.removeItem('menuIndex')
  sessionStorage.removeItem('mIndex')
  const menuClick = (index: number, path: string) => {
    const arr = {
      0: 0,
      1: 1,
      2: 2,
    }
    const arr1 = {
      0: '',
      1: '0-0',
      2: '0-2',
    }
    if (index !== 3) {
      setMenuIndex(index);
      navigate(path)
      sessionStorage.setItem('menuIndex', arr1[index])
      sessionStorage.setItem('mIndex', arr[index])
    } else {
      window.open(path)
    }


  }
  return (
    <div className="mzl-ui-react-home-inner">
      <div className="homeBoxinner">
        <div className="homeHeader">
          <div className="homeHaderInner">
            <div className="logoArea">
              <span className="logoImg" />
              <span className="nameSpan">React</span>
            </div>
            <div className="menuArea">
              {
                menulist.map((item, index) => (
                  <li key={index} className={menuIndex === index ? 'active' : ''} onClick={() => menuClick(index, item.path)}>{item.name}</li>
                ))
              }
            </div>
            <div className="linsArea">
              <span className="github" onClick={() => window.open('https://github.com/Ningstyle/mzlui-react')} />
              <span className="npm" onClick={() => window.open('https://www.npmjs.com/package/mzlui-rt')} />
            </div>
          </div>
        </div>
        <div className="imgLogo">
          <span />
        </div>
        <h3>一套适合开发者使用的轻量级UI组件库，完美支持React18+TS+Vite</h3>
        <p className="tiBox">完美支持React18+TS+Vite，更小的体积，更快的响应，更强的拓展性，让我们一起向未来，拥抱这精彩的code世界！ </p>
        <div className="contentBoxInnerHome">
          <div className="homeBtnGroup">
            <Button type="success" size="large" onClick={() => navigate('/docs/index')} style={{ width: '100px' }}>快速开始</Button>
            <Button size="large" onClick={() => window.open('https://github.com/Ningstyle/mzlui-react')} style={{ width: '100px' }}>Github</Button>
          </div>
          <div className="compentsdescBoxInner">
            <div className="compentsdescBoxItemInner">
              <div className="itemInner">
                <div className="itemIcon descicon1" />
                <div className="itemDesc">
                  <p>更小的体积</p>
                  <div className="itemdescContent">小，才是极致。强，才是道理,nice!</div>
                </div>
              </div>
              <div className="itemInner">
                <div className="itemIcon descicon2" />
                <div className="itemDesc">
                  <p>更快的响应</p>
                  <div className="itemdescContent">极致的响应体验，带给你不一样的开发享受!</div>
                </div>
              </div>
              <div className="itemInner">
                <div className="itemIcon descicon3" />
                <div className="itemDesc">
                  <p>更强的拓展性</p>
                  <div className="itemdescContent">一切需求，任何场景，你说了算！</div>
                </div>
              </div>
              <div className="itemInner">
                <div className="itemIcon descicon4" />
                <div className="itemDesc">
                  <p>更完美的支持</p>
                  <div className="itemdescContent">React+Typescript+vite,你还想咋的！</div>
                </div>
              </div>
              <div className="itemInner">
                <div className="itemIcon descicon5" />
                <div className="itemDesc">
                  <p>更友好的渲染</p>
                  <div className="itemdescContent">懂你的不只有知己，还有mzl-ui-react！</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerInner">
        Copyright © 2020. All Rights Reserved. 沪ICP备2020028381号-1
      </div>
    </div >
  )
}
