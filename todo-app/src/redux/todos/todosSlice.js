import { createSlice, nanoid } from "@reduxjs/toolkit";

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
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ title }) => {
        return {
          payload: {
            id: nanoid(),
            completed: false,
            title
          },
        };
      },
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
    clearCompleted: (state) => {
      const filter = state.items.filter((item) => item.completed === false);
      state.items = filter;
    },
  },
});

export const selectTodos = (state) => state.todos.items;
export const selectFilteredTodos = (state) => {
  if (state.todos.activeFilter === "all") {
    return state.todos.items;
  }
  return state.todos.items.filter((todo) =>
    state.todos.activeFilter === "active" ? todo.completed === false : todo.completed === true
  );
};

export const { addTodo, toggle, removeItem, changeActiveFilter, clearCompleted } =
  todosSlice.actions;
export default todosSlice.reducer;
