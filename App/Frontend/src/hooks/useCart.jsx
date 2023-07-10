import { useContext } from "react";
import { CartContext } from "../context/cart";


export const useCart = ()=>{
    const context = useContext(CartContext)

    //buena practica, significa que no tenemos acceso con el provider
    if (context === undefined){
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}