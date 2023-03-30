import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import "./styles/Antd.css"
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import { RouterProvider } from 'react-router-dom';
import {router} from "./router/router";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={setupStore()}>
    <RouterProvider router={router}/>
    </Provider>
);


