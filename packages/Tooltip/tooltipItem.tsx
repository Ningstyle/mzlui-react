import React, { useState, useRef, useImperativeHandle, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';

interface TooltipEleProps {
  content: string | React.ReactNode;
  left: number;
  top: number;
  width: number;
  height: number;
  cRef: React.RefObject<any>;
  align?: string;
  color?: string;
  zIndex?: number;
}
function TooltipEl(props: TooltipEleProps): JSX.Element {
  const { content, left, top, width, height, cRef, align, color, zIndex } = props;
  const divRef = useRef<HTMLDivElement>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [elWidth, setElWidth] = useState(0);
  const [style, setStyle] = useState({
    left: '',
    top: '',
    zIndex,
  })
  const arrowClass = classNames({
    'mzl_tooltip-arrow': true,
    [`mzl_tooltip-arrow_${align}`]: true,
  })
  useEffect(() => {
    if (elWidth > 0) {
      if (align === 'top') {
        setStyle({
          ...style,
          left: `${left - ((elWidth - width) / 2)}px`,
          top: `${top - (height + 10)}px`,
        })
      } else if (align === 'bottom') {
        setStyle({
          ...style,
          left: `${left - ((elWidth - width) / 2)}px`,
          top: `${top + (height + 10)}px`,
        })
      } else if (align === 'left') {
        setStyle({
          ...style,
          left: `${left - (elWidth + 10)}px`,
          top: `${top}px`,
        })
      } else if (align === 'right') {
        setStyle({
          ...style,
          left: `${left + (width + 10)}px`,
          top: `${top}px`,
        })
      }
    }
  }, [elWidth, align])
  useImperativeHandle(cRef, () => ({
    handleOpen: (flag: boolean) => {
      setShowTooltip(flag)
    },
  }));
  useEffect(() => {
    if (divRef.current !== null) {
      setElWidth(divRef.current.clientWidth)
    }
  })
  return (
    <CSSTransition
      in={showTooltip}
      timeout={150}
      classNames="tooltip"
      unmountOnExit
    >
      <div className="mzl_tooltip_position" style={style} ref={divRef}>
        <div className="mzl_tooltip_content" style={{ background: color }}>
          {content}
          <span className={arrowClass} style={{ background: color }} />
        </div>
      </div>
    </CSSTransition>
  )
}
TooltipEl.defaultProps = {
  align: 'top',
  color: "#000",
  zIndex: 1011,
}
export default React.memo(TooltipEl)