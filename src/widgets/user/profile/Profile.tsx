import React, { memo } from 'react'
import { ProfileCard } from '../../../entities/userProfile'

interface Props {}

function Profile(props: Props) {
    const {} = props

    return (
        <ProfileCard/>
    )
}

export default memo(Profile);
