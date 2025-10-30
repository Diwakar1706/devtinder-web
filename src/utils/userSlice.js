
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload; // store user data
    },
    removeUser: (state, action) => {
       console.log("User removed:", state);
      return null; // clear user data
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
 