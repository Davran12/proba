import {useReducer, useState} from "react"
import styles from "./TodoList.module.scss"

const init = []

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, {id: Date.now(), text: action.text, done: false}]
    case "remove":
      return state.filter((item) => item.id !== action.id)
    case "toggle":
      return state.map((item) =>
        item.id === action.id ? {...item, done: !item.done} : item
      )
    default:
      return state
  }
}

export function TodoList() {
  const [state, dispatch] = useReducer(reducer, init)
  const [text, setText] = useState("")

  const addTodo = () => {
    if (text.trim()) {
      dispatch({type: "add", text})
      setText("")
    }
  }

  return (
    <div className={styles.todoWrapper}>
      <h2>Список задач</h2>
      <div className={styles.todoForm}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="добавить задачу ..."
        />
        <button onClick={addTodo}>Добавить</button>
      </div>
      <ul className={styles.todoList}>
        {state.map((todo) => (
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
