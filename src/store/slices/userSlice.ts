import { createSlice } from "@reduxjs/toolkit";
import { IUserStore } from "../types";

const initialState: IUserStore = {
  isAuthorized: localStorage.getItem("user"),
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.isAuthorized = localStorage.getItem("user");
      state.token = action.payload;
    },

    unsetUser: (state) => {
      state.isAuthorized = localStorage.removeItem("user");
      state.token = "";
    },
  },
});
export const { setUserToken, unsetUser } = userSlice.actions;
export default userSlice.reducer;
