import React from 'react'
import { useForm } from "react-hook-form";
import { Button, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import styles from './Auth.module.scss'


function FormRegistration({state}) {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        console.log(data)
        // dispatch(userRegistation({email: data.Email, password: data.Password, name: data.Username}))
    };
   

    return (
        <form className={state? styles.containerForm: `${styles.containerForm} ${styles.activeR}`} onSubmit={handleSubmit(onSubmit)}>
    
            <TextField  
            className={styles.containerForm__input}
            label="Имя" 
            variant="outlined" 
            {...register("Username", { required: true })}
            />

            <TextField  
            className={styles.containerForm__input}
            label="Email" 
            type="email"
            variant="outlined" 
            {...register("Email", { required: true })}
            />

            <TextField  
            className={styles.containerForm__input}
            label="Пороль" 
            variant="outlined"
            type="password" 
            {...register("Password", { required: true })}
            />
            
            <TextField  
            className={styles.containerForm__input}
            label="Повторите пороль" 
            variant="outlined"
            type="password" 
            {...register("CopyPassword", { required: true })}
            />

            {errors.Password || errors.Login ? <span className={styles.containerForm__error} >Заполните все поля</span>: null}

            <Button  className={styles.containerForm__submit_R}  type="submit" variant="outlined">Зарегистрироваться</Button>
        </form>
    )
}

export default FormRegistration
