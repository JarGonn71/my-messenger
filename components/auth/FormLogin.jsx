import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import styles from './Auth.module.scss'
import Alert from '@material-ui/lab/Alert';

import { setCookie } from 'nookies'
import {setUserData} from '../../redux/slices/user'
import {userAPI} from '../../api/api'
import { useRouter } from 'next/router';

function FormLogin({state}) {
    const [errorMessage, setErrorMessage] = useState(false)
    const dispatch = useDispatch()
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = async (dto) => {
        try {
            const data = await userAPI.login(dto.email, dto.password)
            setCookie(null, 'Token', data.accessToken)
            setCookie(null, 'refreshToken', data.refreshToken)
            setErrorMessage('')
            dispatch(setUserData(data.user))
            router.push('/')
        } catch (error) {
            console.warn('Login error', error)
            setErrorMessage(error.response.data.message)
        }
        
    };
  
    return (
      
        <form className={state? `${styles.containerForm} ${styles.activeL}` :styles.containerForm} onSubmit={handleSubmit(onSubmit)}>
            
            {errorMessage && <Alert className={styles.containerForm__alert} severity="error">{errorMessage}</Alert>}
            
            <TextField  
            className={styles.containerForm__input}
            label="Email" 
            variant="outlined" 
            type="Email" 
            {...register("email", { required: true })}
            />

            <TextField  
            className={styles.containerForm__input}
            label="Пороль" 
            variant="outlined"
            type="password" 
            {...register("password", { required: true })}
            />

            {errors.password || errors.login ? <span className={styles.containerForm__error} >Заполните все поля</span>: null}
          
            <Button  className={styles.containerForm__submit}  type="submit" variant="outlined">Вход</Button>
        </form>

    )
}

export default FormLogin
