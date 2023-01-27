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
    activeFilter: "all",
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
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

export const { addTodo, toggle, removeItem, changeActiveFilter } = todosSlice.actions;
export default todosSlice.reducer;
