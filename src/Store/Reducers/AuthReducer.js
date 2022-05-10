import { LOGIN, LOGOUT } from "../../Constants/Types/Types";

const initialState = {
    isLoginUser: false,
    user: {}
}


export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                isLoginUser: true,
                user: action.payload.userData
            }
        }
        
        case LOGOUT:{
            return {
                ...state,
                isLoginUser : false,
                user: {}
            }
           }

            

        default:
            return state;
    }
}