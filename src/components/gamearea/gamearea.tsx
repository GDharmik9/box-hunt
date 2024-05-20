import React, { useEffect, useState } from 'react'
import './gamearea.css'

const gamearea = ({ start, time }) => {
    let initialTime = 0
    const [leftPosition, setLeftPosition] = useState("150px")
    const [topPosition, setTopPosition] = useState("100px")

    const div = document.querySelector('.game-area')
    const maxheight = div?.clientHeight
    const maxwidth = div?.clientWidth

    const randomPosition = () => {
        initialTime = new Date().getTime()
        const randomLeft = Math.floor(Math.random() * 1400) + 1
        const randomTop = Math.floor(Math.random() * 300) + 1
        setLeftPosition(randomLeft + "px")
        setTopPosition(randomTop + "px")
    }

    //time to miliseconds
    const timer = time * 1000

    const thorttle = (func, delay) => {
        let flag = true
        return function () {
            if (flag) {
                func()
                flag = false
                setTimeout(() => {
                    flag = true
                }, delay)
            }
        }
    }

    // call the randomPosition function after the timer has passed and then continue to call it every 3 seconds but stop it for timer time
    useEffect(() => {
        const interval = setInterval(thorttle(randomPosition, 3000), timer)
        return () => clearInterval(interval)
    }, [start])

    // make the box clickable and when clicked it should log the time it took to click the box4
    //log the react time and minimize the time to 1s, 0.5s, and 3s like that
    const clickHandler = () => {
        console.log(time)
        const reactionTime = ((new Date().getTime() - initialTime) / 1000)

        console.log(`Reaction Time: ${Math.floor(reactionTime % 60)
            } seconds`);

    }


    return (
        // position on the screen

        <div className='container'>
            <div className='game-area'>


                <span
                    onClick={clickHandler}
                    style={{ left: leftPosition, top: topPosition }}
                    className={start ? " box display" : "box"
                    } ></span>
            </div>
            <div className='game-score'>
                <div className='game-score-card'>
                    <h3>Mouse click Number</h3>
                    <ul className='game-score-lists'>
                        <li className='game-score-list'>something </li>

                    </ul>
                </div>
                <div className='game-score-card'>
                    <h3>Reaction Time</h3>
                    <ul className='game-score-lists'>
                        <li className='game-score-list'>something</li>

                    </ul>
                </div>
            </div>
        </div >
    )
}

export default gamearea