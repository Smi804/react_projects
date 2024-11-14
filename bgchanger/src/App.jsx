import { useState } from "react"

function App() {
 const [color,setColor]=useState("olive")
  return (
    <>
  <div className=" w-full h-screen duration-200"
  style={{backgroundColor:color}}>
    <div className="flex flex-wrap justify-center inset-x-2 px-2 fixed bottom-12 ">
      <div className=" flex flex-wrap justify-center gap-3 shadow-md   bg-slate-500 px-3 py-2 rounded-2xl ">
      <button className="outline-none px-4 py-1 rounded-full shadow-xl text-white" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>GREEN</button>
      <button className="outline-none px-4 py-1 rounded-full shadow-xl text-black" style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>YELLOW</button>
      <button className="outline-none px-4 py-1 rounded-full shadow-xl text-white" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>RED</button>
      <button className="outline-none px-4 py-1 rounded-full shadow-xl text-white" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>BLUE</button>
      <button className="outline-none px-4 py-1 rounded-full shadow-xl text-black" style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>WHITE</button>
      <button className="outline-none px-4 py-1 rounded-full shadow-xl text-white" style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>BLACK</button>
     </div>
    </div>    
    </div>
   </>
  )
}

export default App
