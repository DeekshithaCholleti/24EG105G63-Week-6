import { useState } from "react";
function TestRefTypes(){
        const [user, setUser]=useState({username:"Deekshitha",age:19,city:"hyd"});
        const [marks,setmarks]=useState([10,20,30]);
        //update user state
        const updateUser=()=>{
            setUser({...user,username:"Vivekitha"});
        }
        //update marks
        const updateMarks=()=>{
            setmarks([40,...marks]);
        }
return(
        <div className="text-center">
            <p className="text-3xl">UserName:{username}</p>
            <p className="text-3xl">Age:{age}</p>
            <p className="text-3xl">Age:{age}</p>
            <p className="text-3xl">City:{city}</p>
            <button onClick={updateUser} className="p-5 bg-blue-500">Updateuser</button>
            {marks.map((mark)=>(
                <p></p>
            ))}
        </div>
    )
}
export default TestRefTypes