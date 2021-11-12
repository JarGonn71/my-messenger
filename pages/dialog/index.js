import MyLauout from '../../layouts/MyLayout'
import { Dialog } from '../../components'
import {useRouter} from 'next/router'
import {userAPI} from '../../api/api'
import { useEffect } from 'react'



const item = {
    name: "Tod",
    status: "online",
    messeges: []
}

function CreateDialog() {
    const router = useRouter()


    return (
        <MyLauout showSidebar={true}>
            <Dialog item={item} onSubmit={onSubmit}/>
        </MyLauout>
       
    )
}

export default CreateDialog
