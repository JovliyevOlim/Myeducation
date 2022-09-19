import {useState, useEffect, createContext} from "react";
import config from "../firebase/config";

export const AuthContext = createContext();

export  function AuthProvider({children}){
    const [ currentUser,setCurrentUser] = useState(null)
    const[loading,setLoading] = useState(true)

    useEffect(()=>{
        config.auth().onAuthStateChanged((user)=>{
            setCurrentUser(user)
                setLoading(false)
        })
    })

    if(loading){
            return<>Loading...</>
    }


    return(
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )

}



