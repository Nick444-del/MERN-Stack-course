import React from 'react'
import {Link} from 'react-router-dom'
import Stopwatch from '../Assigments/Stopwatch'

const Assigemnt = () => {
    const assigment = [
        {
            id: 1,
            name: 'Stopwatch',
            link: '../Assigments/Stopwatch.jsx'
        }
    ]
    return (
        <>
            <h1>Assigments</h1>
            <ul>
                {
                    assigment && assigment.map((assigment, i) => {
                        return <li key={assigment.id}><Link to={assigment.link}>{assigment.name}</Link></li>
                    })
                }
            </ul>
        </>
    )
}

export default Assigemnt