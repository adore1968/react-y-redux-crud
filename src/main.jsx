import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TasksPage from "./pages/TasksPage.jsx";
import FormPage from "./pages/FormPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter(
  [
    {
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <TasksPage />,
        },
        {
          path: "/create-task",
          element: <FormPage />,
        },
        {
          path: "/edit-task/:id",
          element: <FormPage />,
        },
      ],
    },
  ],
  {
    basename: "/react-y-redux-crud/",
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
