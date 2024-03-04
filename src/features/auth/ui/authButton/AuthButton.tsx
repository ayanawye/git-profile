import React from 'react';
import style from './AuthButton.module.scss';
import {  loginWithGithub } from '../../by-oauth';

interface Props {}

function AuthButton(props: Props) {
    const login = () => {
        loginWithGithub()
    }

    return (
        <button onClick={login}>Login with GitHub</button>
    )
}

export default AuthButton
