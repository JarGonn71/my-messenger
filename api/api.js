import * as axios from 'axios'

const instance = axios.create({
    withCreaentials: true,
    baseURL: 'http://localhost:5000/api/',
    
})

export const userAPI = {
    registation(email, password, name, avatar){
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
        return instance.get(`refresh/`)
    },


    me(){
        return instance.get(`me/`, {
            headers: {
              'x-access-token': 'token-value'
            }
        })
    },
    users(){
        return instance.get(`users/`, {
            headers: {
              'x-access-token': 'token-value'
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
                "x-access-token": "token-value",
            },
        }
    )},

    openDialig(id_dialog){
        return instance.get(`dialog/${id_dialog}`,
        {
            headers: {
                "x-access-token": "token-value",
            },
        }
    )},

    getAllDialogs(){
        return instance.get(`dialogs`,
        {
            headers: {
                "x-access-token": "token-value",
            },
        }
    )},

}