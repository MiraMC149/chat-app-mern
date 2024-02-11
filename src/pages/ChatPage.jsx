import React, {useState, useEffect, useRef} from 'react';
import Navbar from '../components/Navbar';
import Chat from '../components/ChatsComponents/Chat.jsx';
import ChatsList from '../components/ChatsComponents/ChatsList.jsx';
import groups from "../data.js";
import MobileNavbar from '../components/MobileNavbar.jsx';
import { CSSTransition } from 'react-transition-group';
export default function ChatPage({isAuthenticated, setIsAuthenticated}) {
  const [activeChat, setActiveChat] = useState(groups[0]);
  const mobileMenuRef = useRef(null);
  const [mobilePhoneOpen, setMobilePhoneOpen] = useState(false);
 
  return (
    <div className='flex relative w-full h-full bg-gray-100'>
        <div className='w-[7%] hidden lg:block h-full'>
            <Navbar groups={groups} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} setActiveChat={setActiveChat}/>
        </div>
        {mobilePhoneOpen && <CSSTransition nodeRef={mobileMenuRef} in={mobilePhoneOpen} timeout={300} classNames="">
            <MobileNavbar mobilePhoneOpen={mobilePhoneOpen} setMobilePhoneOpen={setMobilePhoneOpen}/>
        </CSSTransition>}
        <div className='w-full flex border-1 lg:w-[90%] lg:py-4'>
            <div className='w-[25%] hidden lg:block bg-white border-l-1 border-l-gray-400'>
              <ChatsList groups={groups} activeChat={activeChat} setActiveChat={setActiveChat} />
            </div>
            <Chat groups={groups} mobilePhoneOpen={mobilePhoneOpen} setMobilePhoneOpen={setMobilePhoneOpen} activeChat={activeChat} />
        </div>
    </div>
  );
}
