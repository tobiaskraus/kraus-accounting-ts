import { createBrowserRouter, RouterProvider } from "react-router";
import FixedCostsPage from "./pages/FixedCostsPage";
import Layout from "./components/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: FixedCostsPage,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
