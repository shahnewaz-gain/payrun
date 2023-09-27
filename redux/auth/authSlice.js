'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userProfile: (state, action) => {
      const { userInfo } = action.payload || {};

      return { ...state, useProfile: userInfo };
    }
  }
});

export const { userProfile } = authSlice.actions;
export default authSlice.reducer;
