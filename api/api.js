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
    }
}