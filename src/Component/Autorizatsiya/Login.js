import React, {useCallback,useContext} from 'react';
import{useNavigate,Navigate,Link} from "react-router-dom";
import config from "../firebase/config";
import {AuthContext} from "./Auth";
function Login() {

    const navigate = useNavigate()

    const signIn = useCallback(
            async event=>{
                    event.preventDefault();
                    const {email,password} = event.target.elements;
                    try{
                        await config.auth().signInWithEmailAndPassword(email.value,password.value)
                        navigate('/')
                    }catch (error){
                            alert(error)
                    }
            },[navigate]
    )

    const {currentUser} = useContext(AuthContext)

    if (currentUser){
        return <Navigate to={'/'}/>
    }

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={signIn}>
                <input type="email" name={'email'} placeholder={'Email'}/>
                <input type="password" name={'password'} placeholder={'Password'}/>
                <button type={"submit"}>Login</button>
            </form>
        </div>
    );
}

export default Login;
