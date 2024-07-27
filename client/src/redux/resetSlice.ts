import { createSlice } from "@reduxjs/toolkit";

type ClickedState = {
  clicked: "clicked" | null;
};

const initialState: ClickedState = {
  clicked: null,
};

const resetSlice = createSlice({
  name: "reset",
  initialState: initialState,
  reducers: {
    add: (state) => {
      state.clicked = "clicked";
    },
    reset: (state) => {
      state.clicked = null;
    },
  },
});

export const { add, reset } = resetSlice.actions;
export default resetSlice.reducer;
