import {configureStore} from "@reduxjs/toolkit"
import {todoList} from "./todo.slice"

export const todo = configureStore({
  reducer: {todo: todoList.reducer},
})
