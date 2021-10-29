import React from 'react'
import { BsPencilSquare } from "react-icons/bs";
import { useRouter } from 'next/router';

import styles from './Contact.module.scss'


function Contact({id, name, avatar, userStatus, status}) {
    const router = useRouter()

    const createNewDialog = () =>{
        router.push('/dialog/')
    }

    return (
        <div className={styles.Contact}>
            <div className={styles.Contact__img}>
                <img src={avatar} alt="user_avatar"/>
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
        </div>
    )
}

export default Contact
