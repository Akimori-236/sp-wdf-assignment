import { Outlet } from "react-router-dom";

export default function RootPage(props) {
    return (
        <div className="container text-center">
            <Outlet />
        </div>
    );
}
