import React, { useEffect, useState } from 'react'
import { BsPencilSquare } from "react-icons/bs";
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@material-ui/core';

import styles from './Contact.module.scss'



function Contact({_id, name, avatar, userStatus, status}) {
    const router = useRouter()
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    
    const createNewDialog = () =>{
        setShow(prev => !prev)
        // dispatch(createDialog(_id, 'Hello Next JS'))
    }
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }


    const onClickBtn = () =>{
        if(value){
            onSubmit(value)
            setValue('')
        }
    }

    return (
        <div className={styles.Contact}>
            <div className={styles.Contact__img}>
                <img src={"https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"} alt="user_avatar"/>
            </div>
            <div className={styles.Contact__info}>
                <div className={styles.Contact__name}>
                    {name}
                </div>
                <div className={styles.Contact__status}>
                    {userStatus}
                </div>
            </div>
            <BsPencilSquare onClick={createNewDialog}/>
            
            {
                show && <div className={styles.Contact__window}>
                    <span >Создание диалога</span>
                    <div className={styles.Contact__textArria}>
                        <TextField
                            label="Написать сообщение"
                            multiline
                            className={"textArria"}
                            maxRows={3}
                            value={value}
                            onChange={handleChange}
                            variant="filled"
                        />
                        <Button onClick={onClickBtn} variant="contained">Отправить</Button>
                    </div>
                </div>
                        
            }
        </div>
    )
}

export default Contact
