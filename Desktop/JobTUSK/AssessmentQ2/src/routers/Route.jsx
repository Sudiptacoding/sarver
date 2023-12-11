import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Details from "../pages/Details/Details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/details/:id",
                loader: ({ params }) => fetch(`https://api.punkapi.com/v2/beers/${params.id}`),
                element: <Details></Details>,
            },
        ],
    }
]);

export default router;