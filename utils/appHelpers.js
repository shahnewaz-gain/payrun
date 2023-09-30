import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { size } from 'lodash';

// urls
export const getApiBaseUrl = () => process.env.NEXT_PUBLIC_API_BASE_URL;

// tokens
export const getAccessToken = () => Cookies.get('accessToken') || '';
export const getRefreshToken = () => Cookies.get('refreshToken') || '';

export const getUserDataFromToken = (newToken) => {
  const token = newToken || getAccessToken();
  const decodedData = token ? jwtDecode(token) : '';

  if (size(decodedData)) {
    return { ...decodedData, isAuthenticated: true };
  }
  return { isAuthenticated: false };
};
