
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./Login.jsx";
import Shop from "./pages/Shop.jsx";
import App from "./App.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        
        children: [
            {
                path: "",
                element: (
                    <Login/>
                ),
            },
            {
                path: "shop",
                element: (
                    <Shop/>
                ),
            }
        ],
    },
]);