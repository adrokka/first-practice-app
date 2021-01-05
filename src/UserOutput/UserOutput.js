import React from 'react'
import './UserOutput.css'

const UserOutput = props => {
    return (
        <div className='UserOutput' onClick={props.copied} id={props.index}>
            <p className='user-name'>Username: {props.userName}</p>
            <p className='user-info'>User Info: {props.userInfo}</p>
        </div>
    )
}

export default UserOutput;