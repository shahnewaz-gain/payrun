/* eslint-disable react/jsx-props-no-spreading */

'use client';

import { usePathname } from 'next/navigation';
import { getUserDataFromToken } from '@/utils';
import Navigate from '@/components/custom/Navigate';

const loginRegisterPath = ['/login', '/registration'];

const withRoutingMiddleware = (Component) =>
  function WithRoutingMiddleware(props) {
    const { isAuthenticated } = getUserDataFromToken();
    const pathname = usePathname();

    const isLoginOrRegisterPath = loginRegisterPath.includes(pathname);

    if (!isAuthenticated && !isLoginOrRegisterPath) {
      return <Navigate to="/login" replace />;
    }
    if (isAuthenticated && isLoginOrRegisterPath) {
      return <Navigate to="/" replace />;
    }

    return <Component {...props} />;
  };

export default withRoutingMiddleware;
