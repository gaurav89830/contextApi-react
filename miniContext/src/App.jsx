import {useState} from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './assets/components/Login'
import Profile from './assets/components/Profile'

function App() {
  return (
    <UserContextProvider>
      <h1>Context API : React</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
