import React from 'react';
import '../styles/globals.scss'
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {store, wrapper} from '../redux/store'
import { setUserData } from "../redux/slices/user";

const MyApp = ({Component, pageProps}) => {
    console.log('Render APP')
    return(
        <Component {...pageProps} />
    );
}
 

export default wrapper.withRedux(MyApp);


// export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
//     try {
//         console.log('tyt')
     
//       return { props: {}}
//     } catch (error) {
//       console.log(error)
//       return { props: {}}
//     }
//   })