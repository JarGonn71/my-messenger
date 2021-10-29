import Head from 'next/head'

import {ListMessege} from '../components'

const MyLauout = ({title='Next | Messenger', children, showSidebar=false}) => {
    console.log(showSidebar)
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