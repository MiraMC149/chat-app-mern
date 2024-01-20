import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Chat from '../components/Chat';
import groups from "../data.js";
export default function ChatPage() {
  return (
    <div className='flex w-full h-full bg-gray-100'>
        <div className='w-[7%] h-full'>
            <Navbar groups={groups}/>
        </div>
        <div className='w-[90%] border-1 py-4'>
            <Chat groups={groups}/>
        </div>
    </div>
  );
}
