'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { size } from 'lodash';
import { getUserDataFromToken, getApiBaseUrl, getAccessToken } from '@/utils';
import { getUserInfo } from '@/redux/auth/authSlice';

function useAddUserData() {
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
        dispatch(getUserInfo({ userInfo }));
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

  return true;
}

export default useAddUserData;
