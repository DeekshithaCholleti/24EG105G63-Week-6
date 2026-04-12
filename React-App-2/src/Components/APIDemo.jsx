import { useEffect } from "react";
import { useState } from "react";

function APIDemo(){
    //let [count,setCount]=useState(100);
    //const changeCount=()=>{
     //   setCount(count + 1);
   // };
  /* useEffect(()=>{
    console.log("Use Effect Executed");
   });
   console.log("API demo rendered");
   //Making API req need to be in waiting until initial rendering
   //Initial render-->Display-->API call-->rerender-->display

    return(
        <div className="text-center">
            <p className="text-2xl">Count:{count}</p>
            <button className="bg-blue-600 text-2xl">ChangeCount</button>
        </div>
    )*/
   console.log("API demo rendered");
   let [users,setUsers]=useState([]);
   let [loading,setLoading]=useState(false);
   let [error,setError]=useState(null);
   useEffect(()=>{
    //a function to make API req
    async function getData() {
        //set loading to true
        setLoading(true);
        try{
            let res=await fetch("https://jsonplaceholder.typicode.comments");
            let usersList=await res.json();
            //update state
            setUsers(usersList);
        }catch(err){
            console.log("Err is :",err);
            //update error state
            setError(err);
        }finally{
            setLoading(false);
        }
    }
    //call
    getData();
   },[]);
   if(loading){
    return <p className="text-center text-5xl">Loading...</p>
   }
   if(error!=null){
    return <p className="text-center text-red-600 text-5xl">{error.message}</p>
   }
   return(
    <div className="text-center mt-10">
        <h1 className="text-8xl text-blue-200">List of Users</h1>
        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {users.map((userObj)=>(
                <div key={userObj.id}>
                    <p>{userObj.name}</p>
                    <p>{userObj.email}</p>
                </div>
            ))}
        </div>
    </div>
   )
}
export default APIDemo