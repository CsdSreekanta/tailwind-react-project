import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const Benefit = ({benefit}) => {
    return (
        <div>
             <div className='flex items-center'>
               <CheckCircleIcon className='w-5 h-5 text-green-500 mr-2'></CheckCircleIcon>
                {benefit}
               
               </div>
        </div>
    );
};

export default Benefit;