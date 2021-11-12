import * as axios from 'axios'
import { parseCookies} from 'nookies'
const {Token} = parseCookies( 'Token')


const instance = axios.create({
    withCreaentials: true,
    baseURL: 'http://localhost:5000/api/',
    
})

export const userAPI = {
    registation(email, password, name, avatar="new avatar"){
        console.log('API: ', email, password, name)
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
        return instance.get(`refresh/`, { withCredentials: true } )
    },


    me(){
        console.log(Token)
        return instance.get(`me/`, {
            headers: {
                "Authorization" : `JWT ${Token}`
            }
        })
    },

    getUser(id){
        return instance.get(`user/${id}`, {
            headers: {
                "Authorization" : `JWT ${Token}`
            }
        })
    },

    users(){
        return instance.get(`users/`, {
            headers: {
                "Authorization" : `JWT ${Token}`
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
                "Authorization" : `JWT ${Token}`
            },
        }
    )},

    openDialig(id_dialog){
        return instance.get(`dialog/${id_dialog}`,
        {
            headers: {
                "Authorization" : `JWT ${Token}`
            },
        }
    )},

    getAllDialogs(){
        return instance.get(`dialogs`,
        {
            headers: {
                "Authorization" : `JWT ${Token}`
            },
        }
    )},

}