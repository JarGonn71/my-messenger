import MyLauout from "../layouts/MyLayout"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { useEffect } from "react"

import { ListMessege } from "../components"

import styles from '../styles/Home.module.scss'

export default function Home() {
  const router = useRouter()
  const {auth} = useSelector(({auth}) => auth)

  useEffect(() => {
    if(!auth){
      router.push('/auth-user')
    }
  }, [auth])

  return (
    <MyLauout>
          <div className={styles.Home}>
              <div className={styles.Home__container}>
                  <ListMessege />
              </div>
          </div>
    </MyLauout>
  )
}
