"use client";
import { createContext, useState } from "react";
export const cartContext = createContext()
export default function cartProvider({children}){
    const [cart, setCart] = useState([])
    const addToCart = (product)=>{
        setCart ([...cart,product])
    }
    return <cartContext.Provider value={{cart,addToCart }}>
        {children}
    </cartContext.Provider>
}