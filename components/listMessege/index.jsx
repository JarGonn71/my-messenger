import React, {useState, useEffect} from 'react'
import { TextField, InputAdornment } from '@material-ui/core';
import {BiTag, BiEdit, BiMenu} from 'react-icons/bi'
import ListMessegeItem from './ListMessegeItem';
import {useRouter} from 'next/router'
import {useSelector, useDispatch} from 'react-redux'
import styles from './ListMessege.module.scss'

import {dialogAPI} from '../../api/api'
import {setDialogsData} from '../../redux/slices/user'

function ListMessege() {
    const router = useRouter()
    const dispatch = useDispatch()
    const {dialogs} = useSelector((state) => state.user)
    const [showSidebar, setShowSidebar] = useState(false)
    const [valueSearch, setValueSearch] = useState('')

    const messegeList = dialogs.map((item, index) => {return <ListMessegeItem key={index} {...item} activeId={router.query.id} />})


    useEffect(async () => {
        if(valueSearch === ''){
          try {
            const {dialogList} = await dialogAPI.getAllDialogs()
            dispatch(setDialogsData(dialogList))
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
            const {dialogData} = await dialogAPI.getSearchDialogs(valueSearch)
            dispatch(setDialogsData(dialogData))
            console.log(data)
        }
        } catch (error) {
            console.warn(error)
        }
      }

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
                    value={valueSearch} 
                    onKeyDown={handleKeyDown} 
                    onChange={handleChange}
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
