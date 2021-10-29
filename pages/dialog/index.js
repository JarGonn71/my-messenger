import MyLauout from '../../layouts/MyLayout'
import { Dialog } from '../../components'
import {useRouter} from 'next/router'

const item = {
    name: "Tod",
    status: "online",
    messeges: []
}

function CreateDialog() {
    const router = useRouter()
    //async f, create dialog and new messege, router.push(/dialog/id_newdialog)
    const onSubmit =  (text) =>{
        console.log({messege: text})
        router.push('/dialog/1')
    }

    return (
        <MyLauout showSidebar={true}>
            <Dialog item={item} onSubmit={onSubmit}/>
        </MyLauout>
       
    )
}

export default CreateDialog
