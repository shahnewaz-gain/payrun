/* eslint-disable global-require */

'use client';

import { ApolloProvider } from '@apollo/client';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import client from '@/lib/apollo-client';
import { store } from '@/redux/store';
import AuthWrapper from '@/components/AuthWrapper';

const GlobalProvider = ({ children }) => {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <AuthWrapper>{children}</AuthWrapper>
      </Provider>
      <ToastContainer />
    </ApolloProvider>
  );
};

export default GlobalProvider;
