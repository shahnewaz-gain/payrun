'use client';

import { redirect, usePathname } from 'next/navigation';
import { getUserDataFromToken } from '@/utils';

const loginRegisterPath = ['/login', '/registration'];

const Template = ({ children }) => {
  const { isAuthenticated } = getUserDataFromToken();
  const pathname = usePathname();

  const isLoginOrRegisterPath = loginRegisterPath.includes(pathname);

  if (!isAuthenticated && !isLoginOrRegisterPath) {
    return redirect('/login');
  }
  if (isAuthenticated && isLoginOrRegisterPath) {
    return redirect('/');
  }

  return children;
};

export default Template;
