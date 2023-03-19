import { useState } from 'react'

function App() {
  const [input,setInput] = useState("0")

    function display(value){
        input.toString().charAt(0) === "0" ? setInput(value) : setInput(input+value)
    }

    function resetDisplay (){
        setInput("0")
    }

    function calculate(){
        let calResult =  eval(input).toFixed(3)
        setInput(calResult)
    }

  return (
    <div className="m-0 min-h-screen flex justify-center items-center bg-slate-600">
            <div className="bg-white w-[60%] rounded-[15px]">
              <div className="bg-black text-white flex justify-end items-center rounded-tl-[10px] rounded-tr-[10px] ">
                  <h1 className="text-xl overflow-hidden m-0 p-[40px] md:text-4xl">{input}</h1>
              </div>
              <div className="grid grid-cols-4 gap-[10px] bg-[#292D3E] p-5">
                  <button className="operator items-center cursor-pointer" onClick={()=>display("+")}>+</button>
                  <button className="operator" onClick={()=>display("-")}>-</button>
                  <button className="operator" onClick={()=>display("*")}>x</button>
                  <button className="operator" onClick={()=>display("/")}>/</button>
                  <button className="number" onClick={()=>{display("7")}}>7</button>
                  <button className="number" onClick={()=>{display("8")}}>8</button>
                  <button className="number" onClick={()=>{display("9")}}>9</button>
                  <button className="number" onClick={()=>{display("4")}}>4</button>
                  <button className="number" onClick={()=>{display("5")}}>5</button>
                  <button className="number" onClick={()=>{display("6")}}>6</button>
                  <button className="number" onClick={()=>{display("1")}}>1</button>
                  <button className="number" onClick={()=>{display("2")}}>2</button>
                  <button className="number" onClick={()=>{display("3")}}>3</button>
                  <button className="number" onClick={()=>{display(".")}}>.</button>
                  <button className="number" onClick={()=>{display("0")}}>0</button>
                  <button className="cursor-pointer text-[#1D9AF2] shadow-sm number" onClick={()=>resetDisplay()}>C</button>
                  <button className="transition duration-1000 col-start-4 col-end-5 row-start-2 row-end-6 bg-[#1D9AF2] text-white rounded-[4px] text-[24px] hover:bg-[#292d3e]
                    hover:text-[#1D9AF2] border border-[#1D9AF2] hover:border-blue-500 active:bg-blue-700" onClick={()=>calculate()}>=</button>
              </div>
            </div>
        </div>
  )
}

export default App
