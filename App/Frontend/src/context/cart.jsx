/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}){
    //States
    const [cart, setCart] = useState([]);

    const addToCart = (product) =>{
        //Check if the product is already in the cart
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        if(productInCartIndex >= 0){
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            setCart(newCart)
        }else{
            //Si no está en el carrito
            const newCart = [...cart,{...product,quantity:1,priceSelected: product.preciogrande, id_tamaño: 3}]
            setCart(newCart)
        }

    }
    const setPriceSelected = (id,newPriceSelected, id_tamaño)=>{
        const productInCartIndex = cart.findIndex(item => item.id === id)
        const newCart = structuredClone(cart)
            newCart[productInCartIndex].priceSelected = newPriceSelected
            newCart[productInCartIndex].id_tamaño = id_tamaño
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
            const newCart = cart.filter(item => item.id !== product.id)
            setCart(newCart)
        }
    }

    function modifyCart(cart){
        let arrayItems = [];
        
        for (let i = 0; i < cart.length; i++) {
          let item = {
            id: cart[i].id,
            category_id: (cart[i].id_tamaño).toString(),
            title: cart[i].nombre,
            description: cart[i].descripcion,
            quantity: cart[i].quantity,
            unit_price: cart[i].priceSelected,
            currency_id: "ARS"
          }  
           arrayItems.push(item)
        }
        return arrayItems
        
        }

    return(
        <CartContext.Provider value={
            {cart,
            addToCart,
            clearCart,
            checkProductInCart,
            removeProductFromCart,
            setPriceSelected,
            modifyCart
        }
        }>
        {children}
        </CartContext.Provider> 

    ) 
}