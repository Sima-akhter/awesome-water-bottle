
const getCartFromLocalStorage = () =>{
    const storedCartString = localStorage.getItem('cart');

    if(storedCartString){
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}

const saveCartTOLocalStorage = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

const addItemToCartLocalStorage = id => {
    const cart = getCartFromLocalStorage();
   
    const newCart = [...cart, id];

    saveCartTOLocalStorage(newCart);
}

const removeFromLocalStorage = id =>{
    const storedCart = getCartFromLocalStorage();
    const remainingCart = storedCart.filter(storedId => storedId !== id);
    saveCartTOLocalStorage(remainingCart);
}

export {
    getCartFromLocalStorage as getStoreCart, 
    
    addItemToCartLocalStorage as addToStoredCart,
    removeFromLocalStorage as removeFromCart

}