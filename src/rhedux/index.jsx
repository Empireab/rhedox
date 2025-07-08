import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, incrememtbyInput, increment } from './countSlice'

function Index() {
    const number = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch()
    const [num, setNum] = useState('')
    const handleclick = ()=>{
const value = Number(num)
    if (!isNaN(value)) {
        dispatch(incrememtbyInput(value))
        setNum('')
        
    }

    else{
        alert('invalid input')
    }


    if (num === "") {
        
        alert('invalid input can not be empty')
    }
    }
    

  return (
    
   
    <>
    <button onClick={()=>dispatch(increment())}>+</button>
    <span>{number}</span>
    <button onClick={()=>dispatch(decrement())}>-</button><br /><br />
    <input type="text" name="" id="" onChange={(e)=> setNum(e.target.value) } value={num}/>
    <button onClick={handleclick}>Add</button>
    </>
  )
}

export default Index