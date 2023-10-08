import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { db } from "../Firebase"
import { format } from "date-fns"
import { useAuthContext } from "../context/AuthContext"

const Messages = () => {
  const { user } = useAuthContext()
  const [messages, setMessages] = useState([])

  const q = query(collection(db, "messages"), orderBy("time"))
  useEffect(() => {
    const unsub = onSnapshot(q, (snapshot) => {
      let messages = []
      snapshot.docs.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id })
      })
      setMessages(messages)
    })
    return () => {
      unsub()
    }
  }, [])
  const messagesRef = useRef()

  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight
  }, [messages])

  // console.log("🚀 ~ file: Messages.jsx:23 ~ Messages ~ date:", date)
  const mssgStyle = {
    send: `ml-auto mr-2 bg-blue-500 rounded-t-xl rounded-bl-xl mb-5 w-fit max-w-[300px] px-2 py-1 text-white first:mt-4`,
    received: `mr-auto ml-2 bg-gray-200 rounded-b-xl rounded-tr-xl mb-5 w-fit max-w-[300px] px-2 py-1 `,
    time: "mr-auto",
  }
  return (
    <div ref={messagesRef} id="messagesRef" className="messages flex-1 overflow-y-scroll overflow-x-hidden">
      {messages &&
        messages.map((message) => (
          <div key={message.id} className={`flex items-start first:mt-4`}>
            <img
              src="./images/avatar.png"
              alt="pic"
              width={25}
              className={`object-contain object-center ${message.uid === user.uid ? "order-last" : "order-first"}`}
            />
            <div className={mssgStyle[message.uid === user.uid ? "send" : "received"]}>
              {message.uid !== user.uid && <p className="text-sm font-bold text-blue-500">{message?.displayName}</p>}
              <p>{message.message}</p>
              <p className="font-thin text-[0.6rem] w-fit ml-auto mr-2">
                {message?.time?.toDate() ? format(message?.time?.toDate(), "p") : format(new Date(), "p")}
              </p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Messages
