import React from 'react'
import {useRouter} from 'next/router'
import MyLauout from '../../layouts/MyLayout'
import { Dialog } from '../../components'

function DialogId() {
    const router = useRouter()

    const item = {
        name: `nameId ${router.query.id}`,
        status: "offline",
        messeges: [
            {id: 1, text: 'hi'}
        ]
    }

    const onSubmit = (text) =>{
        console.log({messege: text})
    }

    return (
        <MyLauout showSidebar={true}>
             <Dialog item={item} onSubmit={onSubmit}/>
        </MyLauout>
        
    )
}

export default DialogId
