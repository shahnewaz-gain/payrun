'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { size } from 'lodash';
import { getUserDataFromToken, getApiBaseUrl, getAccessToken } from '@/utils';
import { userProfile } from '@/redux/auth/authSlice';

const Middleware = ({ children }) => {
  const { isAuthenticated } = getUserDataFromToken();
  const dispatch = useDispatch();

  const getUserProfile = async () => {
    try {
      const response = await axios.get(`${getApiBaseUrl()}/api/users/data`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getAccessToken()}`
        }
      });
      const userInfo = response?.data;

      if (size(userInfo)) {
        dispatch(userProfile({ userProfile: userInfo }));
      }
    } catch (error) {
      // Handle errors
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      getUserProfile();
    }
  }, [isAuthenticated]);

  return children;
};

export default Middleware;
