import UserLogin from "./UserLogin";
import { Link } from "react-router-dom";



export default function Login(){
    const {setEmail, setPassword, doUserLogin, email, password }= UserLogin();
    return(
        <div>
            <h3>Login</h3>
            <label>Email:</label>
            <input type="email" value={email} placeholder="Enter Email" onChange={(e)=> setEmail(e.target.value)}/>
            <label>Password:</label>
            <input type="password" value={password} placeholder="Enter Password" onChange={(e)=> setPassword(e.target.value)}/>
            <input type="submit" value="Login" onClick={doUserLogin}/>
            <br/>
            <Link to="/signup">Register Here</Link>
            
        </div>
    );
}