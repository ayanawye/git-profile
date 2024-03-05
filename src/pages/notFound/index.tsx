import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
    return (
        <div>
            not NotFoundPage
            <Link to={'/profile'}>Profile</Link>
        </div>
    )
}

export default NotFoundPage
