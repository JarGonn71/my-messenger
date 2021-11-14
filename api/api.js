import * as axios from 'axios'
import { parseCookies} from 'nookies'
const BrauserCookies = parseCookies( 'Token')


const instance = axios.create({
    withCreaentials: true,
    baseURL: 'http://localhost:5000/api/',
    
})

export const userAPI = {
    async registation(email, password, name, avatar="new avatar"){
        console.log('API: ', email, password, name)
        const {data} = await instance.post(`registration/`,
            {
                email: email,
                password: password,
                name: name,
                avatar: avatar  //random backgraunt-color
            }
        )
        return data
    },
    async login(email, password){
        const {data} = await instance.post(`login/`,
            {
                email: email,
                password: password,
            }
        )
        return data
    },
    async logout(){
        const {data} = await instance.post(`logout/`)
    },
    async refresh(){
        const {data} = await instance.get(`refresh/`, { withCredentials: true } )
        return data
    },


    async me(Token=BrauserCookies.Token){
        // console.log(Token)
        const {data} = await instance.get(`me/`, {
            headers: {
                "Authorization" : `JWT ${Token}`
            }
        })
        return data
    },

    async getUser(id){
        const {data} = await instance.get(`user/${id}`, {
            headers: {
                "Authorization" : `JWT ${Token}`
            }
        })
        return data
    },

    async users(Token=BrauserCookies.Token){
        const {data} = await instance.get(`users/`, {
            headers: {
                "Authorization" : `JWT ${Token}`
            }
        })
        return data
    },

    async searchUsers(search, Token=BrauserCookies.Token){
        const {data} = await instance.post(`serch-user/`, 
        {
            search: search, 
        },    
        {
            headers: {
                "Authorization" : `JWT ${Token}`
            }
        })
        return data
    },
}

export const dialogAPI = {
    async createDialog(partner, message){
        const {data} = await instance.post(`create-dialog/`,
        {
            partner: partner, 
            message: message
        },
        {
            headers: {
                "Authorization" : `JWT ${Token}`
            },
        })
        return data
    },

    async openDialig(id_dialog){
        const {data} = await instance.get(`dialog/${id_dialog}`,
        {
            headers: {
                "Authorization" : `JWT ${Token}`
            },
        })
        return data
    },

    async getAllDialogs(Token=BrauserCookies.Token){
        const {data} = await instance.get(`dialogs`,
        {
            headers: {
                "Authorization" : `JWT ${Token}`
            },
        })
        return data
    },

    async getSearchDialogs(search, Token=BrauserCookies.Token){
        const {data} = await instance.post(`serch-dialog`,
        {
            search: search, 
        },
        {
            headers: {
                "Authorization" : `JWT ${Token}`
            },
        })
        return data
    },

}