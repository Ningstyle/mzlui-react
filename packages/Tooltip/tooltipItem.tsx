import React, { useState, useRef, useImperativeHandle, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

interface TooltipEleProps {
  content: string | React.ReactNode;
  left: number;
  top: number;
  width: number;
  height: number;
  cRef: any;
}
function TooltipEl(props: TooltipEleProps): JSX.Element {
  const { content, left, top, width, height, cRef } = props;
  const divRef = useRef<HTMLDivElement>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [elWidth, setElWidth] = useState(0);
  const [style, setStyle] = useState({
    left: '',
    top: `${top - (height + 10)}px`,
  })
  useEffect(() => {
    if (elWidth > 0) {
      setStyle({
        ...style,
        left: `${left - ((elWidth - width) / 2)}px`,
      })
    }
  }, [elWidth])
  useImperativeHandle(cRef, () => ({
    handleOpen: (flag: boolean) => {
      setShowMessage(flag)
    },
  }));
  useEffect(() => {
    if (divRef.current !== null) {
      setElWidth(divRef.current.clientWidth)
    }
  })
  return (
    <CSSTransition
      in={showMessage}
      timeout={150}
      classNames="tooltip"
      unmountOnExit
    >
      <div className="mzl_tooltip_position" style={style} ref={divRef}>
        <div className="mzl_tooltip_content">
          {content}
          <span className="tooltip_arrow" />
        </div>
      </div>
    </CSSTransition>
  )
}
export default React.memo(TooltipEl)