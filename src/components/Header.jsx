import { signOut } from "firebase/auth"
import { SlOptionsVertical } from "react-icons/sl"
import { auth } from "../Firebase"
import { useState } from "react"

const Header = () => {
  const [showOptions, setShowOptions] = useState(false)

  return (
    <header className="bg-blue-700 text-white capitalize flex items-center px-5 py-3 justify-between rounded-t-md">
      <span>kobby&apos;s chatroom</span>
      <SlOptionsVertical
        onClick={() => {
          setShowOptions(!showOptions)
        }}
        className="cursor-pointer"
      />
      {showOptions && (
        <div
          className="absolute right-3 top-10 border rounded px-5 py-2 cursor-pointer bg-blue-500"
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
