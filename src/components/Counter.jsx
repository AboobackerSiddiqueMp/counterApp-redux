import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'
import { store } from '../redux/Store'
import { useState } from 'react'

function Counter() {
  const dispatch=useDispatch()
  const count=useSelector(state=>state.counter.value)
  const [range,setrange]=useState('')
  console.log(range)
  return (
    <div className='d-flex align-items-center justify-content-center w-100  flex-column' style={{marginTop:'-23px'}}>Counter
      <h1 style={{ fontSize: '70px', color: 'black' }}>{count}</h1>
      <div>
        <button className='btn btn-danger p-3 ms-2' onClick={()=>dispatch(decrement(Number(range)))}>decrement</button>
        <button className='btn btn-success p-3 ms-2' onClick={()=>dispatch(increment(Number(range)))}>increment</button>
        <button className='btn btn-primary p-3 ms-2'  onClick={()=>dispatch(reset())}>reset</button>
         </div>
         <div>
          <input type="text" className='form-control w-100 mt-3' placeholder='plese enter the range' style={{margin:"blue"}} onChange={(e)=>setrange(e.target.value)}/>
         </div>
    </div>
  )
}

export default Counter