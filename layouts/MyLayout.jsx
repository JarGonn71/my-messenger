import Head from 'next/head'
import { useEffect } from "react"
import { useRouter } from "next/router"
import { useSelector, useDispatch } from "react-redux"
import {ListMessege} from '../components'
import {userMe} from '../redux/reducers/AuthUser'

const MyLauout = ({title='Next | Messenger', children, showSidebar=false}) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const {auth} = useSelector((store) => store);
    console.log(auth)
    
    useEffect(async () => {
        try {
            await dispatch(userMe())
        } catch (error) {
            console.log(error)   
        }
    }, [])

    useEffect(() => {
      if(!auth.auth){
        router.push('/auth-user')
      }
    }, [auth])
    
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main className="App">
                {
                    !showSidebar? <>{children}</>
                    :<div className="wrapper">
                        <div className="container">
                            <ListMessege />
                            {children}
                        </div>
                    </div>
                }
            </main>
        </>
    )
}


export default MyLauout