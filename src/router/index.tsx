import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import BaseRouter from './pages/page';
// 一级路由
export default function RouterBase() {
  return (
    <BrowserRouter>
      <Routes>
        {BaseRouter.map((item: any, index: number) => (
          <Route path={item.path} element={item.element} key={index} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
