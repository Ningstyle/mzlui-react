import React, { CSSProperties } from 'react';
import './style.scss';
import classNames from 'classnames';
import Preview from './preview';

export type ImageProps = {
  style?: CSSProperties;
  className?: string;
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  preview?: boolean;
  previewList?: Array<string>;
  toIndex?: number;
};
export default function Image(props: ImageProps): JSX.Element {
  const { style, className, src, alt, width, height, fit, preview, previewList, toIndex } = props;
  const [previewShow, setPreviewShow] = React.useState(false);
  const [imgList, setImgList] = React.useState<Array<string>>([])
  const imageClass = classNames({
    'mzl_image': true,
    [className || '']: !!className,
  });
  const imageStyle = {
    ...style,
    width,
    height,
    objectFit: fit,
    cursor: preview ? 'pointer' : 'default',
  }
  const handlerPreviewClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (preview) {
      if (previewList && previewList.length > 1) {
        setImgList(previewList);
      } else {
        setImgList([e.currentTarget.src]);
      }
      setPreviewShow(true);
    }
  }
  const closePreview = () => {
    setPreviewShow(false);
  }
  return (
    <>
      <img src={src} className={imageClass} style={style || imageStyle} alt={alt} onClick={(e) => handlerPreviewClick(e)} />
      {
        preview && <Preview
          show={previewShow}
          closePreview={closePreview}
          previewList={imgList}
          locateIndex={toIndex}
        />
      }
    </>
  );
}
Image.defaultProps = {
  style: '',
  className: '',
  alt: '图片加载失败',
  width: '100%',
  height: '100%',
  fit: 'cover',
  preview: false,
  previewList: [],
  toIndex: 0,
};
