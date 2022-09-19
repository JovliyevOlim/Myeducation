import React,{useCallback} from 'react';
import {useNavigate} from "react-router-dom";
import config from "../firebase/config";

function Register(props) {

    let navigate = useNavigate();

    const signUp = useCallback( async event =>{
        event.preventDefault();
        const{email,password} = event.target.elements;
        try{
        await config.auth().createUserWithEmailAndPassword(email.value,password.value)
            navigate('/')
        }catch (error){
            alert(error)
        }
    },[navigate])

    return (
        <div></div>
    );
}

export default Register;
