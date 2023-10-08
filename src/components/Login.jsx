import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
// import { signInWithEmailAndPassword } from "firebase/auth"
// import { auth } from "../firebase"
// import { useAuthContext } from "../context/AuthContext"
import { useState } from "react"
import { FcGoogle } from "react-icons/fc"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../Firebase"

const Login = () => {
  //   const { dispatch } = useAuthContext()
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: errors } = useForm()
  const [error, setError] = useState()

  const handleLogin = async (formData) => {
    console.log("🚀 ~ file: Login.jsx:18 ~ handleLogin ~ formData:", formData)
  }

  const handleLoginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.log("🚀 ~ file: Login.jsx:28 ~ handleLoginWithGoogle ~ error:", error)
    }
  }
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gray-200 gap-4">
      <h1 className="text-2xl font-semibold text-[var(--clr-accent)]">Log in to Kobby's Chatroom</h1>
      <div className="text-lg w-[396px] py-5 px-8 rounded-lg shadow-md bg-white">
        <form action="" noValidate onSubmit={handleSubmit(handleLogin)}>
          {error && <div className="leading-10 bg-red-100 text-red-500 px-3 border border-red-500 rounded mb-2">{error}</div>}
          <div className="form-control mb-5">
            <label htmlFor="email" className="block text-base">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full leading-10 border pl-3 outline-none focus:border-blue-600 rounded text-base"
              {...register("email")}
            />
            {errors?.email?.message && <p className="">{errors.email.message}</p>}
          </div>
          <div className="form-control mb-5">
            <label htmlFor="password" className=" block text-base">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full leading-10 border pl-3 outline-none focus:border-blue-600 rounded text-base"
              {...register("password")}
            />
            {errors?.password?.message && <p className="">{errors.password.message}</p>}
          </div>
          <a className="flex gap-5 items-center border rounded px-5 py-2 mb-5 cursor-pointer " onClick={handleLoginWithGoogle}>
            <FcGoogle />
            <span className="font">Sign in with Google</span>
          </a>
          <input
            type="submit"
            value={loading ? "Logging in..." : "Log in"}
            disabled={loading}
            className="w-full py-2 b rounded bg-blue-500/90  hover:bg-blue-500 text-white text-lg font-semibold mb-7 cursor-pointer"
          />
          <hr />
          <p className="my-3">Don&apos;t have an account? Sign Up</p>
        </form>
      </div>
    </main>
  )
}

export default Login
