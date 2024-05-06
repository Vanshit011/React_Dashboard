import React, {useState} from 'react'
import Sidebar from '../component/Sidebar'

function Increment() {
    const [count, setCount] = useState(0);

    return (
        <div className='increment'>
            <Sidebar />
            <div>5.Increment</div>
            <div>
                increment and decrement
            </div>

            <button onClick={() => setCount(count - 1)} style={{width: '100px',margin: '10px'}}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)} style={{width: '100px',margin: '10px'}}>+</button>

        </div>
    )
}

export default Increment