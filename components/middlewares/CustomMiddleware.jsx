'use client';

import useAddUserData from '@/helpers/hooks/useAddUserData';

const CustomMiddleware = ({ children }) => {
  // add user data to redux store
  useAddUserData();

  return children;
};

export default CustomMiddleware;
