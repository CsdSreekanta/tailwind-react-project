
import Link from '../Link/Link';
import { useState } from 'react';

import { MenuIcon, XIcon } from '@heroicons/react/solid'


const Navbar = () => {
   const [open, setOpen] =useState(false)
    
  const routes=[
    {id:1, name: "Home", link:'/home'},
    {id:2, name: "Deals", link:'/Deals'},
    {id:3, name: "Coupons", link:'/Coupons'},
    {id:4, name: "Contact", link:'/Contact'},
  ]
    return (
        <nav className='bg-indigo-200'>
            <div onClick={() =>setOpen(!open)} className='w-6 h-6 md:hidden'>
          {open? <XIcon></XIcon>: <MenuIcon></MenuIcon>}
            </div>
          <ul className={`md:flex justify-center  bg-indigo-200 w-full md:static absolute duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`} >
          {
                routes.map(route => <Link 
                key={route.id}
                route={route}
                ></Link>)
            }
          </ul>
            
        
            
        </nav>
    );
};

export default Navbar;