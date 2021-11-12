import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import { Button, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import styles from './Auth.module.scss'
import Alert from '@material-ui/lab/Alert';


import { setCookie } from 'nookies'
import {setUserData} from '../../redux/slices/user'
import {userAPI} from '../../api/api'

function FormRegistration({state}) {
    const [errorMessage, setErrorMessage] = useState(false)
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = async (dto) => {
        console.log(dto)
        try {
            const {data} = await userAPI.registation(dto.email, dto.password, dto.username)
            setCookie(null, 'Token', data.accessToken)
            setCookie(null, 'refreshToken', data.refreshToken)
            console.log(data)
            setErrorMessage('')
            dispatch(setUserData(data.user))
        } catch (error) {
            console.warn('Register error', error)
            setErrorMessage(error.response.data.message)
        }
        
    };
   

    return (
        <form className={state? styles.containerForm: `${styles.containerForm} ${styles.activeR}`} onSubmit={handleSubmit(onSubmit)}>
            
            {errorMessage && <Alert className={styles.containerForm__alert} severity="error">{errorMessage}</Alert>}

            <TextField  
            className={styles.containerForm__input}
            label="Имя" 
            variant="outlined" 
            {...register("username", { required: true })}
            />

            <TextField  
            className={styles.containerForm__input}
            label="Email" 
            type="email"
            variant="outlined" 
            {...register("email", { required: true })}
            />

            <TextField  
            className={styles.containerForm__input}
            label="Пороль" 
            variant="outlined"
            type="password" 
            {...register("password", { required: true })}
            />
            
            <TextField  
            className={styles.containerForm__input}
            label="Повторите пороль" 
            variant="outlined"
            type="password" 
            {...register("copyPassword", { required: true })}
            />

            {errors.password || errors.login ? <span className={styles.containerForm__error} >Заполните все поля</span>: null}

            <Button  className={styles.containerForm__submit_R}  type="submit" variant="outlined">Зарегистрироваться</Button>
        </form>
    )
}

export default FormRegistration
