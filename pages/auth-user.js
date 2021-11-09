import { useEffect } from "react"
import MyLauout from "../layouts/MyLayout"
import { useRouter } from "next/router"
import { Auth } from "../components"
import { useSelector } from "react-redux"

import styles from "../styles/AuthPage.module.scss"


export default function AuthUser() {
  const router = useRouter()
  const {auth} = useSelector((store) => store);

  useEffect(() => {
    if(auth.auth){
      router.push('/')
    }
  }, [auth])

  return (
    <MyLauout>
          <div className={styles.AuthPage}>
            <Auth />
          </div>
    </MyLauout>
  )
}
