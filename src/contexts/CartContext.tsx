import { createContext, ReactNode, useContext, useState } from 'react';

interface CartContextProviderProps {
  children: ReactNode;
}


interface CartContextProps {
  cartItems: CartItemProps[];
  cartQuantity: number;
  itemQuantity: (id: number) => number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeItem: (id: number) => void;
}

export interface CartItemProps {
  id: number;
  quantity: number;
}

const CartContext = createContext({} as CartContextProps);

export function useCart() {
  return useContext(CartContext)
}

export function CartContextProvider({ children }: CartContextProviderProps) {

  const [cartItems, setCartItems] = useState<CartItemProps[]>([])

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

  function itemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function increaseQuantity(id: number) {
    setCartItems(currentItems => {
      if (currentItems.find(item => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }]
      } else {
        return currentItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseQuantity(id: number) {
    setCartItems(currentItems => {
      if (currentItems.find(item => item.id === id)?.quantity === 1) {
        return currentItems.filter(item => item.id !== id)
      } else {
        return currentItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeItem(id: number) {
    setCartItems(currentItems => {
      return currentItems.filter(item => item.id !== id)
    })
  }

  return <CartContext.Provider value={{ cartItems, cartQuantity, itemQuantity, increaseQuantity, decreaseQuantity, removeItem }}>
    {children}
  </CartContext.Provider>
}