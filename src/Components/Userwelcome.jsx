import React from 'react'
import '../ComponentStyles/Userwelcome.css'
function Userwelcome({username}) {
    return (
        <div className='Userwelcome_tag'>
            <h1>Hello, {username}</h1>
            <p>Welcome back to Capture the Flag</p>
        </div>
    )
}

export default Userwelcome
