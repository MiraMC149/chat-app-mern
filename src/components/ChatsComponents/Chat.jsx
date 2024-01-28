import React, { useState, useEffect, useRef } from "react";
import {
  PhoneIcon,
  FaceSmileIcon,
  PaperClipIcon,
  DocumentIcon,
  PhotoIcon,
  VideoCameraIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import NoImage from "../../assets/Images/NoImage.jpg";
import { motion } from "framer-motion";
import user from "../../userData";
import chats from "../../Chats";
import axios from "axios";
export default function Chat({ activeChat }) {
  const onImageError = (e) => {
    e.target.src = { NoImage };
  };
  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const [message, setMessage] = useState({});
  const [chatMessages, setChatMessages] = useState([]);
  const fileInputRef = useRef(null); //Ref for input files
  const attachmentMenuRef = useRef(null); //Ref for attachment menu
  useEffect(() => {
    let arr = chats.filter(
      (chat) =>
        chat.SenderId === user?.UserId && chat?.ReceiverId === activeChat?.id
    );
    setChatMessages(arr);
  }, [activeChat]);
  const handleAttachment = () => {
    fileInputRef.current.click();
    if (fileInputRef.current.files) {
      let files = Array.from(fileInputRef.current.files);
      if (files?.length === 1) {
        //save file to public/uploads/
        if (
          files[0]?.name?.toLowerCase()?.endsWith(".png") ||
          files[0]?.name?.toLowerCase()?.endsWith(".jpg") ||
          files[0]?.name?.toLowerCase()?.endsWith(".jpeg") ||
          files[0]?.name?.toLowerCase()?.endsWith(".gif")
        ) {
          setMessage({ ...message, attachment: files[0]?.name.toString() });
          handleSend(files[0]);
        } else if (
          files[0]?.name?.toLowerCase()?.endsWith(".mp4") ||
          files[0]?.name?.toLowerCase()?.endsWith(".mpeg") ||
          files[0]?.name?.toLowerCase()?.endsWith(".quicktime")
        ) {
          setMessage({ ...message, attachment: files[0]?.name.toString() });
          handleSend(files[0]);
        } else {
          setMessage({ ...message, attachment: files[0]?.name.toString() });
          handleSend(files[0]);
        }
      } else {
        files?.map((file) => {
          //save files to public/uploads/
          if (
            file?.name?.toLowerCase()?.endsWith(".png") ||
            file?.name?.toLowerCase()?.endsWith(".jpg") ||
            file?.name?.toLowerCase()?.endsWith(".jpeg") ||
            file?.name?.toLowerCase()?.endsWith(".gif")
          ) {
            setMessage({ ...message, attachment: file?.name.toString() });
            handleSend(file);
          } else if (
            file?.name?.toLowerCase()?.endsWith(".mp4") ||
            file?.name?.toLowerCase()?.endsWith(".mpeg") ||
            file?.name?.toLowerCase()?.endsWith(".quicktime")
          ) {
            setMessage({ ...message, attachment: file?.name.toString() });
            handleSend(file);
          } else {
            setMessage({ ...message, attachment: file?.name.toString() });
            handleSend(file);
          }
        });
      }
    }
  };
  const handleSend = (file) => {
    if (message?.message?.trim() !== "") {
      if (message?.attachment !== null) {
        let formData = file;
        console.log(formData);
        axios
          .post("http://localhost:5000/api/uploadfile", formData, {
            headers: {
              'Content-Type': 'multipart/form-data' // Set the Content-Type header
            }})
          .then((response) => {
            console.log("File uploaded successfully");
            // Add the message to the chatMessages array
            setChatMessages([...chatMessages, message]);
            chats.push(message);
            // Clear the message input
            document.getElementById("textInput").value = "";
            setMessage({});
          })
          .catch((error) => {
            console.error("Error uploading file", error);
          });
      }else{
        console.log('mes',message)
        // Add the message to the chatMessages array
        setChatMessages([...chatMessages, message]);
        chats.push(message);
      }
     
    } else if (message?.attachment !== null) {
      let formData = file;
      axios
        .post("/api/uploadfile", formData, {
          headers: {
            'Content-Type': 'multipart/form-data' // Set the Content-Type header
          }})
        .then((response) => {
          console.log("File uploaded successfully");
          // Continue with further handling or display a success message
        })
        .catch((error) => {
          console.error("Error uploading file", error);
          // Handle the error or display an error message
        });
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log(message)
      handleSend();
    }
  };
  const handleMenuClick = (event) => {
    event.stopPropagation();
    setShowAttachMenu(!showAttachMenu);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (attachmentMenuRef.current && !attachmentMenuRef.current.contains(event.target)) {
        setShowAttachMenu(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  
  return (
    <div className="bg-white w-full h-full relative rounded-tr-lg rounded-br-lg border-l-2 border-l-gray-200">
      <div className="w-full h-[15%] border-b-2 border-b-gray-200 relative">
        <div className="w-full px-4 items-center py-4 flex">
          <img
            src={activeChat?.pp ? activeChat.pp : NoImage}
            className="w-8 h-8 border-2 border-gray-100 rounded-full mr-2"
            onError={onImageError}
          />
          <div className="flex flex-col justify-center py-5 h-12 text-left">
            <span>{activeChat?.GroupName}</span>
            <span className="text-[8px] text-gray-400 -mt-1 ml-0.5">
              {activeChat?.Members?.length} members
            </span>
          </div>
        </div>

        <div className="absolute flex right-5 top-7">
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
            <span className="mb-2">...</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-h-[30.7rem] overflow-y-scroll">
        {chatMessages.map((msg, index) => (
          <div
            key={msg.SenderId}
            className={`flex ${
              msg.SenderId === user?.UserId
                ? "items-end self-end"
                : "items-start self-start"
            } max-w-[45%]`}
          >
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: msg.SenderId === user?.UserId ? 50 : -50,
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: msg.SenderId === user?.UserId ? 50 : -50 }}
              style={{
                backgroundColor:
                  msg.SenderId === user?.UserId ? "#DCF8C6" : "#ECE5DD",
                padding: "8px",
                margin: "8px",
                borderRadius: "8px",
              }}
            >
              {typeof msg?.attachment === "string" ? (
                msg?.attachment?.toLowerCase()?.endsWith(".png") ||
                msg?.attachment?.toLowerCase()?.endsWith(".jpg") ||
                msg?.attachment?.toLowerCase()?.endsWith(".jpeg") ||
                msg?.attachment?.toLowerCase()?.endsWith(".gif") ? (
                  <img src={msg?.attachment} alt="Attachment" />
                ) : msg?.attachment?.toLowerCase()?.endsWith(".mp4") ||
                  msg?.attachment?.toLowerCase()?.endsWith(".mpeg") ||
                  msg?.attachment?.toLowerCase()?.endsWith(".quicktime") ? (
                  <video src={msg.attachment} controls />
                ) : (
                  <div className="flex">
                    <DocumentIcon className="w-4 h-4 mr-2" />
                    <span>{msg.attachment}</span>
                  </div>
                )
              ) : null}
              {msg?.message ? msg?.message : ''}
            </motion.div>
          </div>
        ))}
      </div>
      <div className="absolute flex bottom-0 w-full border-t-2 border-t-gray-200 items-center h-[10%] px-4">
        <FaceSmileIcon className="w-6 h-6 text-purple-200 hover:text-purple-400 mr-4" />
        <input
          type="text"
          id="textInput"
          placeholder="Type your message..."
          value={message != {} ? message?.message : message?.attachment ? message?.attachment : ""}
          onChange={(e) =>
            setMessage({
              SenderId: user?.UserId,
              message: e.target.value,
              ReceiverId: activeChat?.id,
              attachment: null,
            })
          }
          onKeyDown={handleKeyDown}
          className="placeholder-gray-200 text-gray-400 w-[88%] py-2 px-3 focus:outline-none rounded focus:ring-1 focus:ring-purple-200"
        />
        <div className="absolute right-0 flex">
          <PaperAirplaneIcon
            className="w-6 h-6 text-purple-200 hover:text-purple-400 mr-4"
            onClick={() => handleSend()}
          />
          <PaperClipIcon
            className="w-6 h-6 text-purple-200 hover:text-purple-400 mr-4 transform -rotate-45"
            onClick={(e) => handleMenuClick(e)}
          />
        </div>
        <ul
          ref={attachmentMenuRef}
          className={`${
            showAttachMenu ? "block" : "hidden"
          } absolute right-5 bottom-12 rounded-md bg-slate-50 text-gray-400 border-2 border-purple-200 items-center`}
        >
          <li
            className="p-2 flex items-center pr-4 text-purple-400 hover:bg-purple-100 hover:cursor-pointer hover:text-purple-600"
            onClick={() => handleAttachment()}
          >
            <DocumentIcon className="w-4 h-4 mr-2" />
            <span>Document</span>
            <input
              type="file"
              ref={fileInputRef} // Reference to file input element
              style={{ display: "none" }}
              onChange={handleAttachment} // Handle selected files
              multiple // Allow multiple file selection
            />
          </li>
          <li
            className="p-2 flex items-center text-purple-400 hover:bg-purple-100 hover:cursor-pointer hover:text-purple-600"
            onClick={() => handleAttachment()}
          >
            <PhotoIcon className="w-4 h-4 mr-2" />
            <span>Image</span>
            <input
              type="file"
              ref={fileInputRef} // Reference to file input element
              style={{ display: "none" }}
              onChange={handleAttachment} // Handle selected files
              multiple // Allow multiple file selection
              accept="image/*" // Accept images
            />
          </li>
          <li
            className="p-2 flex items-center text-purple-400 hover:bg-purple-100 hover:cursor-pointer hover:text-purple-600"
            onClick={() => handleAttachment()}
          >
            <VideoCameraIcon className="w-4 h-4 mr-2" />
            <span>Video</span>
            <input
              type="file"
              ref={fileInputRef} // Reference to file input element
              style={{ display: "none" }}
              onChange={handleAttachment} // Handle selected files
              multiple // Allow multiple file selection
              accept="video/*" // Accept videos under 16mb
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
