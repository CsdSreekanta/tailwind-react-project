import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions =[
        {id:1,  name: 'Free', price: 0, benefits:[
            'Six month excess Excess',
            'limited service',
            'Free call',
            'fantastic deals',
            'crazy deals',

        ]},
        {id:2,  name: 'Regular', price: 9.99, benefits:[
            'One year Excess',
            'unlimited service',
            'Free call audio call',
            'fantastic deals',
            'crazy deals',
            
        ]},
        {id:3,  name: 'Premium', price: 19.99, benefits:[
            'Lifetime Excess',
            'unlimited service',
            'Free message and video call ',
            'fantastic deals',
            'crazy deals',
            
        ]},
        
    ]
    return (
        <div className="bg-indigo-300  p-4">
            <h1 className='text-3xl font-bold mt-8'>Best Deals of the Town</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum est voluptate non, beatae provident tempore eaque nesciunt maiores accusantium at, minima labore ut ex quae nam, inventore vero harum commodi. Odio distinctio in ipsa id obcaecati fuga nam quas laborum a esse culpa, dicta ad? Accusantium dicta officiis deserunt obcaecati.</p>
          <div className="grid md:grid-cols-3 gap-3 ">
          {
                pricingOptions.map(option=> <PricingOption 
                key={option.id}
                option={option}
                ></PricingOption>)
            }
          </div>
        </div>
    );
};

export default Pricing;
