"use client";

import { ApolloProvider } from "@apollo/client";
import { useEffect } from "react";
import client from "@/lib/apollo-client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

const GlobalProvider = ({ children }) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>{children}</Provider>
      <ToastContainer />
    </ApolloProvider>
  );
};

export default GlobalProvider;
