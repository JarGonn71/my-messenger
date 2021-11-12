import React from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from "react-redux"
import { formatDistanceStrict } from 'date-fns'
import styles from './ListMessege.module.scss'
import { ru } from 'date-fns/locale'

function ListMessegeItem({_id, name, avatar, active, lastMessage, activeId, partner}) {
    const id = 0
    const dataLastMessage = formatDistanceStrict(Date.parse(lastMessage.createdAt), new Date(), {locale: ru}).split(' ')
    .map((item, index) => {return index ==1? item[0]: item}).join(' ')
 
    return (
        <div className={activeId == _id? `${styles.container__item} ${styles.active}`:styles.container__item}>
            <Link href={`/dialog/${_id}`}>
                <a>
                    <div className={styles.container__item__img}>
                        <div style={{background: active? "green": "red"}} className={styles.container__item__status}></div>
                        <img src={"https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"} alt="user_avatar" />
                    </div>
                    <div className={styles.container__item__info}>
                        <span>{name}</span>
                        <div className={styles.container__item__messege}>
                            {
                            lastMessage.user === id?  <>Вы: <p>{lastMessage.text}</p></>
                            : <><p>{lastMessage.text}</p></>
                            }
                        </div>
                        <div className={styles.container__item__time}>{dataLastMessage}</div> 
                    </div>
                </a>
            </Link>
            
        </div>
    )
}

export default ListMessegeItem
