import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="min-h-screen bg-paper text-ink">
            <Nav />
            <main className="pt-16">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
