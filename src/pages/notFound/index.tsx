import React from 'react'
import { Link } from 'react-router-dom'

interface Props {}

function NotFoundPage(props: Props) {
    const {} = props

    return (
        <div>
            not NotFoundPage
            <Link to={'/profile'}>Profile</Link>
        </div>
    )
}

export default NotFoundPage
