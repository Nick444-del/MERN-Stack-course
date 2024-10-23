import React from 'react'
import { getInitials } from '../../utils/helper'

const ProfileInfo = ({onLogout}) => {
    return (
        <>
            <div className='flex items-center gap-3'>
                <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-vista_blue'>{getInitials("Abc Xyz")}</div>
                <div>
                    <p className='text-sm font-medium text-leather'>Abc Xyz</p>
                    <button className='text-sm text-light_tan underline' onClick={onLogout}>Logout</button>
                </div>
            </div>
        </>
    )
}

export default ProfileInfo;