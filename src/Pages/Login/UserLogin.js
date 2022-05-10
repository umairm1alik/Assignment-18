import { useState } from "react";
import { useDispatch } from "react-redux";

import { doLogin } from "../../Store/Actions/AuthAction";


export default function UserLogin(){

    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const dispatch= useDispatch();

    const doUserLogin= ()=>{
        if ( !email || !password) {
            alert("please add all inputs")
            return;
          }
        
        let user={
            password: password,
            email: email

        }
        dispatch(doLogin(user))

        setEmail("");
        setPassword("");
    }

    return{
        setEmail, setPassword, doUserLogin, email, password
    }

}