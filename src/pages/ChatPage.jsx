import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Chat from '../components/ChatsComponents/Chat.jsx';
import ChatsList from '../components/ChatsComponents/ChatsList.jsx';
import groups from "../data.js";
export default function ChatPage() {
  const [activeChat, setActiveChat] = useState(groups[0]);
 
  return (
    <div className='flex w-full h-full bg-gray-100'>
        <div className='w-[7%] h-full'>
            <Navbar groups={groups} setActiveChat={setActiveChat}/>
        </div>
        <div className='w-[90%] border-1 py-4 flex'>
            <div className='w-[25%] bg-white border-l-1 border-l-gray-400'>
              <ChatsList groups={groups} activeChat={activeChat} setActiveChat={setActiveChat} />
            </div>
            <Chat groups={groups} activeChat={activeChat} />
        </div>
    </div>
  );
}
