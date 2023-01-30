import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ title, color }) => {
        return {
          payload: {
            id: nanoid(),
            title,
            color,
          },
        };
      },
    },
  },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
