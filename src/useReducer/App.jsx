import {useReducer} from "react"
import {TodoList} from "./TodoList"

export function App() {
  //! синтаксис
  //   const [state, dispatch] = useReducer(reducer, initialState)
  //useReducer - альтернативный способ управление состоянием
  //? state - текущее состояние
  //? dispatch(action) - функция, которая вызывает reducer
  //? reducer(state, action) - функция, которая возвращает новое состояние
  //? initialState - начальное состояние

  return (
    <div>
      <h1>useReducer</h1>
      <TodoList />
    </div>
  )
}
