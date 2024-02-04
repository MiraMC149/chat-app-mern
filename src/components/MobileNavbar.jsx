import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
export default function MobileNavbar({ mobilePhoneOpen, setMobilePhoneOpen }) {
  return (
    <div className='w-40 absolute left-0 z-10 h-full bg-gray-800 p-4'>
        <Bars3Icon className="w-8 h-4 text-white mr-3 lg:hidden" onClick={()=>setMobilePhoneOpen(!mobilePhoneOpen)}/>
    </div>
  );
}
