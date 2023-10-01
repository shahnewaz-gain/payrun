'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import Dashboard from '@/components/dashboard';

const DashboardPage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log('userInfo', userInfo);

  return <Dashboard />;
};

export default DashboardPage;
