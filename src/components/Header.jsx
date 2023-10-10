import { signOut } from "firebase/auth"
import { SlOptionsVertical } from "react-icons/sl"
import { auth } from "../Firebase"
import { useState } from "react"

const Header = () => {
  const [showOptions, setShowOptions] = useState(false)

  return (
    <header className="bg-blue-500 shadow text-white capitalize flex items-center px-5 py-3 justify-between">
      <img src="./images/chat.png" alt="" className="h-10" />
      <h1 className="font-semibold ">kobby&apos;s chatroom</h1>
      <SlOptionsVertical
        onClick={() => {
          setShowOptions(!showOptions)
        }}
        className="cursor-pointer"
      />
      {showOptions && (
        <div
          className="absolute right-3 top-10 shadow rounded px-5 py-2 cursor-pointer bg-blue-500"
          onClick={() => {
            signOut(auth)
          }}
        >
          Logout
        </div>
      )}
    </header>
  )
}

export default Header
