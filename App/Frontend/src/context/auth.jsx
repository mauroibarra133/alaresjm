import { createContext, useEffect, useState } from "react";
import { isAuth } from "../services/auth.services";

export const AuthContext = createContext();


// eslint-disable-next-line react/prop-types
export function AuthProvider({children}){
    const [auth, setAuth] = useState(
        {
            isLogin: false,
            data: {}
        }
    );
async function isLogued(){
        const response = await isAuth()
        if(response != undefined){
            setAuth({
                isLogin: true ,
                data: response.data.data
            })
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