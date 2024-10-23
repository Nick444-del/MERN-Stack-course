import React from 'react'

const InputValue = () => {
    const [value, setValue] = React.useState("")
    const [inValue, setInValue] = React.useState("")

    const onChangeHandler = (e) => {
        console.log('input - test ', e.target.value);
        setValue(e.target.value)
    }

    const onClickHandler = () => {
        setInValue(value)
    }

    return (
        <>
            <h1>Value: {inValue}</h1>
            <input type="text" name="value" onChange={onChangeHandler} id="value" />
            <button onClick={onClickHandler}>Click</button>
        </>
    )
}

export default InputValue