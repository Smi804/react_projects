import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //use ref 
  const passwoerdref=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$_-?`~";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClip=useCallback(()=>{
    passwoerdref.current?.select()
    passwoerdref.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <div className="w-full max-w-md mx-auto shadow-md px-4 py-4 rounded-lg my-8 text-orange-400 bg-gray-700">
      <h1 className="text-white text-center text-2xl my-3">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden  mb-4">
        <input
          type="text"
          placeholder="password"
          readOnly
          value={password}
          ref={passwoerdref}
          className="outline-none px-1 py-3 w-full"
        />
        <button
        onClick={copyPasswordToClip}
        className="ouline-none bg-blue-700 text-white px-3 py-0 shrink-0">
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
