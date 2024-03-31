import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isClickedAlert: false,
  isBurgerClicked: false,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setClickedAlert(state, action) {
      state.isClickedAlert = action.payload;
    },
    setBurgerClicked(state, action) {
      state.isBurgerClicked = action.payload;
    },
  },
});

export const { setClickedAlert, setBurgerClicked } = formSlice.actions;
export default formSlice.reducer;
