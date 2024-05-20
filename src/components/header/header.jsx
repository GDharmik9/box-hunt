import { useState } from 'react'
import React from 'react'
import './header.css'

const header = ({ start, setStart, time, setTime }) => {


    const starthandler = () => {
        if (time === 0) {
            alert('Please set the time')
        } else {
            setStart(true)
        }
    }

    const sethandler = () => {
        if (time !== 0) {
            setTime(time)
        } else {
            alert('Please enter the time')
        }
    }


    return (
        <div className='header'>
            <button
                className='header-btn'
                onClick={starthandler}
            >
                Start
            </button>
            <button
                className='header-btn'
                onClick={() => setStart(false)}
            >
                Pause
            </button>
            <button className='header-btn'>Reset</button>
            <div>
                <input
                    onChange={(e) => setTime(e.target.value)}
                    className="hearder-input"
                    type="Number"
                    placeholder="Enter time"
                    required
                />{" "}
                <button
                    onClick={sethandler}
                    className='header-btn'
                > Set</button>
            </div>
        </div>
    )
}

export default header