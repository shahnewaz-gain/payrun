"use client";

import React, { useEffect, useState } from "react";
import { AppSpinner } from "@/helpers/ui";

const AuthWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return loading ? <AppSpinner /> : <div>{children}</div>;
};

export default AuthWrapper;
