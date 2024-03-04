import React from 'react'
import { Repos } from '../../entities/repositoryInfo';

interface Props {}

function UserRepoPage(props: Props) {
    const {} = props
    console.log('hello');
    
    return (
        <div>
            <Repos />
        </div>
    )
}

export default UserRepoPage;
