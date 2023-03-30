import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import QuestionaryPage from "../pages/QuestionaryPage";
import Order from "../pages/Order";

export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      { element: <QuestionaryPage />, path: "/" },
      { element: <Order />, path: "order" },
    ],
  },
]);
