import { onAuthStateChanged } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../Firebase"

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user") ?? null)

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      localStorage.removeItem("user")
      setUser(null)
    } else {
      localStorage.setItem("user", user)
      setUser(user)
    }
  })
  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) return "useAuthContext must be called within the authcontext provider"
  return context
}
