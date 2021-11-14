import MyLauout from "../layouts/MyLayout"
import { useEffect, useState } from "react"
import { TextField } from '@material-ui/core';
import { Contact } from "../components";
import { useSelector, useDispatch } from "react-redux"
import { parseCookies, setCookie } from "nookies";
import { userAPI, dialogAPI } from "../api/api";

import styles from '../styles/Home.module.scss'
import { wrapper } from "../redux/store";
import { setUserData, setDialogsData, setUsersList } from "../redux/slices/user";
import { useRouter } from "next/router";

export default function Home() {
  const dispatch = useDispatch()
  const {data, users} = useSelector(store => store.user)
  const router = useRouter()
  const [valueSearch, setValueSearch] = useState('')

  useEffect(async ()=>{
    if(!data){
      try {
        const data = await userAPI.refresh()
        setCookie(null, 'Token', data.accessToken)
        setCookie(null, 'refreshToken', data.refreshToken)
        router.push('/')
        console.log('new Tokens', parseCookies())
      } catch (error) {
        if(error.request.status === 401 && error.request.statusText === "Unauthorized"){
          console.warn('Unauthorized')
          router.push('/auth-user')
        }
      }
    }
  }, [])

  useEffect(async () => {
    if(valueSearch === ''){
      try {
        const users = await userAPI.users()
        dispatch(setUsersList(users))
      } catch (error) {
        console.warn(error)
      }
    }
  }, [valueSearch])

  const handleChange = (e) =>{
    setValueSearch(e.target.value)
  } 

  const handleKeyDown = async (e) => {
    try {
      if(e.key === 'Enter'){
        const data = await userAPI.searchUsers(valueSearch)
        dispatch(setUsersList(data))
    }
    } catch (error) {
        console.warn(error)
    }
  }

  return (
    <MyLauout showSidebar={true}>
          <div className={styles.Home}>
            <div className={styles.Home__top}> 
              <TextField  value={valueSearch} onKeyDown={handleKeyDown} onChange={handleChange}  fullWidth label="Поиск" variant="outlined" />
            </div>
            <div className={styles.Home__container}>
              {users.map((item, index) => {
                return <Contact key={`${item.id}_${index}`} {...item} />
              })}
            </div>
          </div>
    </MyLauout>
  )
}



export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  try {
    const {Token} = parseCookies(ctx)
    const UserData = await userAPI.me(Token)
    store.dispatch(setUserData(UserData))
    const users = await userAPI.users(Token)
    store.dispatch(setUsersList(users))
    const {dialogList} = await dialogAPI.getAllDialogs(Token)
    store.dispatch(setDialogsData(dialogList))
    return { props: {}}
  } catch (error) {
    console.log(error)
    return { props: {}}
  }
})