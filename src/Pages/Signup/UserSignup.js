import { useState } from "react";
import { useDispatch } from "react-redux";

import { doSignup } from "../../Store/Actions/AuthAction";


export default function UserSignup(){

    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const dispatch= useDispatch();

    const doUserSignup= ()=>{
        if ( !email || !password ) {
            alert("please add all inputs")
            return;
          }
        
        let user={
            password: password,
            email: email

        }
        dispatch(doSignup(user))

        setEmail("");
        setPassword("");
    }

    return{
        setEmail, setPassword, doUserSignup, email, password
    }

}