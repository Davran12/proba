import {useCart} from "./CartContext"

export function Cart() {
  const {state, dispatch} = useCart()
  console.log(state)

  return (
    <div>
      <h2>Корзина:</h2>
      {!state.items.length ? (
        <p>Корзина пуста</p>
      ) : (
        state.items.map((i) => (
          <div key={i.id}>
            {i.name} - ${i.price}
            <button onClick={() => dispatch({type: "REMOVE_ITEM", id: i.id})}>
              Удалить
            </button>
          </div>
        ))
      )}
    </div>
  )
}
