import React from 'react'
import {Link} from 'react-router-dom'
const NotFoundPage = () => {
    return (
        <div className='notFoundPage--container'>
            <p>404 something went wrong</p><Link to="/">Home</Link>
        </div>
    )
}

export default NotFoundPage
