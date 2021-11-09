import * as axios from 'axios'
import Cookies from 'js-cookie'

const instance = axios.create({
    withCreaentials: true,
    baseURL: 'http://localhost:5000/api/',
    
})

export const userAPI = {
    registation(email, password, name, avatar=''){
        return instance.post(`registration/`,
            {
                email: email,
                password: password,
                name: name,
                avatar: avatar  //random backgraunt-color
            }
        )
    },
    login(email, password){
        return instance.post(`login/`,
            {
                email: email,
                password: password,
            }
        )
    },
    logout(){
        return instance.post(`logout/`)
    },
    refresh(){
        return instance.get(`refresh/`, {
            refresh: Cookies.get('refresh')
        })
    },


    me(){
        return instance.get(`me/`, {
            headers: {
                "Authorization" : `JWT ${Cookies.get('Token')}`
            }
        })
    },
    users(){
        return instance.get(`users/`, {
            headers: {
                "Authorization" : `JWT ${Cookies.get('Token')}`
            }
        })
    },
}

export const dialogAPI = {
    createDialog(partner, message){
        return instance.post(`create-dialog/`,
        {
            partner: partner, 
            message: message
        },
        {
            headers: {
                "Authorization" : `JWT ${Cookies.get('Token')}`
            },
        }
    )},

    openDialig(id_dialog){
        return instance.get(`dialog/${id_dialog}`,
        {
            headers: {
                "Authorization" : `JWT ${Cookies.get('Token')}`
            },
        }
    )},

    getAllDialogs(){
        return instance.get(`dialogs`,
        {
            headers: {
                "Authorization" : `JWT ${Cookies.get('Token')}`
            },
        }
    )},

}