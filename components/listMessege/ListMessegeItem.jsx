import React from 'react'
import Link from 'next/link'
import styles from './ListMessege.module.scss'

function ListMessegeItem({id, name, avatar, active, lastMessege, activeId}) {
    return (
        <div className={activeId == id? `${styles.container__item} ${styles.active}`:styles.container__item}>
            <Link href={`/dialog/${id}`}>
                <a>
                    <div className={styles.container__item__img}>
                        <div style={{background: active? "green": "red"}} className={styles.container__item__status}></div>
                        <img src={avatar} alt="user_avatar" />
                    </div>
                    <div className={styles.container__item__info}>
                        <span>{name}</span>
                        <div className={styles.container__item__messege}>
                            {
                            lastMessege.isMe?  <>Вы: <p>{lastMessege.text}</p></>
                            : <><p>{lastMessege.text}</p></>
                            }
                        </div>
                        <div className={styles.container__item__time}>{lastMessege.time}</div> 
                    </div>
                </a>
            </Link>
            
        </div>
    )
}

export default ListMessegeItem
