import React, {useState} from 'react'
import { TextField, InputAdornment } from '@material-ui/core';
import {BiTag, BiEdit, BiMenu} from 'react-icons/bi'
import ListMessegeItem from './ListMessegeItem';
import {useRouter} from 'next/router'

import styles from './ListMessege.module.scss'

function ListMessege() {
    const router = useRouter()
    const [showSidebar, setShowSidebar] = useState(false)
    
    const list = [
        {
            id: 1,
            name:'Tod',
            avatar: 'https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png',
            active: true,
            lastMessege:{ 
                text: 'hi',
                time: '11:30',
                isMe: true,
                isRead: true
            }
        },
        {
            id: 2,
            name:'Tom',
            avatar: 'https://placepic.ru/wp-content/uploads/2021/02/kinopoisk_ru_Brad_Pi-41.jpg',
            active: false,
            lastMessege:{ 
                text: 'Treee',
                time: '1д',
                isMe: false,
                isRead: false
            }
        },
        {
            id: 3,
            name:'Tod',
            avatar: 'https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png',
            active: true,
            lastMessege:{ 
                text: 'hi',
                time: '11:30',
                isMe: true,
                isRead: true
            }
        },
        {
            id: 4,
            name:'Tom',
            avatar: 'https://placepic.ru/wp-content/uploads/2021/02/kinopoisk_ru_Brad_Pi-41.jpg',
            active: false,
            lastMessege:{ 
                text: 'Treee',
                time: '1д',
                isMe: false,
                isRead: false
            }
        },
        {
            id: 5,
            name:'Tod',
            avatar: 'https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png',
            active: true,
            lastMessege:{ 
                text: 'hi',
                time: '11:30',
                isMe: true,
                isRead: true
            }
        },
        {
            id: 6,
            name:'Tom',
            avatar: 'https://placepic.ru/wp-content/uploads/2021/02/kinopoisk_ru_Brad_Pi-41.jpg',
            active: false,
            lastMessege:{ 
                text: 'Treee',
                time: '1д',
                isMe: false,
                isRead: false
            }
        },
        {
            id: 7,
            name:'Tod',
            avatar: 'https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png',
            active: true,
            lastMessege:{ 
                text: 'hi',
                time: '11:30',
                isMe: true,
                isRead: true
            }
        },
        {
            id: 8,
            name:'Tom',
            avatar: 'https://placepic.ru/wp-content/uploads/2021/02/kinopoisk_ru_Brad_Pi-41.jpg',
            active: false,
            lastMessege:{ 
                text: 'Treee',
                time: '1д',
                isMe: false,
                isRead: false
            }
        },
        {
            id: 9,
            name:'Tod',
            avatar: 'https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png',
            active: true,
            lastMessege:{ 
                text: 'hi',
                time: '11:30',
                isMe: true,
                isRead: true
            }
        },
        {
            id: 10,
            name:'Tom',
            avatar: 'https://placepic.ru/wp-content/uploads/2021/02/kinopoisk_ru_Brad_Pi-41.jpg',
            active: false,
            lastMessege:{ 
                text: 'Treee',
                time: '1д',
                isMe: false,
                isRead: false
            }
        },
    ]

    const messegeList = list.map((item, index) => {return <ListMessegeItem key={index} {...item} activeId={router.query.id} />})

    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <div className={styles.title}>
                    <BiMenu onClick={()=>{setShowSidebar(prev=>!prev)}}/> Список диалогов
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
                {messegeList}
            </div>
        </div>
    )
}

export default ListMessege
