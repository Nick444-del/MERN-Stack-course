import React, { useState, useEffect } from 'react';


const Stopwatch = () => {
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);

    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                if(isRunning){
                    setSecond((second) => second + 1);
                    if(second === 59){
                        setMinute((minute) => minute + 1);
                        setSecond(0);
                    }
                    if(minute === 59){
                        setHour((hour) => hour + 1);
                        setMinute(0);
                    }
                }
            }, 1000)
            return () => clearInterval(interval);
        }
    }, [isRunning, second, minute, hour]);

    const start = () => {
        setIsRunning(true);
    }

    const stop = () => {
        setIsRunning(false);
    }

    return (
        <>
            <h1>Stop Watch</h1>
            <h2>{hour}:{minute}:{second}</h2>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </>
    )
}

export default Stopwatch