
"use client"
import { logIn, logOut, toggleModerator } from "@/redux/features/auth-slice"
import { AppDispatch, RootState } from "@/redux/store"
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'

const LogIn = () => {

  const dispatch = useDispatch<AppDispatch>()
  const [username, setUsername] = useState("")

  const data = useSelector((state: RootState) => state.authReducer.value);

  const onClickLogin = () => {
    dispatch(logIn(username))
    setUsername('')
  }

  const onClickLogOut = () => {
    dispatch(logOut())
  }

  const onToggleModerator = () => {
    dispatch(toggleModerator())
  }

  return (
    <div style={{ display: "flex", flexDirection: 'column', gap: '30px' }}>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      <br></br>

      <button onClick={onClickLogin}>Log In</button>

      <br></br>

      <button onClick={onClickLogOut}>Log out</button>

      <br></br>
      <button onClick={onToggleModerator}>Toggle Moderator Status</button>
      <p>user name: {data.username}</p>
    </div>
  )
}

export default LogIn



