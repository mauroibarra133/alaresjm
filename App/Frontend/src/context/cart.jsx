import { createContext, useState } from "react";

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export function CartProvider({children}){
    const [cart, setCart] = useState([]);

    const addToCart = product =>{
        //Check if the product is already in the cart
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        if(productInCartIndex >= 0){
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            setCart(newCart)
        }else{
            //Si no está en el carrito
            setCart(prevState => (
            [...prevState,{...product,quantity:1,priceSelected: product.precioGrande}]
        ))
        }

    }
    const setPriceSelected = (id,newPriceSelected)=>{
        const productInCartIndex = cart.findIndex(item => item.id === id)
        const newCart = structuredClone(cart)
            newCart[productInCartIndex].priceSelected = newPriceSelected
            setCart(newCart)
    }

    const clearCart = ()=>{
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
            setCart(newCart)
        }else{
            setCart(prevState => prevState.filter(item => item.id !== product.id))
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