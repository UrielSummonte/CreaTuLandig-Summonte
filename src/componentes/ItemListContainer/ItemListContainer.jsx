import React from 'react'

const ItemListContainer = ( {greeting} ) => {
  return (
    <div className='h-[85vh] w-[100vw] bg-slate-500 flex items-center justify-center mx-auto text-3xl'> 
        {greeting} 
    </div>
  )
}

export default ItemListContainer