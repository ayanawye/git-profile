import React from 'react';
import style from './PageTitle.module.scss';

interface Props {
    children: React.ReactNode;
}

function PageTitle(props: Props) {
    const {children} = props

    return (
        <h2>{children}</h2>
    )
}

export default PageTitle;
