import React from "react";
import { useNavigate } from 'react-router-dom'
import logoImg from '../assets/logo.png';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="mzl-ui-react-home-inner">
      <div className="imgLogo">
        <img src={logoImg} alt="mzl-ui-react" />
      </div>
      <h3>一套适合开发者使用的轻量级UI组件库，完美支持React18+TS+Vite</h3>
      <p className="tiBox">完美支持React18+TS+Vite，更小的体积，更快的响应，更强的拓展性，让我们一起向未来，拥抱这精彩的code世界！ </p>
      <div className="contentBoxInnerHome">
        <div className="homeBtnGroup">
          <button onClick={() => navigate('/docs/index')}>开始</button>
        </div>
      </div>
    </div >
  )
}
