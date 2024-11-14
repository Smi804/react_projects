import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
 
  return (
  <>
 <h3 className="bg-green-300">Hello world</h3>
<Card name="SAMI" niche="DEVELOPER" mylink="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80" />
<Card name="SHERI" niche="CODER" mylink="https://images.unsplash.com/flagged/photo-1563536310477-c7b4e3a800c2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
</> 
  )
}

export default App
