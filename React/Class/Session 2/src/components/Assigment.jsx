import React from 'react';
import { useState } from 'react'
import './assigment.css'

const Assigment = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [contact, setcontact] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState(null);

    const nameHandler = (e) => {
        // console.log('Name:-', e.target.value)
        setname(e.target.value);
    }

    const emailHandler = (e) => {
        // console.log('Email:-', e.target.value)
        setemail(e.target.value);
    }

    const contactHandler = (e) => {
        // console.log('Contact:-', e.target.value)
        setcontact(e.target.value);
    }

    const passwordHandler = (e) => {
        // console.log('Password:-', e.target.value)
        setpassword(e.target.value);
    }

    const submit = () => {
        if(!name || !email || !contact || !password) {
            setError('Please fill all the fields')
            return;
        }else{
            if(!name){
                setError('Name is required')
                return;
            }
            if(!email){
                setError('Email is required')
                return;
            }
            if(!contact){
                setError('Contact is required')
                return;
            }
            if(!password){
                setError('Password is required')
                return;
            }
        }
        const result = JSON.stringify({ name, email, contact, password })
        console.log(result);
    }

    return (
        <>
            <h1>Assigment 1</h1>
            <div className="form container d-flex flex-column">
                <input type="text" name="name" id="name" onChange={nameHandler} />
                <input type="email" name="email" id="email" onChange={emailHandler}/>
                <input type="number" name="contact" id="contact" onChange={contactHandler} />
                <input type="password" name="password" id="password" onChange={passwordHandler} />
                {error ? <p style={{color: 'red'}}>{error}</p> : null}
                <button type='submit' onClick={submit}>Submit</button>
            </div>
        </>
    )
}

export default Assigment