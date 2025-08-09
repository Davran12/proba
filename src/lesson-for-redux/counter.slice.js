import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    add: (state, action) => {
      state.value = state.value + action.payload
    },
    reset: () => {
      return initialState
    },
  },
})

export const {increment, decrement, add, reset} = counterSlice.actions
