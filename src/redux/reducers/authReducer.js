const initialState = {
    user : null
}

export function authReducer(state = initialState, action){
    switch(action.type){
        case 'LOGIN':{
            return { user : action.payload }
        }
        case 'LOGOUT':{
            return { user : null }
        }
        default:{
            return state
        }
    }
}