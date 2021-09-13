import { ClientContext, GraphQLClient } from "graphql-hooks";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const client = new GraphQLClient({
  url: process.env.REACT_APP_POKE_ENDPOINT ?? "",
});

ReactDOM.render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <App />
    </ClientContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
