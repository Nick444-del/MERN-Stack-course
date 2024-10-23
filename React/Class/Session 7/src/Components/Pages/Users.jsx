import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Users = () => {
    const [users, setUsers] = useState([])

    function getUsersData() {
        axios.get("https://6714af1c690bf212c76213fb.mockapi.io/api/v1/users").then(res => {
            setUsers(res.data)
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        getUsersData()
    }, [])

    const onDeleteHandler = (id) => {
        axios.delete(`https://6714af1c690bf212c76213fb.mockapi.io/api/v1/users/${id}`).then(res => {
            console.log(res)

            setUsers(users => {
                return users.filter(user => user.id !== id)
            })
        })
            .catch(err => console.log(err))
    }

    return (
        <>
            <h1>Users</h1>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.length > 0 ?
                            users && users.map((user, ind) => {
                                return <tr key={user.id}>
                                    <td>{++ind}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.contact}</td>
                                    <td>
                                        <button><Link to={"/edit-user/" + user.id}>Edit</Link></button>
                                        <button className='btn btn-danger' onClick={() => onDeleteHandler(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            }) :
                            <tr>
                                <td colSpan={5}>Loading...</td>
                            </tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default Users