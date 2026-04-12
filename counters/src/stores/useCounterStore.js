import {create} from 'zustand'
export const useCounterStore=create((set)=>({
    //create a state
    newCounter:0,
    //functions to modify the state
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    resetCounter:()=>set({newCounter:0})
}));