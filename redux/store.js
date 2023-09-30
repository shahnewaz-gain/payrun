'use client';

import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/redux/auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default store;
