import React from 'react'
import { TextField, InputAdornment } from '@material-ui/core';
import {BiTag, BiChat, BiEdit} from 'react-icons/bi'
import styles from './ListMessege.module.scss'

function ListMessege() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <div className={styles.title}>
                    <BiChat/> Список диалогов
                </div>
                <BiEdit/>
            </div>
            <div className={styles.search}>
                <TextField
                    className="searchInput"
                    id="filled-basic" 
                    placeholder="Поиск"
                    fullWidth
                    variant="filled"
                    size="small"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <BiTag />
                        </InputAdornment>
                    ),
                    }}
                />
            </div>
            <div className={styles.container}>
                <div className={styles.container__item}></div>
                <div className={styles.container__item}></div>
                <div className={styles.container__item}></div>
                <div className={styles.container__item}></div>
                <div className={styles.container__item}></div>
                <div className={styles.container__item}></div>
                <div className={styles.container__item}></div>
                <div className={styles.container__item}></div>
                <div className={styles.container__item}></div>
                <div className={styles.container__item}></div>
                <div className={styles.container__item}></div>
                <div className={styles.container__item}></div>
            </div>
        </div>
    )
}

export default ListMessege
