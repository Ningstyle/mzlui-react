import React from "react";
import { Image, Mask } from "..";
import './style.scss';

export type PreviewProps = {
  previewList?: Array<string>;
  show?: boolean;
  closePreview?: () => void;
  locateIndex?: number;
};
export default function Preview(props: PreviewProps): JSX.Element {
  const { previewList, show, closePreview, locateIndex } = props;
  const [index, setIndex] = React.useState(locateIndex);
  const [styles, setStyles] = React.useState({
    transform: 'scale3d(1, 1, 1) rotate(0deg)',
  })
  const [params, setParams] = React.useState({
    scale: 1,
    rotate: 0,
  })
  const handlerClose = () => {
    closePreview && closePreview()
    setTimeout(() => {
      setStyles({
        transform: 'scale3d(1, 1, 1) rotate(0deg)',
      })
      setParams({
        scale: 1,
        rotate: 0,
      })
    }, 250)
  };
  // console.log('previewList', previewList)
  // 左旋转
  const leftRotate = () => {
    setParams({
      ...params,
      rotate: params.rotate -= 90,
    })
    setStyles({
      transform: `scale3d(${params.scale}, ${params.scale}, 1) rotate(${params.rotate}deg)`,
    })
  };
  // 右旋转
  const rightRotate = () => {
    setParams({
      ...params,
      rotate: params.rotate += 90,
    })
    setStyles({
      transform: `scale3d(${params.scale}, ${params.scale}, 1) rotate(${params.rotate}deg)`,
    })
  };
  // 放大
  const scalebig = () => {
    setParams({
      ...params,
      scale: params.scale += 0.5,
    })
    setStyles({
      transform: `scale3d(${params.scale}, ${params.scale}, 1) rotate(${params.rotate}deg)`,
    })
  };
  // 缩小
  const scalesmall = () => {
    setParams({
      ...params,
      scale: params.scale <= 0.5 ? 0.5 : params.scale -= 0.5,
    })
    setStyles({
      transform: `scale3d(${params.scale}, ${params.scale}, 1) rotate(${params.rotate}deg)`,
    })
  };
  // 监测鼠标滚轮事件进行放大缩小
  const handlerWheel = (e: any) => {
    if (e.deltaY > 0) {
      scalesmall()
    } else {
      scalebig()
    }
  };
  // 绑定鼠标滚动事件
  React.useEffect(() => {
    document.addEventListener('wheel', handlerWheel, false);
    return () => {
      document.removeEventListener('wheel', handlerWheel, false);
    };
  }, []);
  // 上一张
  const previous = () => {
    setStyles({
      transform: 'scale3d(1, 1, 1) rotate(0deg)',
    })
    setParams({
      scale: 1,
      rotate: 0,
    })
    if ((index as number) >= (previewList as Array<string>).length || index === 0) {
      setIndex(0)
      return
    }
    setIndex((index as number) - 1)
  };
  // 下一张
  const next = () => {
    setStyles({
      transform: 'scale3d(1, 1, 1) rotate(0deg)',
    })
    setParams({
      scale: 1,
      rotate: 0,
    })
    if ((index as number) >= (previewList as Array<string>).length - 1) {
      setIndex((previewList as Array<string>).length - 1)
      return
    }
    setIndex((index as number) + 1)
  }
  React.useEffect(() => {
    if (show) {
      setIndex(locateIndex)
    }
  }, [show])
  return (
    <Mask visible={show as boolean} maskClick={handlerClose}>
      <div className="previewImgBox">
        <div className="equinox">{(index as number) + 1}/{previewList?.length}</div>
        <div className="preview_head" onClick={(e) => e.stopPropagation()}>
          <li onClick={leftRotate}>
            <svg viewBox="64 64 896 896" focusable="false" data-icon="rotate-left" width="18px" height="18px" fill="currentColor" aria-hidden="true"><defs><style /></defs><path d="M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z" /><path d="M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z" /></svg>
          </li>
          <li onClick={rightRotate}>
            <svg viewBox="64 64 896 896" focusable="false" data-icon="rotate-right" width="18px" height="18px" fill="currentColor" aria-hidden="true"><defs><style /></defs><path d="M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z" /><path d="M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z" /></svg>
          </li>
          <li onClick={scalesmall}><i className="m-icon-zoom-in" /></li>
          <li onClick={scalebig}><i className="m-icon-zoom-out" /></li>
          <li onClick={handlerClose}><i className="m-icon-close-bold" /></li>
        </div>
        <div
          className={['previous', 'switch', (index as number) >= (previewList as Array<string>).length || index === 0 ? 'noCursor' : ''].join(' ')}
          onClick={(e) => { e.stopPropagation(); previous() }}
        >
          <i className="m-icon-arrow-left-bold" />
        </div>
        <div
          className={['next', 'switch', (index as number) >= (previewList as Array<string>).length - 1 ? 'noCursor' : ''].join(' ')}
          onClick={(e) => { e.stopPropagation(); next() }}
        >
          <i className="m-icon-arrow-right-bold" />
        </div>
        <div className="preview_inner_box">
          <div onClick={(e) => e.stopPropagation()}>
            <Image
              src={(previewList as Array<string>)[(index as number)]}
              style={styles}
            />
          </div>
        </div>
      </div>
    </Mask>

  )
}
Preview.defaultProps = {
  previewList: [],
  show: false,
  closePreview: () => { },
  locateIndex: 0
}