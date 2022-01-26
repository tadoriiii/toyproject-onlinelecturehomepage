import React from "react";

import { Provider } from "react-redux";
import { store } from "redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "pages";

export const Router = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
