import React from 'react'
import style from './UserCard.module.scss';
import { Link } from '../../../../shared';

interface Props {
    name: string;
    avatar: string;
    link: string;
    onClick: (user: string) => void;
}

function UserCard(props: Props) {
    const { name, avatar, link, onClick } = props

    return (
        <div className={style.card} onClick={() => onClick(name)}>
            <img src={avatar} alt={name} />
            <div className={style.info}>
                <p>{name}</p>
                <Link href={link} blank>{link}</Link>
            </div>
        </div>
    )
}

export default UserCard
