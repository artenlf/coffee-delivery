import { Bank, CreditCard, Money } from 'phosphor-react';
import { createContext, ReactNode, useContext, useState } from 'react';
import products from "../db/products.json";
import { useLocalStorage } from '../hooks/useLocalStorage';


interface CartContextProviderProps {
  children: ReactNode;
}

interface avaiblePaymentMethodsProps {
  method: string;
  icon: any;
  name: string;
}

interface CartContextProps {
  cartItems: CartItemProps[];
  cartQuantity: number;
  itemsTotalPrice: number;
  deliveryFees: number;
  avaiblePaymentMethods: avaiblePaymentMethodsProps[];
  isActivePaymentMethod: string | undefined;
  itemQuantity: (id: number) => number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeItem: (id: number) => void;
  setIsActivePaymentMethod: React.Dispatch<React.SetStateAction<string | undefined>>;

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

  const [cartItems, setCartItems] = useLocalStorage<CartItemProps[]>("shopping-cart", [])

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

  const itemsTotalPrice = (cartItems.reduce((total, cartItem) => {
    const item = products.find(item => item.id === cartItem.id)
    return total + (item?.price || 0) * cartItem.quantity
  }, 0));

  const deliveryFees = 3.50;

  const avaiblePaymentMethods = [
    {
      method: "credit",
      icon: <CreditCard size={16} className="card-icon" />,
      name: "Cartão de crédito",
    },
    {
      method: "debit",
      icon: <Bank size={16} className="bank-icon" />,
      name: "Cartão de débito"
    },
    {
      method: "cash",
      icon: <Money size={16} className="cash-icon" />,
      name: "Dinheiro"
    }
  ]

  const [isActivePaymentMethod, setIsActivePaymentMethod] = useState<string | undefined>()

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

  return <CartContext.Provider value={{
    cartItems,
    itemsTotalPrice,
    deliveryFees,
    avaiblePaymentMethods,
    cartQuantity,
    itemQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    isActivePaymentMethod,
    setIsActivePaymentMethod,
  }}>
    {children}
  </CartContext.Provider>
}