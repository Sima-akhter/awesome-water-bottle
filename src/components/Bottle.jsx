

const Bottle = ({bottle,  handleAddToCart}) => {

    const {img, name, stock, price} = bottle
        // console.log(bottle,  handleAddToCart);
    
  return (
    <div className=" border-2 shadow-2xl rounded-md  flex flex-col justify-center items-center p-5">
       <div className="w-[250px]  shadow-lg">
         <img className="rounded-md" src={img} alt="" />
       </div>
       <div className="py-5">
         <h1 className="font-bold">Name: {name}</h1>
         <h2><span className="font-bold">Price:</span> ${price}</h2>
         <h3><span className="font-bold">Stock:</span> {stock}</h3>
         <button onClick={()=> handleAddToCart(bottle)} className="bg-green-700 text-white py-2 px-3 rounded-md hover:bg-green-500 mt-2">By Now</button>
       </div>
    </div>
  )
}

export default Bottle