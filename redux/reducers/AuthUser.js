const SET_USER = 'SET_USER'

const initialstate = {
    auth: true,
    name: '',
    avatar: ''
}

const AuthUserReducer = (state = initialstate, action) => {
    switch (action.type) {
       case SET_USER:
           return{
               ...state,
               auth:true,
               name: action.payloud.name,
               avatar: action.payloud.avatar
           } 
        default:
            return{
                ...state
            }
    }
}



export default AuthUserReducer