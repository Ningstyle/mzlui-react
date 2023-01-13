import React, { lazy, Suspense } from 'react';

const isDev = import.meta.env.MODE === "development";
// 动态导入组件
export const lazyLoad = (moduleName: string) => {
  // const Module = lazy(() => import(/* @vite-ignore */`/src/pages/packages/${moduleName}.tsx`));
  const Module = lazy(async () => {
    const com = await import(/* @vite-ignore */`../pages/packages/${moduleName}.tsx`);
    return { default: com.default || com };
  })
  return <Suspense><Module /></Suspense>;
};
// 获取packages下所有文件
const getAllFiles = () => {
  const files: Array<any> = []
  const allFiles = import.meta.glob(/* @vite-ignore */ `/src/pages/packages/*.tsx`);
  for (const f in allFiles) {
    // 截取f中的文件名
    const name = (f as any).split('/').pop().split('.')[0];
    async function getcontent() {
      if (isDev) {
        const s = (await import(/* @vite-ignore */ `${f}?raw`)).default
        return s
      }
      const s = await fetch(f).then((res) => res.text())
      return s
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
// 获取body偏移量
export const getElOffSet = (curEle) => {
  let totalLeft = null;
  let totalTop = null;
  let par = curEle.offsetParent;
  totalLeft += curEle.offsetLeft;
  totalTop += curEle.offsetTop;
  while (par) {
    if (navigator.userAgent.indexOf("MSIE 8.0") === -1) {
      totalTop += par.clientTop;
      totalLeft += par.clientLeft;
    }
    totalTop += par.offsetTop;
    totalLeft += par.offsetLeft;
    par = par.offsetParent;
  }
  return { left: totalLeft, top: totalTop };
}