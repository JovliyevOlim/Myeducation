import React,{useContext} from 'react';
import {Navigate, Route,Routes} from 'react-router-dom'
import{AuthContext} from "./Auth";
import Home from "../Home/Home";
import Course from "../Home/Course";
import Contact from "../Home/Contact";
import Batafsil from "../Home/Batafsil";
import About from "../Home/About";
function PrivateRoute(props) {

        const {currentUser} = useContext(AuthContext)

    return (
            currentUser ?
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/courses'} element={<Course/>}/>
                    <Route path={'/contact'} element={<Contact/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/batafsil/:id'} element={<Batafsil/>}/>
                </Routes>
        : <Navigate to={'/login'}/>
    );
}

export default PrivateRoute;
