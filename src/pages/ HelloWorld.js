import React from 'react'
import Sidebar from '../component/Sidebar'

function HelloWorld() {
    return (
        <div className='helloworld'>
            <Sidebar />
            <div style={{ color: 'black' }}>1. HELLO WORLD</div>
            <h3 style={{ color: 'green', textAlign: 'start' }}>Hello world left!</h3>
            <h4 style={{ color: 'red', textAlign: 'center' }}>Hello world center!</h4>
            <h5 style={{ color: 'blue', textAlign: 'end' }}>Hello world right!</h5>
        </div>
    )
}

export default HelloWorld