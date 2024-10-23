import React, { useEffect, useState } from 'react'

const DigitalClock = () => {
    const [second, setSecond] = useState(0)
    const [minute, setMinute] = useState(0)
    const [hour, setHour] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSecond(Date.tolocaleTimeString())
            setMinute(Date.tolocaleTimeString())
            setHour(Date.tolocaleTimeString())
        }, 1000)

        return () => clearInterval(interval)
    })

    return (
        <>
            <h1>Digital Clock</h1>
            <h2>{hour} : {minute} : {second}</h2>
        </>
    )
}

export default DigitalClock