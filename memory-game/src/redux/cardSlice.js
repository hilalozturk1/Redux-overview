import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { cardsArray } from "../data";
export const cardAdaptor = createEntityAdapter(); //

export const cardSelectors = cardAdaptor.getSelectors((state) => state.cards);

const emptyInitialState = cardAdaptor.getInitialState();
const filledState = cardAdaptor.upsertMany(emptyInitialState, cardsArray);

const cardSlice = createSlice({
  name: "cards",
  initialState: filledState,
  reducers: {
    updateCard: cardAdaptor.updateMany,
    updateOneCard: cardAdaptor.updateOne,
  },
});

export const { updateCard, updateOneCard } = cardSlice.actions;

export default cardSlice.reducer;
