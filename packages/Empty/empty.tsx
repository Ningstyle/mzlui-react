import React, { CSSProperties } from 'react';
import './style.scss';
import classNames from 'classnames';

export type emptyProps = {
  style?: CSSProperties;
  className?: string;
  description?: string | React.ReactNode | boolean;
  image?: string | React.ReactNode;
  imageStyle?: CSSProperties;
  children?: React.ReactNode;
};
export default function Empty(props: emptyProps): JSX.Element {
  const { style, className, description, image, imageStyle, children } = props;
  const emptyClass = classNames({
    'mzl_empty': true,
    [className || '']: !!className,
  });
  const emptyStyle = {
    ...style,
  }
  return (
    <div className={emptyClass} style={style || emptyStyle} >
      {
        image && image !== '' && typeof image === 'string' ? <img src={image} alt="empty" style={imageStyle} /> : image
      }
      {
        description && description !== '' && typeof description === 'string' ? <div className="mzl_empty_description">{description}</div> : <div>{description}</div>
      }
      {children}
    </div>
  );
}
Empty.defaultProps = {
  style: '',
  className: '',
  description: '暂无数据',
  image: <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="70" height="70"><path d="M102.4 896a409.6 51.2 0 1 0 819.2 0 409.6 51.2 0 1 0-819.2 0Z" fill="#dbdbdb" opacity=".1" /><path d="M116.736 376.832c0 8.704 6.656 15.36 15.36 15.36s15.36-6.656 15.36-15.36-6.656-15.36-15.36-15.36c-8.192 0-15.36 7.168-15.36 15.36zM926.72 832c-19.456 5.12-23.552 9.216-28.16 28.16-5.12-19.456-9.216-23.552-28.16-28.16 18.944-5.12 23.552-9.216 28.16-28.16 4.608 18.944 8.704 23.552 28.16 28.16zM202.24 323.072c-25.088 6.656-30.208 11.776-36.864 36.864-6.656-25.088-11.776-30.208-36.864-36.864 25.088-6.656 30.208-12.288 36.864-36.864 6.144 25.088 11.776 30.208 36.864 36.864zM816.64 235.008c-15.36 4.096-18.432 7.168-22.528 22.528-4.096-15.36-7.168-18.432-22.528-22.528 15.36-4.096 18.432-7.168 22.528-22.528 3.584 15.36 7.168 18.432 22.528 22.528zM882.688 156.16c-39.936 10.24-48.128 18.944-58.88 58.88-10.24-39.936-18.944-48.128-58.88-58.88 39.936-10.24 48.128-18.944 58.88-58.88 10.24 39.424 18.944 48.128 58.88 58.88z" fill="#dbdbdb" opacity=".5" /><path d="M419.84 713.216v4.096l33.792 31.232 129.536-62.976L465.92 760.832v36.864l18.944-18.432v-0.512 0.512l18.944 18.432 100.352-122.88v-4.096z" fill="#dbdbdb" opacity=".2" /><path d="M860.16 551.936v-1.024c0-1.024-0.512-1.536-0.512-2.56v-0.512l-110.08-287.232c-15.872-48.64-60.928-81.408-112.128-81.408H387.072c-51.2 0-96.256 32.768-112.128 81.408L164.864 547.84v0.512c-0.512 1.024-0.512 1.536-0.512 2.56V757.76c0 65.024 52.736 117.76 117.76 117.76h460.8c65.024 0 117.76-52.736 117.76-117.76v-204.8c-0.512-0.512-0.512-0.512-0.512-1.024zM303.616 271.36s0-0.512 0.512-0.512C315.392 233.984 349.184 209.92 387.072 209.92h249.856c37.888 0 71.68 24.064 83.456 60.416 0 0 0 0.512 0.512 0.512l101.888 266.24H588.8c-8.704 0-15.36 6.656-15.36 15.36 0 33.792-27.648 61.44-61.44 61.44s-61.44-27.648-61.44-61.44c0-8.704-6.656-15.36-15.36-15.36H201.728L303.616 271.36zM829.44 757.76c0 48.128-38.912 87.04-87.04 87.04H281.6c-48.128 0-87.04-38.912-87.04-87.04v-189.44h226.816c7.168 43.52 45.056 76.8 90.624 76.8s83.456-33.28 90.624-76.8H829.44v189.44z" fill="#dbdbdb" opacity=".5" /><path d="M512 578.56c-14.336 0-25.6-11.264-25.6-25.6V501.76H253.44l83.968-219.136 0.512-1.024c7.168-21.504 26.624-35.84 49.152-35.84h249.856c22.528 0 41.984 14.336 49.152 35.84l0.512 1.024L770.56 501.76H537.6v51.2c0 14.336-11.264 25.6-25.6 25.6z" fill="#dbdbdb" opacity=".2" /></svg>,
  imageStyle: {},
  children: '',
};
