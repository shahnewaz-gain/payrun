import axios from 'axios';
import { getApiBaseUrl } from '@/utils';

const BASE_API_URL = getApiBaseUrl();

export const requestForRegister = (formData) =>
  axios({
    method: 'post',
    url: `${BASE_API_URL}/api/users/register`,
    data: formData
  });

export const requestForLogin = (formData) =>
  axios({
    method: 'post',
    url: `${BASE_API_URL}/api/users/login`,
    data: formData
  });

export const getUserData = () =>
  axios({
    method: 'get',
    url: `${BASE_API_URL}/api/users/data`
  });
