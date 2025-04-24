import "./App.css";
import { countriesLoader } from "./pages/HomePage/loader.js";
import { createBrowserRouter, RouterProvider } from "react-router";
import { HomePage } from "./pages/HomePage/HomePage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: countriesLoader,
    // hydrateFallbackElement: <p>Loading</p>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
