import React from 'react'
import Sidebar from '../component/Sidebar'

function PriceQty() {

    const calculateResult = () => {
        var price = document.getElementById("price").value;
        var qty = document.getElementById("qty").value;
        document.getElementById("result").innerHTML = price * qty;
      }
  return (
    <div className='priceqty'>
<Sidebar />
    
    <div>4.PriceQty</div>
    <form>
        <label for="price">Price:</label>
        <input type="text" id="price" />
        

        <label for="qty">Qty:</label>
        <input type="text" id="qty" onkeyup={() => calculateResult()} />
    
       
        <div  id="result" onkeyup={() => calculateResult()} ></div>
      </form>
    </div>
  )
}

export default PriceQty