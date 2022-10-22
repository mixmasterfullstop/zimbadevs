import React from 'react'

const SkillsCard = ({title, desc,img}) => {
  return (
    <div className='mx-auto bg-white  shadow-lg w-2/3 '>
        <img src={img} alt={img} className='mx-auto py-4' />
        <h1 className='font-bold text-lg py-4 px-3'>{title}</h1>
        <p className='px-3 py-4'>{desc}</p>
    </div>
  )
}

export default SkillsCard