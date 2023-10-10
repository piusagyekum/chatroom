import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useState } from "react"
import { IoMdSend } from "react-icons/io"
import { db } from "../Firebase"
import { useAuthContext } from "../context/AuthContext"

const SendMessage = () => {
  const { user } = useAuthContext()
  const [message, setMessage] = useState("")

  const handleSend = () => {
    console.log("🚀 ~ file: SendMessage.jsx:9 ~ SendMessage ~ user:", user)
    if (!message) return
    setMessage("")
    addDoc(collection(db, "messages"), {
      message,
      uid: user.uid,
      displayName: user.displayName ?? user.email,
      email: user.email,
      time: serverTimestamp(),
    }).catch((err) => {
      console.log("🚀 ~ file: SendMessage.jsx:19 ~ handleSend ~ err:", err)
    })
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleSend()
      }}
      className=""
    >
      <div className="flex items-center  py-2 px-5 gap-5">
        <label htmlFor="message" className="hidden"></label>
        <input
          id="message"
          type="text"
          placeholder="Type a message"
          className="flex-1 bg-gray-200 rounded-full h-10 outline-0 px-4"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
          }}
          autoFocus
        />
        <IoMdSend size={30} className="text-blue-600 cursor" onClick={handleSend} type="submit" />
      </div>
    </form>
  )
}

export default SendMessage
