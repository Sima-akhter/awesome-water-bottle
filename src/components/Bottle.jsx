

const Bottle = ({bottle}) => {

    const {img, name, stock, price} = bottle
        console.log(bottle);
    
  return (
    <div className=" border-2 shadow-2xl rounded-md  flex flex-col justify-center items-center p-5">
       <div className="w-[250px]  shadow-lg">
         <img className="rounded-md" src={img} alt="" />
       </div>
       <div className="py-5">
         <h1 className="font-bold">Name: {name}</h1>
         <h2><span className="font-bold">Price:</span> {price}</h2>
         <h3><span className="font-bold">Stock:</span> {stock}</h3>
       </div>
    </div>
  )
}

export default Bottle