import UserContextProvider from "./context/UserContextProvider"
import Login from "./components/login"
import Profile from "./components/Profile"
import '../src/App.css'
function App() {
 

  return (
   <UserContextProvider>
   <h1>React <code>UseContext </code> project</h1>
   <Login/>
   <Profile/>
   </UserContextProvider>
  )
}

export default App
