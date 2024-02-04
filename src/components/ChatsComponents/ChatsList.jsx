import React, {useState, useEffect} from 'react';
import { MagnifyingGlassIcon, ArchiveBoxArrowDownIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import NoImage from "../../assets/Images/NoImage.jpg";
export default function ChatsList({groups, activeChat, setActiveChat}) {
    const onImageError = (e) => {
        e.target.src = {NoImage}
      }
  return (
    <div className='w-full h-full p-4 text-sm'>
        <span className='text-lg text-gray-600 font-semibold'>Chats</span>
        <div className='flex relative my-4'>
            <MagnifyingGlassIcon className='text-gray-300 w-4 h-4 absolute top-1.5 left-1'/>
            <input type="text" placeholder='Search ...' className='rounded-md ring-1 ring-gray-200 placeholder-gray-300 p-1 pl-6 focus:outline-0 focus:ring-indigo-500 hover:ring-indigo-200 hover:shadow-md'/>
        </div>
        <div className='flex flex-col'>
            <div className='text-gray-300 flex items-center py-3 border-b-2 border-b-gray-100'>
                <ArchiveBoxArrowDownIcon className='w-5 h-4 mr-2'/>
                <span>Archived</span>
            </div>
            <div className="flex flex-col">
        <span className="text-gray-400 text-xs my-2">Pinned</span>
        <ul className="flex flex-col gap-y-2">
          {groups?.slice(3)?.map((group) => (
            <li key={group.id} className={`${activeChat.id === group.id ? 'bg-indigo-300 hover:bg-indigo-400' : 'hover:bg-indigo-100'} flex relative rounded-md p-2`} onClick={()=>setActiveChat(group)}>
            <div className='relative'>
            <img
              className="w-10 h-10 border-2 border-gray-200 rounded-full"
              src={group.pp ? group.pp : NoImage}
              alt={group.GroupName}
              id={group.id}
              onError={onImageError}
            />
             <div className={` ${activeChat.id === group.id ? 'border-2 border-white' : '' } absolute right-[2px] bottom-0 bg-green-600 w-[0.6rem] h-[0.6rem] rounded-full`}></div>
            </div>
                <div className='flex flex-col relative w-[80%] text-xs overflow-hidden justify-center ml-1.5'>
                    <span>{group.GroupName}</span>
                    <p className='text-[10px] truncate'>last msg +fvhjjkkkjgbhnjkgfgvhhhhhhhhjjnkkbnjkmghh {group.GroupName}</p>
                </div>
                <span className='absolute text-[11px] right-3'>09:10 PM</span>
            </li>
          ))}
        </ul>
      </div>
        </div>
        <div className='flex flex-col'>
            <div className='text-gray-300 flex items-center py-3 border-b-2 border-b-gray-100'>
                <ChatBubbleLeftRightIcon className='w-5 h-4 mr-2'/>
                <span>All Chats</span>
            </div>
            <div className="flex flex-col">
        <ul className="flex flex-col max-h-[14rem] py-2 overflow-y-scroll gap-y-2">
          {groups?.map((group) => (
            <li key={group.id} className={`${activeChat?.id === group?.id ? 'bg-indigo-300 hover:bg-indigo-400' : 'hover:bg-indigo-100'} flex relative rounded-md p-2`} onClick={()=>setActiveChat(group)}>
            <div className='relative'>
            <img
              className="w-10 h-10 border-2 border-gray-200 rounded-full"
              src={group.pp ? group.pp : NoImage}
              alt={group?.GroupName}
              id={group.id}
              onError={onImageError}
            />
            <div className={` ${activeChat?.id === group?.id ? 'border-2 border-white' : '' } absolute right-[2px] bottom-0 bg-green-600 w-[0.6rem] h-[0.6rem] rounded-full`}></div>
            </div>
                <div className='flex flex-col relative w-[80%] text-xs overflow-hidden justify-center ml-1.5'>
                    <span>{group?.GroupName}</span>
                    <p className='text-[10px] truncate'>last msg +fvhjjkkkjgbhnjkgfgvhhhhhhhhjjnkkbnjkmghh {group.GroupName}</p>
                </div>
                <span className='absolute text-[11px] right-3'>09:10 PM</span>
            </li>
          ))}
        </ul>
      </div>
        </div>
    </div>
  );
}
