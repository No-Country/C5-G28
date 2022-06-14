 const types = {
    authLogOut: 'auth - logout',
    authLogIn: 'auth - login',
    updateProfile: 'update - profile'
}

const initialStore = {
    id:null,token:null,username:null,urlProfile:null,email:null
}

export const storeReducer = (state,action) =>{
console.log(action)
    switch(action.type){
        case types.authLogOut:
            return{
                user:initialStore
            };
            
        case types.authLogIn:
            return{
                user:action.payload
            }
        case types.updateProfile:
            return{
                user:action.payload
            }
        default:
            return state;
    }
}

export {initialStore,types}
