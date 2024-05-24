import React from 'react'

const CardAbout = ({img, posisi, nama}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='md:h-56 md:w-44 h-44 w-36 bg-gray-300 rounded-3xl p-2 '>
            <img src={img} alt="eror"  className='h-full w-full'/>
        </div>
        <div className='flex justify-center items-center py-3 px-5 flex-col bg-primary-0 rounded-full md:mt-2 mt-1 md:text-xl text-sm text-[#09006E] font-semibold'>
            <h1>{posisi}</h1>
            <h2>{nama}</h2>
        </div>
    </div>
  )
}

export default CardAbout