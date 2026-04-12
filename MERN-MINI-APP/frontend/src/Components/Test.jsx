import { useContext } from "react"
import { counterContextObj } from "../contexts/ContextProvider"

function Test() {
  console.log("Test");
  const {counter,changeCounter}=useContext(counterContextObj);
  return (
    <div>
      <h1 className="text-4xl">Counter1:{counter}</h1>
      <button onClick={changeCounter} className="bg-amber-400 text-2xl">Change</button>
    </div>
  )
}

export default Test