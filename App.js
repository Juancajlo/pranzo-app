import React from "react";
import { Provider } from "react-redux";

import { store } from "./src/store/store";
import Application from "./Application";

function App() {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
}

export default App;
