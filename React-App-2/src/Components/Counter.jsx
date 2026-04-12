import { useState } from "react";
function Counter(){
    //state
    const [count,setCount]=useState(0);//[state,function to modify state]
  //  let count=0;
  //Functions to modify the state
    const increment=()=>{
       setCount(count +1);
    };
    const decrement=()=>{
       setCount(count -1);
    };
    const reset=(value)=>{
        setCount(value);
    }
    console.log("counter component")
    return(
        <div className="text-center p-10 border">
            <h1 className="text-6xl">Count:{count}</h1>
            <button onClick={increment} className="bg-red-500 mx-9 p-6">+</button>
            <button onClick={decrement} className="bg-green-500 p-6">-</button>
            <button onClick={()=>reset(0)} className="bg-yellow-500 p-6">-</button>

        </div>
    )

}
export default Counter