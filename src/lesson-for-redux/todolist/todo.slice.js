import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  goods: [
    {
      id: 1,
      name: "Холодильник",
      price: 500,
    },
    {
      id: 2,
      name: "компьютер",
      price: 600,
    },
    {
      id: 3,
      name: "стол",
      price: 400,
    },
  ],
}

export const todoList = createSlice({
  name: "TodoList",
  initialState,
  reducers: {
    add() {},
    remove() {},
    edit() {},
  },
})
