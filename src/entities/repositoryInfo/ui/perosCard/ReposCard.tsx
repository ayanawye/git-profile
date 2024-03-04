import React from 'react';
import style from './ReposCard.module.scss';
import { BoldTitle, Link } from '../../../../shared';

interface Props {}

function ReposCard(props: Props) {
    const {} = props

    return (
        <div>
            <BoldTitle>name</BoldTitle>
            <Link href={'link'} blank>repo link</Link>
            <p>author</p>
        </div>
    )
}

export default ReposCard
