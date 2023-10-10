import { useState } from "react"
import Messages from "./Messages"
import SendMessage from "./SendMessage"
import { auth } from "../Firebase"
import Header from "./Header"

const Chat = () => {
  return (
    <div className="bg-gray-200 shadow  flex flex-col justify-center items-center">
      <div className="bg-gray-50 relative w-full max-w-4xl  flex flex-col shadow h-screen">
        <Header/>
        <Messages />
        <SendMessage />
      </div>
    </div>
  )
}

export default Chat
