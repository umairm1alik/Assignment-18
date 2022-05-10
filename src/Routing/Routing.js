import { useSelector } from "react-redux";

import AssignedToMe from "../Pages/AssignedToMe";
import FlaggedEmail from "../Pages/FlaggedEmail";
import Important from "../Pages/Important";
import Planned from "../Pages/Planned";
import Tasks from "../Pages/Tasks";
import ToDoList from "../Pages/ToDoList/ToDoList";
import Login from "../Pages/Login/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouteLink from "./RouteLink/RouteLink";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";



export default function Routing(){

    const isLoginUser=useSelector((store) => store.AuthReducer.isLoginUser)
    // const isLoginUser=false;
    return(
        <Router>

            <RouteLink/>
            <Routes>
                <Route path="/" element={
                    <PrivateRoute isLoginUser={isLoginUser}>
                        <ToDoList/>
                    </PrivateRoute>
                }/>
                <Route path="/flaggedEmail" element={<FlaggedEmail/>}/>
                <Route path="/important" element={<Important/>}/>
                <Route path="/planned" element={<Planned/>}/>
                <Route path="/assignedToMe" element={<AssignedToMe/>}/>
                <Route path="/tasks" element={<Tasks/>}/>
                <Route path="/login" element={
                    <PublicRoute isLoginUser={isLoginUser}>
                        <Login/>
                    </PublicRoute>
                }/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </Router>
    );
}