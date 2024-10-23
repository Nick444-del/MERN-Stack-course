import React from 'react'
import ViewCounter from './ViewCounter';
import ButtonCounter from './ButtonCounter';
import CounterContext from './CountContext';

const Counter = () => {
    return (
        <CounterContext>
            <ViewCounter/>
            <ButtonCounter/>
        </CounterContext>
    )
}

export default Counter