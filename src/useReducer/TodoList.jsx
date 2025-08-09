import {useReducer, useState} from "react"
import styles from "./TodoList.module.scss"

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        todos: [
          ...state.todos,
          {id: Date.now(), text: action.text, done: false},
        ],
      }
    case "remove":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.id),
      }
    case "toggle":
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.id ? {...item, done: !item.done} : item
        ),
      }
    case "setFilter":
      return {
        ...state,
        filter: action.filter,
      }
    default:
      return state
  }
}

export function TodoList({initialValues = {filter: "all"}}) {
  const initialState = {
    todos: [],
    filter: initialValues.filter || "all",
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  const [text, setText] = useState("")

  const addTodo = () => {
    if (text.trim()) {
      dispatch({type: "add", text})
      setText("")
    }
  }

  const filteredTodos = state.todos.filter((todo) => {
    if (state.filter === "active") return !todo.done
    if (state.filter === "completed") return todo.done
    return true
  })

  return (
    <div className={styles.todoWrapper}>
      <h2>Список задач</h2>

      <div className={styles.filter}>
        <button onClick={() => dispatch({type: "setFilter", filter: "all"})}>
          Все
        </button>
        <button onClick={() => dispatch({type: "setFilter", filter: "active"})}>
          Активные
        </button>
        <button
          onClick={() => dispatch({type: "setFilter", filter: "completed"})}
        >
          Выполненные
        </button>
      </div>

      <div className={styles.todoForm}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="добавить задачу ..."
        />
        <button onClick={addTodo}>Добавить</button>
      </div>

      <ul className={styles.todoList}>
        {filteredTodos.map((todo) => (
          <li
            className={todo.done ? styles.done : ""}
            onClick={() => dispatch({type: "toggle", id: todo.id})}
            key={todo.id}
          >
            {todo.text}
            <button
              onClick={(e) => {
                e.stopPropagation()
                dispatch({type: "remove", id: todo.id})
              }}
              className={styles.remove}
            >
              Х
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
