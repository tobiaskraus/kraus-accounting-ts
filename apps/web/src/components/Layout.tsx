import { Outlet } from "react-router";

export default function Layout() {
    return (
        <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
            <h1>Kraus Accounting</h1>
            <Outlet />
        </div>
    );
}
