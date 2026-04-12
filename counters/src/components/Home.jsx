import { useCounterStore } from "../stores/useCounterStore";

function Home() {
  const counter = useCounterStore((state) => state.newCounter);
  const increment = useCounterStore((state) => state.incrementCounter);
  const decrement = useCounterStore((state) => state.decrementCounter);
  const reset = useCounterStore((state) => state.resetCounter);

  console.log("Home rendered");

  return (
    <div className="p-10 space-y-6">
      {[1, 2, 3, 4].map((_, index) => (
        <div key={index} className="bg-white p-5 shadow-lg rounded-lg">
          <h2 className="text-xl">Counter {index + 1}: {counter}</h2>

          <div className="flex gap-4 mt-3">
            <button onClick={increment} className="bg-green-400 p-2">
              +
            </button>
            <button onClick={decrement} className="bg-red-400 p-2">
              -
            </button>
            <button onClick={reset} className="bg-gray-400 p-2">
              reset
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;