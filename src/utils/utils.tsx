import React, { lazy, Suspense } from 'react';
// 动态导入组件
export const lazyLoad = (moduleName: string) => {
  const Module = lazy(() => import(/* @vite-ignore */`/src/pages/packages/${moduleName}.tsx`));
  return <Suspense><Module /></Suspense>;
};
// 获取packages下所有文件
const getAllFiles = () => {
  const files: Array<any> = []
  const allFiles = import.meta.glob(/* @vite-ignore */ `/src/pages/packages/*.tsx`);
  for (const f in allFiles) {
    // 截取f中的文件名
    const name = f.split('/').pop().split('.')[0];
    async function getcontent() {
      return (await import(/* @vite-ignore */ `${f}?raw`)).default
    }
    files.push({ name, files: getcontent() });
  }
  return files
}
// 组装路由
export const getRouter = () => {
  const router: Array<any> = []
  getAllFiles().forEach((item: any, index: number) => {
    item.files.then(res => { router[index].name = res.match(/@name:"(.*?)"/)[1] });
    item.files.then(res => { router[index].group = res.match(/@group:"(.*?)"/)[1] })
    router.push({
      path: `/${item.name}`,
      element: lazyLoad(item.name),
      router: `/docs/react/${item.name}`,
    })
  })
  return router
}