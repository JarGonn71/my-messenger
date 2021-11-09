import {userAPI} from '../../api/api'
import Cookies from 'js-cookie'

const SET_USER = 'SET_USER'

const initialstate = {
    auth: false,
    name: '',
    avatar: '',
    email: '',
    id: '',
    isActivated: false,
}

const AuthUserReducer = (state = initialstate, action) => {
    switch (action.type) {
       case SET_USER:
           return{
               ...state,
               auth: true,
               name: action.payloud.name,
               email: action.payloud.email,
               id: action.payloud.id,
               isActivated: action.payloud.isActivated,
               avatar: action.payloud.avatar,
           } 
        default:
            return{
                ...state
            }
    }
}


export const setUser = (payloud) => {
    return{type: SET_USER, payloud }
}

export const userRegistation = ({email, password, name, avatar}) => (dispatch) => {
    return userAPI.registation(email, password, name, avatar).then(r => {
        console.log(r)
        Cookies.set('Token', r.data.accessToken)
        Cookies.set('refresh', r.data.refreshToken)
        dispatch(setUser(r.data.user))
    }).catch(err => {
        console.log(err)
    })
}

export const userLogin = ({email, password}) => (dispatch) => {
    return userAPI.login(email, password).then(r => {
        console.log(r)
        Cookies.set('Token', r.data.accessToken)
        Cookies.set('refresh', r.data.refreshToken)
        dispatch(userMe())
    }).catch(err => {
        console.log(err)
    })
}

export const userMe = () => (dispatch) => {
    return userAPI.me().then(r => {
        console.log(r)
        dispatch(setUser(r.data))
    })
}



export default AuthUserReducer