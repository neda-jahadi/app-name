import React, {useState,useEffect} from 'react';

const Effect = () =>{
  const myValue= false;
  const [count,setCount] = useState(10);
  const [hasData,setHasData] = useState(myValue);
 
  //Eventuella funktioner
  const handleSetCount = () =>{setCount(count+1);}
 
  useEffect(()=>{console.log('useEffect körs');})
  
  useEffect(()=>{console.log('useEffect körs[]');},[])

  useEffect(()=>{console.log('useEffect körs när count ändras',count);},[count])

  useEffect(()=>{console.log('useEffect körs när hasData ändras',hasData);},[hasData])

  return(
      <div>
          <h3>Effect demo</h3>
          <div>
              <button onClick={handleSetCount}>Click to update</button>
          </div>
          <div>
              <button onClick={()=>setHasData(!hasData)}>click to get data</button>
          </div>
      </div>
  )
}
export default Effect;