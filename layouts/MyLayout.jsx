import Head from 'next/head'
import { useEffect } from "react"
import { useRouter } from "next/router"
import { useSelector, useDispatch } from "react-redux"
import {ListMessege} from '../components'


const MyLauout = ({title='Next | Messenger', children, showSidebar=false}) => {
    const router = useRouter()
    
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
                            <ListMessege/>
                            {children}
                        </div>
                    </div>
                }
            </main>
        </>
    )
}


export default MyLauout