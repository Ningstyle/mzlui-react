import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import './style.scss';

export interface SwiperProps {
  children: React.ReactNode;
  showArrow?: boolean;
  showDots?: boolean;
  autoplay?: boolean;
  duration?: number;
  dotType?: 'line' | 'dot' | 'square';
  dotPosition?: 'bottom' | 'top' | 'left' | 'right';
  leftArrow?: ReactNode;
  rightArrow?: ReactNode;
  height?: string;
}

const Swiper: React.FC<SwiperProps> = (props) => {
  const {
    children,
    autoplay,
    duration,
    height,
    showDots,
    dotPosition,
    dotType,
    showArrow,
    leftArrow,
    rightArrow,
  } = props;

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const childrenLength = React.Children.count(children);
  function swiperItemRender() {
    let swiperItems = React.Children.toArray(children);
    swiperItems = swiperItems.filter((child) => {
      if (typeof child === 'string') {
        return !!child.trim();
      }
      return !!child;
    });

    if (childrenLength) {
      return swiperItems.map((c: ReactNode, index: number) => {
        return currentIndex === index ? (
          <div key={index} className="mzl-swiper-item current">
            {c}
          </div>
        ) : (
          <div key={index} className="mzl-swiper-item">
            {c}
          </div>
        );
      });
    }
    return null;
  }

  function dotsRender() {
    return (
      <>
        {Array(React.Children.count(children))
          .fill(0)
          .map((_, index: number) => {
            if (index === currentIndex) {
              return (
                <div
                  className="mzl_swiper-dot-item mzl_swiper-dot-item__active"
                  key={index}
                />
              );
            }
            return <div className="mzl_swiper-dot-item" key={index} />;
          })}
      </>
    );
  }

  function prev() {
    if (currentIndex <= 0) {
      setCurrentIndex(childrenLength - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  const next = useCallback(() => {
    if (currentIndex > childrenLength - 2) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex, childrenLength]);

  const autoPlay = useCallback(() => {
    const timer = setTimeout(() => {
      next();
      autoPlay();
    }, duration);

    return () => {
      if (autoplay) clearTimeout(timer);
    };
  }, [duration, next, autoplay]);

  useEffect(() => {
    if (autoplay) {
      autoPlay();
    }
  }, [autoplay, autoPlay]);

  return (
    <div className="mzl_swiper" style={{ height }}>
      {children && swiperItemRender()}

      <div className="mzl_swiper-arrow-container">
        {showArrow && (dotPosition === 'bottom' || dotPosition === 'top') && (
          <>
            <span
              className="mzl_swiper-arrow-item mzl_swiper-arrow-item__left"
              onClick={prev}
            >
              {leftArrow || <i className="m-icon-arrow-left-filling" />}
            </span>
            <span
              className="mzl_swiper-arrow-item mzl_swiper-arrow-item__right"
              onClick={next}
            >
              {rightArrow || <i className="m-icon-arrow-right-filling" />}
            </span>
          </>
        )}
      </div>

      <div
        className={
          showDots
            ? `mzl_swiper-dot-container mzl_swiper-dot-type__${dotType} mzl_swiper-dot-${dotPosition}`
            : ''
        }
      >
        {showDots && dotsRender()}
      </div>
    </div>
  );
};

Swiper.defaultProps = {
  showArrow: true,
  leftArrow: undefined,
  rightArrow: undefined,
  showDots: true,
  autoplay: false,
  dotType: 'dot',
  dotPosition: 'bottom',
  height: '200px',
  duration: 3000,
};

export default Swiper;
