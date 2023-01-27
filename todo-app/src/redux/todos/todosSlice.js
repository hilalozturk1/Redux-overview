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
  reducers: {},
});

export default todosSlice.reducer;
