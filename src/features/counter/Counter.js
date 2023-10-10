import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByValue } from './counterSlice'

const Counter = () => {
const [value, setValue] = useState(0);
const number = Number(value) || 0;
const count = useSelector((state)=> state.counter.count);
const dispatch = useDispatch();
const resetAll = () => {
    setValue(0);
    dispatch(reset());
}
  return <section>
    {count}
    <button onClick={()=> dispatch(increment())}>+</button>
    <button onClick={()=> dispatch(decrement())}>-</button>
    <input type="text" onChange={(e)=>setValue(e.target.value)}/>
    <button onClick={()=> dispatch(incrementByValue(number))}>Add Value</button>
    <button onClick={()=>resetAll}>Reset</button>
  </section>
}

export default Counter