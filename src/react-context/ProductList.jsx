import {useCart} from "./CartContext"

const products = [
  {
    id: 1,
    name: "Кроссовки",
    price: 120,
  },
  {
    id: 2,
    name: "Футболка",
    price: 40,
  },
]

export function ProductList() {
  const {dispatch} = useCart()

  return (
    <div>
      <h2>Товары</h2>
      {products.map((i) => (
        <div key={i.id}>
          {i.name} - ${i.price}
          <button onClick={() => dispatch({type: "ADD_ITEM", product: i})}>
            Добавить в корзину
          </button>
        </div>
      ))}
    </div>
  )
}
