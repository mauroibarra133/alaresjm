/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { isAuth } from "../services/auth.services";
import { AuthError } from "../../../Backend/utils/error";

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

    useEffect(()=>{
        isLogued()
    },[])



    return(
        <AuthContext.Provider value={
            {auth,
            isLogued
        }
        }>
        {children}
        </AuthContext.Provider> 

    ) 
}