import { useState } from "react"
import Login from "./components/Login"
import { signOut } from "firebase/auth"
import { auth } from "./Firebase"
import { useAuthContext } from "./context/AuthContext"
import Chat from "./components/Chat"

function App() {
  const { user } = useAuthContext()
  return <>{!user ? <Login /> : <Chat />}</>
}

export default App
