import React from 'react'
import { useParams } from 'react-router-dom'

const AssigemtView = () => {
    const {assigemntId} = useParams();
    return (
        <div>Assigment View - {assigemntId}</div>
    )
}

export default AssigemtView