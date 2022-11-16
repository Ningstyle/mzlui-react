import React, { ReactNode, useEffect, useMemo, useState } from 'react'
import ReactDOM from 'react-dom/client';
import ReactD from 'react-dom';
import Button from '../Button'
import './style.scss'

export type ConfirmProps={
  title?:string,
  text?:string,
  icon?:string,
  lodingIcon?:string,
  confirmText?:string,
  cancelText?:string,
  confirmShow?:boolean,
  cancelShow?:boolean,
  closeShow?:boolean,
  displayed?:boolean,
  customClass?:string,
  children?:ReactNode
  confirmCallback?:(e?: any)=>any,
  cancelCallback?:(e?: any)=>any,
  errorCallback?:(e: any)=>any
}

const defaultProps:ConfirmProps={
  title:'提示',
  text:'这是内容',
  icon:'m-icon-warning',
  lodingIcon:'m-icon-loading2',
  confirmText:'确认',
  cancelText:'取消',
  confirmShow:true,
  cancelShow:true,
  closeShow:true,
  displayed:false,
}

function Confirm(prop:ConfirmProps):JSX.Element{
  const props={...defaultProps,...prop}
  const {title,
      text,
      icon,
      confirmText,
      cancelText,
      confirmShow,
      customClass,
      closeShow,
      cancelShow,
      displayed,
      lodingIcon,
      confirmCallback,
      cancelCallback,
      errorCallback,
      children}=props
  const [show,setShow]=useState(false)
  const [disabled,setDisable]=useState(false)
  const closeHandler=async ()=>{
    setShow(false)
    return cancelCallback&&await cancelCallback()
  }
  const confirmHandler=async ()=>{
    setDisable(true)
    let res
    try {
      res=confirmCallback&&await confirmCallback()
    } catch (error) {
      res=errorCallback&&errorCallback(error)
    }
    setDisable(false)
    setShow(false)
  }
  const showHandler=()=>{
    setShow(true)
  }
  const visable=useMemo(()=>{
    return show?'visible':'hidden'
  },[show])
  useEffect(()=>{
    displayed?showHandler():null
  },[])
  return (
    <>
      <span onClick={showHandler}>
      {children}
      </span>
      {ReactD.createPortal((
      <div style={{visibility:visable}} className={`confirm_container ${customClass}`}>
        <div className={`mzl-wrapper ${show?'transition':''}`}>
          <div className="mzl-header">
            <h3>{title}</h3>
            {closeShow&&<i onClick={closeHandler} className="m-icon-close close" />}
          </div>
          <div className="mzl-body">
            <i className={`${icon} warn`} />
            <span className="margin_left">
            {text}
            </span>
          </div>
          <div className="mzl-footer">
            {cancelShow&&<Button onClick={closeHandler} >{cancelText}</Button>}
            {confirmShow&&<Button type="primary" onClick={confirmHandler} disabled={disabled} className="margin_left">
              {disabled&&<i className={`${lodingIcon} loding`} />}
              {confirmText}
            </Button>}
          </div>
        </div>
      </div>
      ), document.body)}
    </>
  )
}

Confirm.info=(props?:ConfirmProps):Promise<boolean>=>{
  const prop={...defaultProps,...props}
  return new Promise((resolve,reject)=>{
    const {cancelCallback,confirmCallback,errorCallback}=prop
    const root = ReactDOM.createRoot(
      document.createDocumentFragment(),
    )
    let stop=false
    const handlerProps:ConfirmProps={
      displayed:true,
      cancelCallback(){
        root.unmount()
        stop=true
        return cancelCallback&&cancelCallback()
      },
      async confirmCallback(){
        let res
        try {
          res=confirmCallback&&await confirmCallback()
        } catch (error) {
          res = errorCallback&&errorCallback(error)
          return stop||reject(error)
        }
        return stop||resolve(res)
      },
    }
    root.render(<Confirm {...{...prop,...handlerProps}} />)
  })
}
export default Confirm;
