'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {}
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getUserInfo: (state, action) => {
      const { userInfo } = action.payload || {};

      return { ...state, userInfo };
    }
  }
});

export const { getUserInfo } = authSlice.actions;
export default authSlice.reducer;
