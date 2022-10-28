import React from 'react';
import { Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom';
import BaseRouter from './pages/page';
// 一级路由
export default function RouterBase() {
  return (
    <HashRouter>
      <Routes>
        {BaseRouter.map((item: any, index: number) => (
          <Route path={item.path} element={item.element} key={index} />
        ))}
      </Routes>
    </HashRouter>
  );
}
