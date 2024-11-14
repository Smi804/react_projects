import ReactDOM from 'react-dom/client'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <>
    <div>Hello within app | chai</div>
    </>
  )
}

const ReactElement2 = {
  type: 'a',
  props:{
      href:'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
}

const anotherUser=" || by sami"

const anotherElement=(
  <a href="https://google.com" target='_blank'>visit Google</a>
)
const ReactElement=(
  React.createElement(
    'a',
    {href: 'https://google.com'},
    'click me to visit google',anotherUser
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
   
   ReactElement
  /*  <App/> */
   
)
