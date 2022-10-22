import React from 'react'

const StatsCard = ({number,subtitle}) => {
  return (
    <div className='py-2'>
        <h3 className='font-bold text-xl '>{number}</h3>
        <p className='font-medium text-[#5B5B5B]'>{subtitle}</p>
    </div>
  )
}

export default StatsCard