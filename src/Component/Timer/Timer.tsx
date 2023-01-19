import React, { useEffect, useState } from 'react'
import timerFunction from '../Function/Function';
import './Timer.css';

const Timer = () => {

    const [timeInSeconds, setTimeInSeconds] = useState(0);
    const [checkbox, setCheckbox] = useState(false);
    console.log(checkbox);
    const [timerArray, setTimerArray] = useState<Array<number | string>>([]);
    useEffect(() => {
        setTimerArray(timerFunction(timeInSeconds));
    }, [timeInSeconds]);
    const [intervalId, setIntervalId] = useState<number>(0);

    //onclick Buttons
    const handleStart = () => {
        const interval: any = setInterval(() => {
            setTimeInSeconds((previousState: number) => previousState + 1);
        }, 1);

        setIntervalId(interval);
    }
    const handleReset = () => {
        clearInterval(intervalId);
        setTimeInSeconds(0);
    }
    const handleStop = () => {
        clearInterval(intervalId);
    }

    const handlemilliseconds = () => {
        if (checkbox === true) {
            setCheckbox(false)
        }
        else {
            setCheckbox(true);
        }
    }

    return (
        <div className='timer-container'>

            <div className='Timer'>
                <h1>{timerArray[0]}</h1><span> - </span>
                <h1>{timerArray[1]}</h1><span> - </span>
                <h1>{timerArray[2]}</h1>
                <div className={checkbox ? "showmillisecond" : 'millisecond'}>
                    <h2>{timerArray[3]}</h2>
                </div>
            </div>
            <div className='Timer-button'>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleStop}>Stop</button>
            </div>
            <div>
                <input onClick={handlemilliseconds} type="checkbox" id="milliseconds" name="milliseconds" value="millisecond" />
                <label htmlFor='milliseconds'> To Show Millisecond</label>
            </div>
        </div>
    )
}

export default Timer