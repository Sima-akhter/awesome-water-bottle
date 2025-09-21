import React, { use } from 'react'
import Bottle from './Bottle';

const Bottles = ({bottlesPromise}) => {
    const bottles = use(bottlesPromise);
    console.log(bottles);
    
  return (
    <div>
      <div className='container mx-auto'>
          <h1 className='text-2xl font-bold p-5'>Bottles: {bottles.length}</h1>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
         {
            bottles.map(bottle => <Bottle 
                key={bottle.id}
                bottle={bottle}></Bottle>)
        }
       </div>
      </div>
    </div>
  )
}

export default Bottles