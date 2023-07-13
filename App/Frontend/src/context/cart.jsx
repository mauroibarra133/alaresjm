import { createContext, useState } from "react";
import { updateLocalStorage } from "../utils/functions";

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export function CartProvider({children}){
    const [cart, setCart] = useState(JSON.parse(window.localStorage.getItem("cart")) || []);

    const addToCart = product =>{
        //Check if the product is already in the cart
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        if(productInCartIndex >= 0){
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            setCart(newCart)
            updateLocalStorage(newCart)
        }else{
            //Si no está en el carrito
            const newCart = [...cart,{...product,quantity:1,priceSelected: product.precioGrande}]
            updateLocalStorage(newCart)
            setCart(newCart)
        }

    }
    const setPriceSelected = (id,newPriceSelected)=>{
        const productInCartIndex = cart.findIndex(item => item.id === id)
        const newCart = structuredClone(cart)
            newCart[productInCartIndex].priceSelected = newPriceSelected
            updateLocalStorage(newCart)
            setCart(newCart)
    }

    const clearCart = ()=>{
        window.localStorage.removeItem("cart")
        setCart([])
    }
    
    const checkProductInCart = product =>{
        return cart.some(item => item.id === product.id)
    }
    const removeProductFromCart = product =>{
        if(product.quantity>1){
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity -= 1
            updateLocalStorage(newCart)
            setCart(newCart)
        }else{
            const newCart = cart.filter(item => item.id !== product.id)
            updateLocalStorage(newCart)
            setCart(newCart)
        }
    }
    
    return(
        <CartContext.Provider value={
            {cart,
            addToCart,
            clearCart,
            checkProductInCart,
            removeProductFromCart,
            setPriceSelected
        }
        }>
        {children}
        </CartContext.Provider> 

    ) 
}