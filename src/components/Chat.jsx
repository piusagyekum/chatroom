import { useState } from "react"
import Messages from "./Messages"
import SendMessage from "./SendMessage"
import { auth } from "../Firebase"
import Header from "./Header"

const Chat = () => {
  return (
    <div className="min-h-[100vh] bg-gray-200 shadow  flex flex-col justify-center items-center">
      <div className="bg-white relative w-full max-w-md max-h-[600px] flex-1 rounded flex flex-col shadow ">
        <Header/>
        <Messages />
        <SendMessage />
      </div>
    </div>
  )
}

export default Chat
