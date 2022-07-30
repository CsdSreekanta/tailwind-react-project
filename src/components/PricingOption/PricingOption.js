import React from 'react';

const PricingOption = ({option}) => {
    const {name , price} =option
    return (
        <div className='bg-white rounded p-4'>
            <h1 className='text-2xl font-mono font-bold bg-indigo-200 p-4 rounded-lg'>{name}</h1>
            <p className="text-5xl font-bold ">{price}</p>
        </div>
    );
};

export default PricingOption;
