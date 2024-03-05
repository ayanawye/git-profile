import React from 'react';
import style from './AuthButton.module.scss';
import {  loginWithGithub } from '../../by-oauth';

function AuthButton() {
    const login = () => {
        loginWithGithub()
    }

    return (
        <div className={style.btn}>
            <button onClick={login}>Login with GitHub</button>
        </div>
    )
}

export default AuthButton
