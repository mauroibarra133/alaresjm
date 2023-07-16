import { useContext } from "react";
import { AuthContext } from "../context/auth";


export const useAuth = ()=>{
    const context = useContext(AuthContext)

    //buena practica, significa que no tenemos acceso con el provider
    if (context === undefined){
        throw new Error('useAuth must be used within a AuthProvider')
    }
    return context
}