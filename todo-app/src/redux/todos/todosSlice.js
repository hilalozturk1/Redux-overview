import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: "1",
        title: "Learn react",
        completed: true,
      },
      {
        id: "2",
        title: "read a book",
        completed: false,
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    toggle: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      const filteredList = state.items.filter((item) => item.id !== id);
      state.items = filteredList;
    },
  },
});

export const { addTodo, toggle, removeItem } = todosSlice.actions;
export default todosSlice.reducer;
