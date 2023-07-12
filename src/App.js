import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import InterFace from "./components/InterFace";
import Dashboard from "./components/Dashbord";
import store from "./Store";
export default function App() {
  return (
    <Provider store={store}>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<InterFace/>} />
        <Route path="/startJeux" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}
