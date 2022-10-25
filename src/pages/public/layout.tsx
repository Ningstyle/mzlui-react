import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import RouterPages from '../../router/pages/page';

export default function Index() {
  const [routerPage] = useState(RouterPages[1].children[1].children || []);
  return (
    <div className="layoutBox1">
      <div className="rightContentBox">
        <Routes>
          {routerPage.map((item: any, index: number) => (
            <Route path={item.path} element={item.element} key={index} />
          ))}
        </Routes>
      </div>
    </div>
  );
}
