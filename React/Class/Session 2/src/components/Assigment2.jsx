import React from 'react'
import './assigment.css'

import { useState } from 'react'


const Assigment2 = () => {
    const [data, setdata] = useState([]);

    const nameHandler = (e) => {
        setdata({ ...data, name: e.target.value });
    }

    const emailHandler = (e) => {
        setdata({ ...data, email: e.target.value });
    }

    const contactHandler = (e) => {
        setdata({ ...data, contact: e.target.value });
    }

    const passwordHandler = (e) => {
        setdata({ ...data, password: e.target.value });
    }

    const submit = () => {
        console.log(data);
    }

    return (
        <>
            <div className="form">
                <h1>Assigment 2</h1>
                <input type="text" name="name" id="name" onChange={nameHandler}/>
                <input type="text" name="email" id="email" onChange={emailHandler}/>
                <input type="number" name="contact" id="contact" onChange={contactHandler}/>
                <input type="password" name="password" id="password" onChange={passwordHandler}/>
                <button onClick={submit}>Submit</button>
            </div>
        </>
    )
}

export default Assigment2