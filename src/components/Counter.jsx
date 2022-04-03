import React from 'react'
import { useState } from 'react';

const Counter = ({countN}) => {
    const [count,setCount] = useState(0)

    const tasbeehCount = () => {
      setCount(count + 1)
  
      if(count === countN){
        setCount('Done')
      }
      if(count === 'Done'){
        setCount(0)
      }
  
    }
  
    const resetCounter = () => {
      setCount(0)
    }
  return (
    <div>
         <div className='counter'>
          <div className='count-box' onClick={tasbeehCount}>
            {count}
          </div>
          <button onClick={resetCounter} disabled={count === 0}>Reset</button>
        </div>
    </div>
  )
}

export default Counter