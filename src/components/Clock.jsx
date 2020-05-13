import React,{useState,useEffect} from 'react';
const Clock = ()=>{
    const [time,setTime] = useState(null);

    useEffect(()=>{
       console.log('useEffect körs[]');
       const interval= setInterval(() => {
        let newTime = getTime();
        console.log('the time is:',newTime);
        setTime(newTime);
      }, 1000);
      return () => clearInterval(interval);

    },[])

    return (
        <div>What time is it?{time}</div>
    )
    

}
function getTime(){
    let date= new Date();
    return  `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
    
export default Clock;