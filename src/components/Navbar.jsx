import React from "react";
// import people from '../data.js';
import { PlusIcon, UserGroupIcon, ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";
import NoImage from "../assets/Images/NoImage.jpg";
import { useNavigate } from 'react-router-dom';
const onImageError = (e) => {
  e.target.src = {NoImage}
}
export default function Navbar({ groups, setIsAuthenticated, setActiveChat }) {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    setIsAuthenticated(false);
    navigate('/');
  }
  return (
    <div className="flex flex-col items-center relative w-full h-full px-4 py-7">
      <div className="flex flex-col items-center w-full">
        <span className="text-gray-400 text-xs my-2">Groups</span>
        <ul className="flex flex-col gap-y-2 items-center">
          <li
            className="rounded-full bg-white w-[92%] h-8 p-2 mb-2 text-indigo-500 hover:bg-indigo-100 hover:text-white hover:cursor-pointer"
            as="button"
            onClick={() => console.log("clicked")}
          >
            <PlusIcon />
          </li>
          {groups?.slice(3)?.map((group) => (
            <li key={group.id} onClick={()=>setActiveChat(group)} className="hover:cursor-pointer">
            <img
              className="h-9 rounded-full mb-2"
              src={group.pp ? group.pp : NoImage}
              alt={group.GroupName}
              id={group.id}
              onError={onImageError}
            />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center my-2">
        <span className="text-gray-400 text-xs my-2">People</span>
        <ul className="flex flex-col w-full gap-y-2 items-center">
          <li
            className="rounded-full bg-white w-[90%] h-8 p-2 mb-2 text-indigo-500 hover:bg-indigo-100 hover:text-white hover:cursor-pointer"
            as="button"
            onClick={() => console.log("clicked")}
          >
            <PlusIcon />
          </li>
          {groups?.slice(3)?.map((group) => (
            <li key={group.id} onClick={()=>setActiveChat(group)} className="hover:cursor-pointer">
            <img
              className="h-9 rounded-full mb-2"
              src={group.pp ? group.pp : NoImage}
              alt={group.GroupName}
              id={group.id}
              onError={onImageError}
            />
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute bottom-10 flex flex-col items-center w-full justify-center">
        <div
            className="rounded-full bg-white w-[34%] h-9 p-2 mb-4 text-indigo-600 hover:bg-indigo-100 hover:text-white hover:cursor-pointer"
            as="button"
            onClick={() => console.log("support")}
          >
            <UserGroupIcon />
        </div>
        <div
            className="rounded-full bg-white w-[34%] h-9 p-2 text-indigo-600 hover:bg-indigo-100 hover:text-white hover:cursor-pointer"
            as="button"
            onClick={() => handleLogout()}
          >
            <ArrowLeftStartOnRectangleIcon />
        </div>
      </div>
    </div>
  );
}
