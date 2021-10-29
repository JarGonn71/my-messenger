import React, {useState} from 'react'
import Link from 'next/link'

import { Button, TextField } from '@material-ui/core';
import { BsFillGridFill, BsArrowBarLeft } from "react-icons/bs";

import styles from './Dialog.module.scss'

function Dialog({item, onSubmit}) {
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
        <div className={styles.Dialog}>
            <div className={styles.Dialog__wrapper}></div>
            <div className={styles.Dialog__top}>
                <div className={styles.Dialog__LinkHome}>
                    <Link href="/">
                        <a>
                            <BsArrowBarLeft/>
                            <BsFillGridFill /> 
                        </a>
                    </Link>
                   
                </div>
                {item.name} <span>{item.status}</span>
            </div>
            <div className={styles.Dialog__chat}>
                {item.messeges.length > 0? item.messeges.map((item, index) => {return <div key={index}>{item.text}</div>})
                        : <div className={styles.Dialog__text}>Чтобы создать диалог напишите сообщение</div>
                }
            </div>
            <div className={styles.Dialog__bottom}>
                <TextField
                    label="Написать сообщение"
                    multiline
                    className={"textArria"}
                    maxRows={3}
                    fullWidth
                    value={value}
                    onChange={handleChange}
                    variant="filled"
                />
                <Button onClick={onClickBtn} variant="contained">Отправить</Button>
            </div>
        </div>
    )
}

export default Dialog
