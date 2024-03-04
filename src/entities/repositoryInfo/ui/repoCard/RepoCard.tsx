import React from 'react';
import style from './RepoCard.module.scss';
import { BoldTitle, Link } from '../../../../shared';

interface Props {
    name: string,
    author: string,
    repoLink: string
}

function RepoCard(props: Props) {
    const { name, author, repoLink } = props

    return (
        <div className={style.card}>
            <BoldTitle>{name}</BoldTitle>
            <Link href={repoLink} blank>{repoLink}</Link>
            <p>{author}</p>
        </div>
    )
}

export default RepoCard
