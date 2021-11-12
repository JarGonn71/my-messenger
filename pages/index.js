import MyLauout from "../layouts/MyLayout"
import { useEffect } from "react"
import { TextField } from '@material-ui/core';
import { Contact } from "../components";
import { useSelector, useDispatch } from "react-redux"




import styles from '../styles/Home.module.scss'

export default function Home({users=[]}) {


  
  return (
    <MyLauout showSidebar={true}>
          <div className={styles.Home}>
            <div className={styles.Home__top}> 
              <TextField fullWidth label="Поиск" variant="outlined" />
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
