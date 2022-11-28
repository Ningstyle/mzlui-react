import React from 'react';
import { Image } from '../../../packages';

export default function Demo1() {
    const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
    return (
        <div style={{ display: 'flex' }}>
            {fits.map((item:any,index:number)=>{
                return  <div style={{marginRight:'20px',width:'100px',height:'100px' }} key={index}>
                <p style={{textAlign:'center'}}>{item}</p>
                <Image style={{width:'100px',height:"100px"}} src='https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' fit={item}/>
            </div>
            })}
        </div>

    )
}
