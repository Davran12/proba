import {Provider} from "react-redux"
import {todo} from "./store"
import {TodoList} from "./TodoList"

export function App() {
  return (
    <Provider store={todo}>
      <div>
        <TodoList />
      </div>
    </Provider>
  )
}
