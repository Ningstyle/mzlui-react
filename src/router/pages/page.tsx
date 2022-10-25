// 路由配置
import React from 'react';
import IndexPage from '../../pages/public/index';
import HomePage from '../../pages/public/home';
import LayoutPage from '../../pages/public/layout';
import Nofound from '../../pages/public/404';
import Dedicate from '../../pages/public/dedicate';
import UpdateLog from '../../pages/public/updatelog';
import PackagesRouter from './packages'

const BaseRouter: any = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/docs*',
    element: <IndexPage />,
    children: [
      {
        path: '/index',
        element: <Dedicate />,
        name: '贡献指南',
        group: '快速上手',
        router: '/docs/index',
      },
      {
        path: '/react/*',
        element: <LayoutPage />, // 二级路由
        children: PackagesRouter,
        group: '快速上手',
      },
      {
        path: '/updateLog',
        element: <UpdateLog />,
        name: '更新日志',
        group: '快速上手',
        router: '/docs/updateLog',
      },
    ],
  },
  {
    path: '*',
    element: <Nofound />,
  },
];
export default BaseRouter;
