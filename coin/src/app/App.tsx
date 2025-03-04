import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ExchangePage, MainPage, MyPage, LoginPage } from "./index";
import { Layout1 } from "../layouts/index";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout1 />,
    children: [
      { path: "exchange", element: <ExchangePage /> },
      { path: "main", element: <MainPage /> },
      { path: "my", element: <MyPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "exchange", element: <ExchangePage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
