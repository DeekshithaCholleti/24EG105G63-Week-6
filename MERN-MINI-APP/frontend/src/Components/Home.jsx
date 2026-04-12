import { useContext } from "react";
import { counterContextObj } from "../contexts/ContextProvider"
import { useCounterStore } from "../store/CounterStore";

function Home() {
  //call useCounterStore hook to get state of Zustand store
  let newCounter=useCounterStore((state)=>state.newCounter);
  let incrementCounter=useCounterStore((state)=>state.incrementCounter);
  console.log("Home");
  const {counter,changeCounter}=useContext(counterContextObj);
  return (
    <div>
      <h1 className="text-4xl">Counter:{counter}</h1>
      <button onClick={changeCounter} className="bg-amber-400 text-2xl">Change</button>
      <button onClick={incrementCounter}>IncrementCounter</button>
    </div>
  )
}

export default Home