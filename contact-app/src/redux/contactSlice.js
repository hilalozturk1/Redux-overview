import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter(); //

export const contactSelectors = contactAdaptor.getSelectors((state) => state.contacts);

const contactSlice = createSlice({
  name: "contacts",
  initialState: contactAdaptor.getInitialState(),
  reducers: {
    addContact: contactAdaptor.addOne,
    addContacts: contactAdaptor.addMany,
    deleteContact: contactAdaptor.removeOne,
    removeAllContact: contactAdaptor.removeAll,
    updateContact: contactAdaptor.updateOne,
  },
});

export const { addContact, addContacts, deleteContact, removeAllContact, updateContact } =
  contactSlice.actions;
export default contactSlice.reducer;
