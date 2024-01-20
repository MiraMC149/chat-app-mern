import React, {useState, useEffect} from 'react';
import { PhoneIcon } from "@heroicons/react/24/solid";
import NoImage from "../assets/Images/NoImage.jpg";
export default function Chat({groups}) {
    const onImageError = (e) => {
        e.target.src = {NoImage}
      }
  return (
    <div className='bg-white w-full h-full rounded-lg'>
        <div className='w-full h-[15%] border-b-2 border-b-gray-200 relative'>
            <div className='w-full px-4 items-center py-4 flex'>
                <img src={groups[0].pp ? groups[0].pp : NoImage} className='w-8 h-8 border-2 border-gray-100 rounded-full mr-2' onError={onImageError}/>
                <div className='flex flex-col justify-center py-5 h-12 text-left'>
                    <span>{groups[0]?.GroupName}</span>
                    <span className='text-[8px] text-gray-400 -mt-1 ml-0.5'>{groups[0]?.Members.length} members</span>
                </div>
            </div>

            <div className='absolute flex right-5 top-7'>
            <div
            className="rounded-full bg-gray-100 w-8 h-8 p-2 mx-2 text-purple-500 hover:bg-purple-100 hover:text-white hover:cursor-pointer"
            as="button"
            onClick={() => console.log("clicked")}
          >
            <PhoneIcon />
          </div>
          <div
            className="rounded-full flex flex-col text-center items-center justify-center bg-gray-100 w-8 h-8 p-2 text-purple-500 hover:bg-purple-100 hover:text-white hover:cursor-pointer"
            as="button"
            onClick={() => console.log("clicked")}
          >
            <span className='mb-2'>...</span>
          </div>
            </div>
        </div>
    </div>
  );
}
