import React from 'react'
import {Link} from 'react-router-dom'

const Users = () => {
    const usr = [
        {
            id: 1,
            name: 'User1'
        },
        {
            id: 2,
            name: 'User2'
        },
        {
            id: 3,
            name: 'User3'
        }
    ]
    return (
        <div>
            <ul>
                {
                    usr && usr.map((usr, i) => {
                        return <li key={usr.id}><Link to={"/user-profile/"+Users.id}>{usr.name}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Users