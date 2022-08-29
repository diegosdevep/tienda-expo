import React, {createContext, useState} from 'react'

export const ProductContext = createContext()

const ProductProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const addToCart = (item, quantity) => {
        if(isInCart(item.id)){
            addQuantity(item.id, quantity)
        }else{
            setCart([...cart, {...item, quantity}])
        }
    }

    const isInCart = (id) => {
        const validate = cart.some(producto => producto.id === id)
        return validate;
    }

    const addQuantity = (id, quantity) => {
        const copy = cart.map(prod => {
            if(prod.id === id){
                const copy = {
                    ...prod,
                    quantity: prod.quantity + quantity
                };
                return copy
            }else{
                return prod
            }
        });
        setCart(copy)
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count = count + prod.quantity
        })
        return count
    } 

    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total = total + prod.price * prod.quantity
        })
        return total
    }
    const removeItem = (id) => {
        const itemsFiltered = cart.filter(prod => prod.id !== id)
        setCart(itemsFiltered)
    }

    const clearCart = () => {
        setCart([])
    }

    
    return (
        <ProductContext.Provider
            value={{
                cart,
                setCart,
                addToCart,
                getQuantity,
                getTotal,
                removeItem,
                clearCart
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider