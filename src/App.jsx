import React, { useState } from 'react'
import './App.css'
import Headers from './components/header/header'
import Gamearea from './components/gamearea/gamearea'

function App() {
  const [start, setStart] = useState(false)

  const [clickNumber, setClickNumber] = useState([])
  const [reactionTime, setReactionTime] = useState([])


  const setRestHandler = () => {
    setStart(false)
    setClickNumber([])
    setReactionTime([])
  }

  const [time, setTime] = useState(0)



  return (

    <>
      {console.log(time)}
      <h1 style={{ textAlign: "center" }}>
        Box Hunt
      </h1>
      <Headers
        start={start}
        setStart={setStart}
        time={time}
        setTime={setTime}
        setRestHandler={setRestHandler}

      />
      <Gamearea
        start={start}
        time={time}
        clickNumber={clickNumber}
        setClickNumber={setClickNumber}
        reactionTime={reactionTime}
        setReactionTime={setReactionTime}
      />
    </>
  )
}

export default App
