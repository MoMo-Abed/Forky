import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { ApolloProvider } from "react-apollo";

import store from "./src/Redux/Store";
import Routes from "./src/Routes";
import { Client } from "./src/Graphql/Client";

export default function App() {
  return (
    <ApolloProvider client={Client}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
