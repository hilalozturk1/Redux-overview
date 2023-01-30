import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const char_limit = 12;

export const fetchCharacters = createAsyncThunk("characters/fetchCharacters", async (page) => {
  const res = await axios(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}?limit=${char_limit}&offset=${page * char_limit}`
  );
  return res.data.results;
});

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    page: 0,
    hasNextPage: true,
  },
  reducers: {
    morePage: {},
  },
  extraReducers: {
    [fetchCharacters.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.items = [...state.items, ...action.payload];
      state.isLoading = false;
      state.page += 1;

      if (action.payload.length < 12) {
        state.hasNextPage = false;
      }
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
