/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { isAuth } from "../services/auth.services";
import { AuthError } from "../utils/error"

export const AuthContext = createContext();


export function AuthProvider({children}){
    const [auth, setAuth] = useState(
        {
            isLogin: false,
            data: {}
        }
    );
async function isLogued(){
    try {
        const response = await isAuth()
        setAuth({
            isLogin: true ,
            data: response.data.data
        })
    } catch (error) {
        throw new AuthError()
}
}

function logout(){
    setAuth(
        {
            isLogin: false,
            data: {}
        }
    )
}

    useEffect(()=>{
        isLogued()
    },[])



    return(
        <AuthContext.Provider value={
            {auth,
            isLogued,
            logout
        }
        }>
        {children}
        </AuthContext.Provider> 

    ) 
}