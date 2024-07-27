import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDTO } from "./interfaces/user.dto";

const initialState: UserDTO | null = JSON.parse(
  localStorage.getItem("userData") || "null"
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<UserDTO>) => {
      state = action.payload;
    },
    logOut: (_) => {
      return null;
    },
  },
});

export const { userLogin, logOut } = userSlice.actions;
export default userSlice.reducer;
