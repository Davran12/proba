import {createContext, useContext, useReducer} from "react"

const CartContext = createContext(null)

const initialReducerState = {
  items: [],
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const finded = state.items.find((item) => item.id === action.product.id)
      if (finded) {
        alert("такой товар уже есть в корзине")
        return state
      }
      return {...state, items: [...state.items, action.product]}
    case "REMOVE_ITEM":
      return {...state, items: state.items.filter((i) => i.id !== action.id)}
    default:
      return state
  }
}

export const CartProvider = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, initialReducerState)
  return (
    <CartContext.Provider value={{state, dispatch}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) throw new Error("useCart must be used within CartProvider")
  return context
}
