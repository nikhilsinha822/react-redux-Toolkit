import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByValue } from './counterSlice'

const Counter = () => {
const [incValue, setIncValue] = useState(0);
const number = Number(incValue) || 0;
const count = useSelector((state)=> state.counter.count);
const dispatch = useDispatch();
const resetAll = () => {
    setIncValue(0);
    dispatch(reset());
}
  return <section>
    {count}
    <button onClick={()=> dispatch(increment())}>+</button>
    <button onClick={()=> dispatch(decrement())}>-</button>
    <input type="text" onChange={(e)=>setIncValue(e.target.value)} value={incValue}/>
    <button onClick={()=> dispatch(incrementByValue(number))}>Add Value</button>
    <button onClick={resetAll}>Reset</button>
  </section>
}

export default Counter