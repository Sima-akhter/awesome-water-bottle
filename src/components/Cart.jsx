import Bottle from "./Bottle"


const Cart = ({cart, handleRemoveFromCart}) => {
  return (
    <div>
     <div className="flex gap-5 p-5">
        {
        cart.map(bottle=> <div className=" space-y-2" key={bottle.id}>
        <div className="w-[150px]">
             <img src={bottle.img} alt="" /> 
        </div>
        <h1>Price: ${bottle.price}</h1>
         <button onClick={()=> handleRemoveFromCart(bottle.id)} className="bg-green-700 py-1 px-2 text-white rounded-md hover:bg-green-500">x</button>  
        </div>)
     }
     </div>

    </div>
  )
}

export default Cart