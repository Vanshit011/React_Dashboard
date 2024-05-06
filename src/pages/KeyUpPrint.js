import React from 'react'
import Sidebar from '../component/Sidebar'

function KeyUpPrint() {

    const setValue = () => {
        var num = document.getElementById("inputNum").value;
        document.getElementById('numbers').innerHTML = num;
    }
    return (

        <div className='keyupprint'>
            <Sidebar />
            <div>2.KeyUpPrint</div>
            <input type="text" id="inputNum" onkeyup="setValue" />
            <div id="numbers">
            </div>
        </div>

    )
}

export default KeyUpPrint