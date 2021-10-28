import Head from 'next/head'

const MyLauout = ({title='Next | Messenger', children }) => {
 
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main className="App">
                {children}
            </main>
        </>
    )
}


export default MyLauout