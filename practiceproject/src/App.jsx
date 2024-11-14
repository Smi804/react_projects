import { useState } from 'react'
import './App.css'

function App() { 
 
  let [counter, setCounter] = useState(15)  //it can be const but then you need to increment counter 
  setCounter                                //within setCounter e.g :setCounter(counter=>counter+1)
 
 const AddValue=()=>{
     /* console.log("Value ADDED"+ Math.random())  */
   counter=counter+1
     setCounter(counter)
   console.log("Incremented",counter)
  
}
const DecValue=()=>{
  /* console.log("Value ADDED"+ Math.random())  */
counter=counter- 1
setCounter(counter)
console.log("decremented",counter)

}
  return (
    <>
     <h1>Sami Abbas</h1>
     <h2>Counter Value:{counter}</h2>
     <button 
     onClick={AddValue}
     >ADD VALUE {counter}</button>
     <br />
     <button onClick={DecValue}>REMOVE VALUE {counter}</button>
     <p>Footer : {counter}</p>
    </>
  )
}

export default App
