 const types = {
    authLogOut: 'auth - logout',
    authLogIn: 'auth - login',
    updateProfile: 'update - profile'
}

const initialStore = {
    id:null,token:null,username:null,urlProfile:null,email:null,bornDate:null
}

export const storeReducer = (state,action) =>{
console.log(action)
    switch(action.type){
        case types.authLogOut:
            return {
                user:null
            };
            
        case types.authLogIn:
            return{
                ...action.payload
            }
        case types.updateProfile:
            return{
                ...state,...action.payload
            }
        case types.authPreferences:
          return {
            ...state,...action.payload
      };
        default:
            return state;
    }
}


export { initialStore, types };
