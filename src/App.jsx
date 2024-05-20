import React, { useState } from 'react'
import './App.css'
import Headers from './components/header/header'
import Gamearea from './components/gamearea/gamearea'

function App() {
  const [start, setStart] = useState(false)

  const [time, setTime] = useState(0)



  return (

    <>
      {console.log(time)}
      <h1 style={{ textAlign: "center" }}>
        Box Hunt
      </h1>
      <Headers start={start} setStart={setStart} time={time} setTime={setTime} />
      <Gamearea start={start} time ={time}/>
    </>
  )
}

export default App
