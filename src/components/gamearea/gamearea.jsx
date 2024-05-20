import React, { useEffect, useState } from 'react'
import './gamearea.css'

const gamearea = ({ start, time, clickNumber, setClickNumber, reactionTime, setReactionTime }) => {
    let initialTime = 0
    const [leftPosition, setLeftPosition] = useState("150px")
    const [topPosition, setTopPosition] = useState("100px")



    const randomPosition = () => {
        const div = document.querySelector('.game-area')
        const maxheight = div?.clientHeight ? div?.clientHeight - 20 : 1400;
        const maxwidth = div?.clientWidth ? div?.clientWidth - 20 : 300;
        initialTime = new Date().getTime()
        const randomLeft = Math.floor(Math.random() * maxwidth) + 1
        const randomTop = Math.floor(Math.random() * maxheight) + 1
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

    // useEffect(() => {

    // }, [clickNumber, reactionTime])

    // call the randomPosition function after the timer has passed and then continue to call it every 3 seconds but stop it for timer time
    useEffect(() => {
        const interval = setInterval(thorttle(randomPosition, 3000), timer)
        return () => clearInterval(interval)
    }, [start,])

    // make the box clickable and when clicked it should log the time it took to click the box4
    //log the react time and minimize the time to 1s, 0.5s, and 3s like that



    const clickHandler = () => {
        let reaction;
        let click;
        const reactionClickTime = ((new Date().getTime() - initialTime) / 1000)
        console.log(`Reaction Time: ${Math.floor(reactionTime % 60)
            } seconds`);
        reaction = reactionClickTime
        click = clickNumber.length + 1
        setClickNumber([...clickNumber, click])
        setReactionTime([...reactionTime, reaction])

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
                        {
                            clickNumber.length > 0 &&
                            clickNumber.map((click, index) => {
                                return <li key={index} className='game-score-list'>{click}</li>
                            })
                        }

                    </ul>
                </div>
                <div className='game-score-card'>
                    <h3>Reaction Time</h3>
                    <ul className='game-score-lists'>
                        {
                            reactionTime.length > 0 &&
                            reactionTime.map((reaction, index) => {
                                return <li key={index} className='game-score-list'>{Math.floor(reaction % 60)} seconds</li>
                            })
                        }

                    </ul>
                </div>
            </div>
        </div >
    )
}

export default gamearea