import { Provider } from "react-redux";
import { createHashRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage.js";
import PinnedEntities from "./PinnedEntities.js";
import RootPage from "./RootPage.js";
import store from "./storage/store.js";
import UpdateEntity from "./UpdateEntity.js";

const router = createHashRouter([
    {
        path: "/",
        element: <RootPage />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "/update/:id",
                element: <UpdateEntity />,
            },
            {
                path: "/pinned",
                element: <PinnedEntities />,
            },
        ],
    },
]);

export default function App(props) {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}
