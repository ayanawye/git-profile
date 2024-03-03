import React from 'react';
import { LogoItem } from '../../shared';
import '../styles/global.scss';

interface Props {
    children: React.ReactNode
}

function BaseLayout(props: Props) {
    const {children} = props

    return (
        <>
        <LogoItem/>
        {children}
        </>
    )
}

export default BaseLayout
