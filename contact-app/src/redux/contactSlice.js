import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter(); //

export const contactSelectors = contactAdaptor.getSelectors((state) => state.contacts);

const contactSlice = createSlice({
  name: "contacts",
  initialState: contactAdaptor.getInitialState(),
  reducers: {
    addContact: contactAdaptor.addOne,
    addContacts: contactAdaptor.addMany,
  },
});

export const { addContact, addContacts } = contactSlice.actions;
export default contactSlice.reducer;
