import React, { CSSProperties } from 'react';
import './style.scss';
import classNames from 'classnames';

export type ImageProps = {
    src: string;
    alt?:string
    className?: string;
    style?: CSSProperties;
    fit?:'fill'| 'contain'| 'cover'| 'none'| 'scale-down',
};

const Image:React.FC<ImageProps>=(props:ImageProps)=>{
    const {src,alt,className ,style,fit}=props;


    const ImageClass = classNames({
        [className || '']: !!className,
    });

    const newStyle:CSSProperties={
        ...style,
        objectFit:fit

    }

    return (
            <img src={src} alt={alt} className={ImageClass} style={newStyle} />
    )
}

Image.defaultProps = {
    alt: '',
    className:'',
    style:{},
    fit:'contain'
   
};
export default Image