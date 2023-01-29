import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodosAsync = createAsyncThunk("todos/getTodosAsync", async () => {
  const res = await fetch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`);
  return await res.json();
});

export const addTodoAsync = createAsyncThunk("todos/addTodoAsync", async (data) => {
  console.log(data.title);
  const res = await fetch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: data.title,
    }),
  });
  return await res.json();
});

export const toggleTodoAsync = createAsyncThunk("todos/toggleTodoAsync", async (data) => {
  //todoId
  console.log(data);
  const res = await fetch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${data.id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      completed: data.completed,
    }),
  });
  return await res.json();
});

export const removeTodoAsycn = createAsyncThunk("todos/removeTodoAsycn", async (id) => {
  await fetch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`, {
    method: "DELETE",
  });
  return id;
});

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    isLoading: false,
    addNewTodoLoading: false,
    error: null,
    addNewTodoError: null,
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
            title,
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
  extraReducers: {
    // get todos
    [getTodosAsync.pending]: (state, action) => {
      //pending
      state.isLoading = true;
    },
    [getTodosAsync.fulfilled]: (state, action) => {
      //success
      state.items = action.payload; //pass
      state.isLoading = false;
    },
    [getTodosAsync.rejected]: (state, action) => {
      //error
      state.isLoading = false;
      state.error = action.error.message;
    },
    // add todo
    [addTodoAsync.pending]: (state, action) => {
      state.addNewTodoLoading = true;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.addNewTodoLoading = false;
    },
    [addTodoAsync.rejected]: (state, action) => {
      state.addNewTodoLoading = false;
      state.addNewTodoError = action.error.message;
    },
    //toggle todo
    [toggleTodoAsync.fulfilled]: (state, action) => {
      console.log(action.payload);
      const { id, completed } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      state.items[index].completed = completed;
    },
    //remove todo
    [removeTodoAsycn.fulfilled]: (state, action) => {
      const id = action.payload;
      const filteredList = state.items.filter((item) => item.id !== id);
      state.items = filteredList;
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
