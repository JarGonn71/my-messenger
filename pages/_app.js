import React from 'react';
import '../styles/globals.scss'
import { useEffect } from "react"
import { useSelector, useDispatch, Provider } from "react-redux"
import {store} from '../redux/store'

const MyApp = ({Component, pageProps}) => {

    return(
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
      
    );
}
 

export default MyApp;

