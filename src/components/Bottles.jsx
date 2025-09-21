import React, { use, useEffect, useState } from 'react'
import Bottle from './Bottle';
import { addToStoredCart, getStoreCart, removeFromCart } from '../utilies/localstorage';
import Cart from './Cart';

const Bottles = ({bottlesPromise}) => {
    const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise);

    useEffect(()=>{
        const storedCartIds = getStoreCart();
        // console.log(storedCartIds, bottles);


        const storedCart = [];
        for(const id of storedCartIds){
            // console.log(id);
            const cartBottle = bottles.find(bottle=> bottle.id === id);
            if(cartBottle){
                storedCart.push(cartBottle);
            }
        }
       console.log('stored cart', storedCart);
       setCart(storedCart);
       

    }, [bottles])

     const handleAddToCart = (bottle) =>{
        // console.log('bottle will be added to the cart', bottle)

        const newCart = [...cart, bottle];
        setCart(newCart);

        addToStoredCart(bottle.id);
     }

    // console.log(bottles);

    const handleRemoveFromCart = id =>{
        console.log('remove item from the cart', id);

        const remainingCart = cart.filter(bottle=> bottle.id !== id);
        setCart(remainingCart);
        removeFromCart(id);
    }

    
  return (
    <div>
      <div className='container mx-auto'>
           <h1 className='text-4xl font-bold text-green-700 text-center  text-shadow-2xs mt-10'>Buy Awesome Water Bottle</h1>

           <hr className='mt-4' />
          <h1 className='text-2xl font-bold mt-5 p-3 md:p-0'>Bottles: {bottles.length}</h1>
          <h3 className='mt-2 p-3 md:p-0'>Add to cart: {cart.length}</h3>
          <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
         {
            bottles.map(bottle => <Bottle 
                key={bottle.id}
                 handleAddToCart={ handleAddToCart}
                bottle={bottle}></Bottle>)
        }
       </div>
      </div>
    </div>
  )
}

export default Bottles