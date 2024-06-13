import React from 'react';

function Card(props) {

  return (
    <div className='text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 h-5'>

      {props.data.map((item ,index)=>{
        return (
          <div key={index} className='w-72 bg-white p-3 rounded-md border-2 shadow-md shadow-orange-600'>
          <h5 className='text-2xl text-orange-500 font-bold'>{item.title}</h5>
          <p className='text-gray-500 font-normal'>{item.description}</p>
        </div>
      
        )
      })}
    </div>
  );
}

export default Card;
