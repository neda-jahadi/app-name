import React,{useState} from 'react';
const Bordered = ({children,bilHeader})=>{
    const [bilFlick,setBilFlick]=useState(0);
     const jsxBilHeader= bilHeader.map((bilItem,index)=>(<span key={bilItem} onClick={()=>setBilFlick(index)}>{bilItem}</span>))
    return (
        <div>
        <div>{jsxBilHeader}</div>
        {children[bilFlick]}
       </div>
       ) 
}

    

  

export default Bordered;