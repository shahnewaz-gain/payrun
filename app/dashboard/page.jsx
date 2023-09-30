'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import withRoutingMiddleware from '@/components/middlewares/withRoutingMiddleware';
import Dashboard from '@/components/dashboard';

const DashboardPage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log('userInfo', userInfo);

  return <Dashboard />;
};

export default withRoutingMiddleware(DashboardPage);
