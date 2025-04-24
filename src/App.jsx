import { useState } from 'react'
import './App.css'
import Authenticate from "./components/Authenticate"
import SignUpForm from './components/SignUpForm'
function App() {
 

  return (
    <div>
      
        <Authenticate/>
        <SignUpForm/>
      
    </div>
  )
}

export default App
