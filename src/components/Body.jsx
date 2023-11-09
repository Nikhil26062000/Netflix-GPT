import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import GptSearchPage from "./GptSearchPage";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/Netflix-GPT/", element: <Login /> },
    {
      path: "/Netflix-GPT/browse",
      element: <Browse />,
    },
    
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
