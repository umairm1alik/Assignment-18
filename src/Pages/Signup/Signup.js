import UserSignup from "./UserSignup";
import { Link } from "react-router-dom";


export default function Signup(){
    const {setEmail, setPassword, doUserSignup, email, password }= UserSignup();
    return(
        <div>
            <h3>Register</h3>
            <label>Email:</label>
            <input type="email" value={email} placeholder="Enter Email" onChange={(e)=> setEmail(e.target.value)}/>
            <label>Password:</label>
            <input type="password" value={password} placeholder="Enter Password" onChange={(e)=> setPassword(e.target.value)}/>
            <input type="submit" value="Register" onClick={doUserSignup}/>
            <br/>
            <Link to="/login">Login</Link>
        </div>
    );
}