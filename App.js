import React from "react";
// React Redux
import configureStore from "./src/redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

import { Sidebar } from "./src/components/Sidebar";
 /**
  * Redux needs to inject a store holding the app state into the app.
  * To do so, it requires a ‘Provider’ wrapping the whole app.
  * This store is basically a combination of reducers. 
  */ 
const store = configureStore();
export default function App() {
  return (
    <ReduxProvider store={store}>
          <Sidebar />
    </ReduxProvider>
  );
}
