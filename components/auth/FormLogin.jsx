import React from 'react'
import { useForm } from "react-hook-form";
import {userLogin} from '../../redux/reducers/AuthUser'
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import styles from './Auth.module.scss'



function FormLogin({state}) {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        console.log(data)
        dispatch(userLogin({email: data.Email, password: data.Password}))
    };
  
    return (
      
        <form className={state? `${styles.containerForm} ${styles.activeL}` :styles.containerForm} onSubmit={handleSubmit(onSubmit)}>
    
            <TextField  
            className={styles.containerForm__input}
            label="Email" 
            variant="outlined" 
            type="Email" 
            {...register("Email", { required: true })}
            />

            <TextField  
            className={styles.containerForm__input}
            label="Пороль" 
            variant="outlined"
            type="password" 
            {...register("Password", { required: true })}
            />

            {errors.Password || errors.Login ? <span className={styles.containerForm__error} >Заполните все поля</span>: null}

            <Button  className={styles.containerForm__submit}  type="submit" variant="outlined">Вход</Button>
        </form>

    )
}

export default FormLogin
