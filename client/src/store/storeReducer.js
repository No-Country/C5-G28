 const types = {
    authLogOut: 'auth - logout',
    authLogIn: 'auth - login'
}

const initialStore = {
    id:null,token:null,username:null,urlProfile:null
}

export const storeReducer = (state,action) =>{

    switch(action.type){
        case types.authLogOut:
            return{
                user:initialStore
            };
            
        case types.authLogIn:
            return{
                user:action.payload
            }
        default:
            return state;
    }
}

export {initialStore,types}
