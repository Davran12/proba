import {Cart} from "./Cart"
import {CartProvider} from "./CartContext"
import {ProductList} from "./ProductList"

export function App() {
  return (
    // <ThemeProvider>
    // <Button />
    // </ThemeProvider>
    <CartProvider>
      <ProductList />
      <Cart />
    </CartProvider>
  )
}
