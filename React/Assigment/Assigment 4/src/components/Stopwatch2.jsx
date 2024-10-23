import React, { useState, useEffect} from 'react'

const stopwatch2 = () => {
    const [millisecond, setMilliseconds] = useState(0);
    const [seconds, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if(isRunning){
            const interval = setInterval(() => {
                if(isRunning){
                    setMilliseconds(millisecond + 1);
                    if(millisecond >= 100){
                        setSecond(seconds + 1);
                        setMilliseconds(0);
                    }
                    if(seconds >= 60){
                        setMinute(minute + 1);
                        setSecond(0);
                    }
                    if(minute >= 60){
                        setHour(hour + 1);
                        setMinute(0);
                    }
                }
            }, 10);
            return () => clearInterval(interval);
        }
    }, [isRunning, millisecond, seconds, minute, hour])

    const start = () => {
        setIsRunning(true);
    }

    const stop = () => {
        setIsRunning(false);
    }

    const reset = () => {
        setMilliseconds(0);
        setSecond(0);
        setMinute(0);
        setHour(0);
        setIsRunning(false);
    }

    return (
        <>
            <h1>Stop Watch 2</h1>
            <h3>{hour} : {minute} : {seconds} : {millisecond}</h3>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default stopwatch2