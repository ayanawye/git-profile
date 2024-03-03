import React from 'react';
import style from './Input.module.scss';

interface Props {
    type: string;
    placeholder: string;
}

function Input(props: Props) {
    const {placeholder, type} = props

    return (
        <input type={type} placeholder={placeholder} />
    )
}

export default Input
