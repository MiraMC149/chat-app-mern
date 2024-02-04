import React from 'react';
import { PaperAirplaneIcon, ArchiveBoxIcon, PaperClipIcon, ChatBubbleOvalLeftIcon, CursorArrowRaysIcon, UserIcon, UserGroupIcon, FaceSmileIcon } from '@heroicons/react/24/solid';

export default function LoginPageBackground() {
  return (
    <div className='w-full h-full overflow-hidden'>
      <div className='grid grid-cols-6 gap-y-28 p-10'>
        {Array.from({ length: 10 }, (_, index) => (
          <React.Fragment key={index}>
            <PaperAirplaneIcon className='w-6 h-6 text-white' />
            <ArchiveBoxIcon className='w-6 h-6 text-white' />
            <PaperClipIcon className='w-6 h-6 text-white' />
            <ChatBubbleOvalLeftIcon className='w-6 h-6 text-white' />
            <CursorArrowRaysIcon className='w-6 h-6 text-white' />
            <UserIcon className='w-6 h-6 text-white' />
            <UserGroupIcon className='w-6 h-6 text-white' />
            <FaceSmileIcon className='w-6 h-6 text-white' />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}