import React from 'react'
import Sidebar from '../component/Sidebar'
import { FaSlack } from 'react-icons/fa';

function ShowHide() {
    const hide = () => {
        document.getElementById("myDiv").hidden = true;
     }
     
     const show = () => {
        document.getElementById("myDiv").hidden = false;
     }
    return (
        <div className='showhide'>
            <Sidebar />
            <div>3.ShowHide</div>

            <div id="myDiv"> Click the button to hide or show this div.</div>
            <button onClick={() => hide()} style={{width: '100px',margin: '10px'}}> Hide Element </button>
            <button onclick={() => show()} style={{width: '100px',margin: '10px'}}> Show Element </button>
        </div>
    )
}

export default ShowHide