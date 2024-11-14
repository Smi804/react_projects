import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import sami from './assets/sami.jpg'


function App() {
  const [amount,setAmount] = useState(0)
  let [from,setFrom]=useState("pkr")
  let [to,setTo]=useState("usd")
  const[convertedAmount,setConvertedAmount]=useState(0)

  const currencyInfo=useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert=()=>{
  setConvertedAmount(amount * currencyInfo[to])
 }


  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url(https://images.pexels.com/photos/1629172/pexels-photo-1629172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`
          }}
      >
          <div className="w-full flex flex-row-reverse">
              <div className="w-full h-30  max-w-sm mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                         
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              currencyOptions={options}
                              onCurrencyChange={(currency)=>setFrom(currency)}
                              selectCurrency={from}
                              onAmountChange={(amount)=>setAmount(amount)}
                              
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              Swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              currencyOptions={options}
                              onCurrencyChange={(currency)=>setTo(currency) }
                              selectCurrency={to}
                              amountDisable

                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
              <div className='max-w-sm float-left max-h-sm mx-auto border border-gray-60 rounded-lg p-5 '>
                <img src={sami} className=' border rounded-lg' alt="" />
              </div>
          </div>
      </div>
  );
}

export default App
