import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk("characters/fetchCharacters", async () => {
  const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}?limit=10`);
  return res.data.results;
});

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchCharacters.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchCharacters.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default charactersSlice.reducer;
