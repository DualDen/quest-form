import React from "react";
import { Outlet } from "react-router-dom";
import AntdConfig from "./utils/AntdStylesConfig";

function App() {
  return (
    <div className="App">
        <AntdConfig>
        <Outlet />
        </AntdConfig>
    </div>
  );
}

export default App;
