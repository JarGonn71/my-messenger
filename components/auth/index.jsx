import React from 'react'
import {useState} from 'react'
import FormRegistration from './FormRegistration'
import FormLogin from './FormLogin'

import styles from './Auth.module.scss'

function Auth() {
    const [state, setState] = useState(true)

    return (
        <div className={styles.Auth__container}>

            <div className={styles.Auth__top}>
                <div className={state? styles.active: null} onClick={() => setState(true)}>Login</div>
                <div className={!state? styles.active: null} onClick={() => setState(false)}>Registration</div>
            </div>

            <div className={styles.Auth__form}>
                {state ? <FormLogin state={state}/>: <FormRegistration state={state}/>}
            </div>
        </div>
    )
}

export default Auth
