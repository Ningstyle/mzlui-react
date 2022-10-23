// 路由配置
import React from 'react';
import IndexPage from '../../pages/index';
import HomePage from '../../pages/home';
import LayoutPage from '../../pages/layout';
import ButtonPage from '../../pages/packages/button';
import Nofound from '../../pages/404';
import Dedicate from '../../pages/packages/dedicate';
import InputPage from '../../pages/packages/input';

const BaseRouter: any = [
  {
    path: '/*',
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
        children: [
          {
            path: '/button',
            element: <ButtonPage />,
            name: 'Button 按钮',
            group: '通用',
            router: '/docs/react/button',
          },
          {
            path: '/input',
            element: <InputPage />,
            name: 'Input 输入框',
            group: '通用',
            router: '/docs/react/input',
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <Nofound />,
  },
];
export default BaseRouter;
