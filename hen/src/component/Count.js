import React from 'react'
import { useState } from 'react'

const Count = () => {
    const [count, setCount]=useState(0)
  return (
    <div>
          <h1>count:{count}</h1>
          <button onClick={(e)=>setCount(count+1)}>Click Me</button>
    </div>
  )
}

export default Count    