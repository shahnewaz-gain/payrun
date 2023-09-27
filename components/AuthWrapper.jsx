'use client';

import React, { useEffect, useState } from 'react';
import { AppSpinner } from '@/helpers/ui';

const AuthWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <AppSpinner />;
  return children;
};

export default AuthWrapper;
