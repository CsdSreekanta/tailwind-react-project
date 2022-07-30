import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption = ({option}) => {
    const {name , price, benefits} =option
    return (
        <div className='bg-white rounded p-4'>
            <h1 className='text-2xl font-mono font-bold bg-indigo-200 p-4 rounded-lg'>{name}</h1>
            <span className="text-5xl font-bold ">{price}</span>
            <span className="text-gray-500 font-bold text-2xl">/mo</span>
            <div>
                <h1 className='text-left font-bold text-xl'>Benefits:</h1>
              {
                benefits.map(benefit=> <Benefit benefit={benefit}></Benefit>)
              }
             
            </div>
          
        </div>
    );
};

export default PricingOption;
