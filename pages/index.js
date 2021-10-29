import MyLauout from "../layouts/MyLayout"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { TextField } from '@material-ui/core';

import { Contact } from "../components";

import styles from '../styles/Home.module.scss'

export default function Home() {
  const router = useRouter()
  const {auth} = useSelector(({auth}) => auth)

  useEffect(() => {
    if(!auth){
      router.push('/auth-user')
    }
  }, [auth])

  const listUsers = [
    {
      id: 1,
      name: "Tom",
      avatar: "https://www.meme-arsenal.com/memes/ce76ac7389415a8594cd4a35cfa80d1c.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 2,
      name: "Dima",
      avatar: "https://livacha.com/upload/user/cover/37/51/user_RhFQQ_eDBDGqenImu1FoOOjHMmfO6ETtUEYVsO7aTNHZPi.jpeg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 3,
      name: "Rex",
      avatar: "https://i.playground.ru/i/pix/2081511/image.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 4,
      name: "Misha",
      avatar: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 5,
      name: "Lera",
      avatar: "https://klike.net/uploads/posts/2018-05/1525256972_15.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 6,
      name: "Elena",
      avatar: "https://pm1.narvii.com/6853/904030e9407738117e9a5f6e069adeaa5df12744v2_hq.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 7,
      name: "Tom",
      avatar: "https://www.meme-arsenal.com/memes/ce76ac7389415a8594cd4a35cfa80d1c.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 8,
      name: "Dima",
      avatar: "https://livacha.com/upload/user/cover/37/51/user_RhFQQ_eDBDGqenImu1FoOOjHMmfO6ETtUEYVsO7aTNHZPi.jpeg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 9,
      name: "Rex",
      avatar: "https://i.playground.ru/i/pix/2081511/image.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 10,
      name: "Misha",
      avatar: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 11,
      name: "Lera",
      avatar: "https://klike.net/uploads/posts/2018-05/1525256972_15.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 12,
      name: "Elena",
      avatar: "https://pm1.narvii.com/6853/904030e9407738117e9a5f6e069adeaa5df12744v2_hq.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 13,
      name: "Tom",
      avatar: "https://www.meme-arsenal.com/memes/ce76ac7389415a8594cd4a35cfa80d1c.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 14,
      name: "Dima",
      avatar: "https://livacha.com/upload/user/cover/37/51/user_RhFQQ_eDBDGqenImu1FoOOjHMmfO6ETtUEYVsO7aTNHZPi.jpeg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 15,
      name: "Rex",
      avatar: "https://i.playground.ru/i/pix/2081511/image.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 16,
      name: "Misha",
      avatar: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 17,
      name: "Lera",
      avatar: "https://klike.net/uploads/posts/2018-05/1525256972_15.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 18,
      name: "Elena",
      avatar: "https://pm1.narvii.com/6853/904030e9407738117e9a5f6e069adeaa5df12744v2_hq.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 19,
      name: "Tom",
      avatar: "https://www.meme-arsenal.com/memes/ce76ac7389415a8594cd4a35cfa80d1c.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 20,
      name: "Dima",
      avatar: "https://livacha.com/upload/user/cover/37/51/user_RhFQQ_eDBDGqenImu1FoOOjHMmfO6ETtUEYVsO7aTNHZPi.jpeg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 21,
      name: "Rex",
      avatar: "https://i.playground.ru/i/pix/2081511/image.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 22,
      name: "Misha",
      avatar: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 23,
      name: "Lera",
      avatar: "https://klike.net/uploads/posts/2018-05/1525256972_15.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 24,
      name: "Elena",
      avatar: "https://pm1.narvii.com/6853/904030e9407738117e9a5f6e069adeaa5df12744v2_hq.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 25,
      name: "Tom",
      avatar: "https://www.meme-arsenal.com/memes/ce76ac7389415a8594cd4a35cfa80d1c.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 26,
      name: "Dima",
      avatar: "https://livacha.com/upload/user/cover/37/51/user_RhFQQ_eDBDGqenImu1FoOOjHMmfO6ETtUEYVsO7aTNHZPi.jpeg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 27,
      name: "Rex",
      avatar: "https://i.playground.ru/i/pix/2081511/image.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 28,
      name: "Misha",
      avatar: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 29,
      name: "Lera",
      avatar: "https://klike.net/uploads/posts/2018-05/1525256972_15.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 30,
      name: "Elena",
      avatar: "https://pm1.narvii.com/6853/904030e9407738117e9a5f6e069adeaa5df12744v2_hq.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 1,
      name: "Tom",
      avatar: "https://www.meme-arsenal.com/memes/ce76ac7389415a8594cd4a35cfa80d1c.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 2,
      name: "Dima",
      avatar: "https://livacha.com/upload/user/cover/37/51/user_RhFQQ_eDBDGqenImu1FoOOjHMmfO6ETtUEYVsO7aTNHZPi.jpeg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 3,
      name: "Rex",
      avatar: "https://i.playground.ru/i/pix/2081511/image.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 4,
      name: "Misha",
      avatar: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 5,
      name: "Lera",
      avatar: "https://klike.net/uploads/posts/2018-05/1525256972_15.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 6,
      name: "Elena",
      avatar: "https://pm1.narvii.com/6853/904030e9407738117e9a5f6e069adeaa5df12744v2_hq.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 1,
      name: "Tom",
      avatar: "https://www.meme-arsenal.com/memes/ce76ac7389415a8594cd4a35cfa80d1c.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 2,
      name: "Dima",
      avatar: "https://livacha.com/upload/user/cover/37/51/user_RhFQQ_eDBDGqenImu1FoOOjHMmfO6ETtUEYVsO7aTNHZPi.jpeg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 3,
      name: "Rex",
      avatar: "https://i.playground.ru/i/pix/2081511/image.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 4,
      name: "Misha",
      avatar: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 5,
      name: "Lera",
      avatar: "https://klike.net/uploads/posts/2018-05/1525256972_15.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 6,
      name: "Elena",
      avatar: "https://pm1.narvii.com/6853/904030e9407738117e9a5f6e069adeaa5df12744v2_hq.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 1,
      name: "Tom",
      avatar: "https://www.meme-arsenal.com/memes/ce76ac7389415a8594cd4a35cfa80d1c.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 2,
      name: "Dima",
      avatar: "https://livacha.com/upload/user/cover/37/51/user_RhFQQ_eDBDGqenImu1FoOOjHMmfO6ETtUEYVsO7aTNHZPi.jpeg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 3,
      name: "Rex",
      avatar: "https://i.playground.ru/i/pix/2081511/image.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 4,
      name: "Misha",
      avatar: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    {
      id: 5,
      name: "Lera",
      avatar: "https://klike.net/uploads/posts/2018-05/1525256972_15.jpg",
      userStatus: "Ищу новые связи",
      status: true
    },
    
  ]

  return (
    <MyLauout showSidebar={true}>
          <div className={styles.Home}>
            <div className={styles.Home__top}> 
              <TextField fullWidth label="Поиск" variant="outlined" />
            </div>
            <div className={styles.Home__container}>
              {listUsers.map((item, index) => {
                return <Contact key={`${item.id}_${index}`} {...item} />
              })}
                
            </div>
          </div>
    </MyLauout>
  )
}
