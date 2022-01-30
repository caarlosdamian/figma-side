import React from "react";
import { Sidebar } from "./components/Sidebar";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/Home";

export const routesMap = routes.map((value) => (
  <Route key={value.path} path={value.path} element={value.component} />
));
console.log(routesMap);
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="left">
          <Sidebar />
        </div>

        <div className="right">
          <Routes>
            {routesMap}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
