import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isClickedAlert: false,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setClickedAlert(state, action) {
      state.isClickedAlert = action.payload;
    },
  },
});

export const { setClickedAlert } = formSlice.actions;
export default formSlice.reducer;
