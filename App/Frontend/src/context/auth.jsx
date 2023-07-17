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
        console.log(response);
        if(response.status == 200){
            setAuth({
                isLogin: true ,
                data: response.data.data
            })
        }
    }

    useEffect(()=>{
        isLogued()
    },[])



console.log(auth);
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