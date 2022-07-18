import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser } from "./userAPI";

export const fetchRandomUserThunk = createAsyncThunk(
  'users/random',
  async () => {
    const response = await getUser();
    return response.data;
  }
)

const initialState = {
  user: null,
  status: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    addUser: (state, action) => {
      state.user = [...state.user, ...action.user];
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomUserThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRandomUserThunk.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      });
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
