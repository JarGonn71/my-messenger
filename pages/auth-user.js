import MyLauout from "../layouts/MyLayout"
import { Auth } from "../components"
import { useDispatch, useSelector } from "react-redux"
import styles from "../styles/AuthPage.module.scss"

export default function AuthUser() {
  const {auth} = useSelector(({auth}) => auth)

  return (
    <MyLauout>
          <div className={styles.AuthPage}>
            <Auth />
          </div>
    </MyLauout>
  )
}
