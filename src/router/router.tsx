import { createBrowserRouter } from "react-router-dom";
import { Store } from "../pages/Store";
import App from "../App";
import { Cart } from "../pages/Cart";
import QuestionaryPage from "../pages/QuestionaryPage";
import Order from "../pages/Order";

export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <Store />,
        path: "/",
      },
      {
        element: <Cart />,
        path: "cart",
      },
      { element: <QuestionaryPage />, path: "quest" },
      { element: <Order />, path: "order" },
    ],
  },
]);
